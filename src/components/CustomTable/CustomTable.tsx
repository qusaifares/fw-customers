import { ReactNode, useEffect, useState } from 'react';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Pagination,
  Placeholder,
  Table,
} from 'react-bootstrap';
import { Customer, CustomersModalType, CustomerTableItem } from '../../types/customer';
import CustomerModal from '../CustomerModal/CustomerModal';
import './CustomTable.scss';

export interface Column<T> {
  label: string;
  key: keyof T;
}

interface Props<T extends {}> {
  // developer can control what columns to show
  columns: Column<T>[];

  // data only shows values with keys that exist in columns
  data: T[];

  // get full customer data by number
  getCustomer: (customer_number: number) => Customer | undefined;
}

const CustomTable = <T extends {}>({ columns, data, getCustomer }: Props<T>) => {
  const rowsPerPageOptions = [25, 50, 100];

  const [searchStr, setSearchStr] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const [modal, setModal] = useState({ show: false, type: CustomersModalType.CREATE });
  const closeModal = () => setModal((prev) => ({ ...prev, customer: undefined, show: false }));
  const openModal = (type: CustomersModalType, row?: T) =>
    setModal((prev) => ({
      ...prev,
      customer: row && {
        ...getCustomer((row as unknown as CustomerTableItem).customer_number),
        age: (row as unknown as CustomerTableItem).age,
      },
      type,
      show: true,
    }));

  useEffect(() => {
    setPage(1);
  }, [rowsPerPage]);

  const pages = Math.ceil(data.length / rowsPerPage);

  // get up to 6 page buttons depending on current page
  const pageButtons = (): ReactNode => {
    const pageNums: number[] = [];

    let minPageBtn = Math.max(1, page - 3);
    const maxPageBtn = Math.min(pages, minPageBtn + 6);

    if (maxPageBtn === pages) {
      minPageBtn = Math.max(1, maxPageBtn - 6);
    }

    for (let i = minPageBtn; i <= maxPageBtn; i++) {
      pageNums.push(i);
    }

    return [
      <Pagination.First onClick={() => setPage(1)} />,
      ...pageNums.map((n) => (
        <Pagination.Item key={n} onClick={() => setPage(n)} active={page === n}>
          {n}
        </Pagination.Item>
      )),
      <Pagination.Last onClick={() => setPage(pages)} />,
    ];
  };

  const tableData = data
    .slice(rowsPerPage * (page - 1), rowsPerPage * page)
    .filter((row) => Object.values(row).join(' ').toLowerCase().includes(searchStr));

  return (
    <div className='customTable'>
      <CustomerModal {...modal} onHide={closeModal} />
      <div className='customTable__header'>
        <InputGroup className='customTable__headerSearch'>
          <FormControl
            className='customTable__headerSearchInput'
            placeholder='Search...'
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
          />
        </InputGroup>
        <div className='customTable__headerCreate'>
          <Button
            className='customTable__headerCreateBtn'
            variant='light'
            onClick={() => openModal(CustomersModalType.CREATE)}
          >
            Create Customer
          </Button>
        </div>
      </div>
      <div className='customTable__body'>
        <Table borderless className='customTable__bodyTable'>
          <thead>
            <tr>
              {columns.map(({ label }) => (
                <th key={label}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr
                key={Object.values(row).join('')}
                onClick={() => openModal(CustomersModalType.VIEW, row)}
              >
                {columns.map(({ label, key }) => (
                  <td key={label}>{row[key] || ''}</td>
                ))}
              </tr>
            ))}
            {new Array(rowsPerPage - tableData.length).fill(
              <tr className='customTable__bodyTableRow-placeholder'>
                {columns.map(({ label }) => (
                  <td key={label}>
                    <Placeholder animation='glow' as='div'></Placeholder>
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <div className='customTable__footer'>
        <div className='customTable__footerRows'>
          <Form.Select
            defaultValue={10}
            size='sm'
            onChange={(e) => setRowsPerPage(+e.target.value)}
          >
            {rowsPerPageOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </Form.Select>
          <p>rows per page</p>
        </div>
        <Pagination>{pageButtons()}</Pagination>
      </div>
    </div>
  );
};

export default CustomTable;
