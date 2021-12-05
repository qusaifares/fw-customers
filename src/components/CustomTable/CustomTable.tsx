import { ReactNode, useState } from 'react';
import { FormControl, InputGroup, Pagination, Placeholder, Table } from 'react-bootstrap';
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
}

const CustomTable = <T extends {}>({ columns, data }: Props<T>) => {
  const [searchStr, setSearchStr] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  console.log(new Array(rowsPerPage).fill(<Placeholder />));
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
        <Pagination.Item onClick={() => setPage(n)} active={page === n}>
          {n}
        </Pagination.Item>
      )),
      <Pagination.Last onClick={() => setPage(pages)} />,
    ];
  };

  return (
    <div className='customTable'>
      <div className='customTable__header'>
        <InputGroup size='sm' className='customTable__headerSearch'>
          <FormControl
            className='customTable__headerSearchInput'
            placeholder='Search...'
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className='customTable__body'>
        <Table borderless className='customTable__bodyTable'>
          <thead>
            <tr>
              {columns.map(({ label }) => (
                <th>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!data.length
              ? data
                  .slice(rowsPerPage * (page - 1), rowsPerPage * page)
                  .filter((row) => Object.values(row).join(' ').toLowerCase().includes(searchStr))
                  .map((row, i) => (
                    <tr>
                      {columns.map(({ key }) => (
                        <td>{row[key] || ''}</td>
                      ))}
                    </tr>
                  ))
              : new Array(rowsPerPage).fill(
                  <tr>
                    {columns.map(() => (
                      <td>
                        <Placeholder animation='glow' as='div'></Placeholder>
                      </td>
                    ))}
                  </tr>
                )}
          </tbody>
        </Table>
      </div>
      <div className='customTable__footer'>
        <Pagination>{pageButtons()}</Pagination>
      </div>
    </div>
  );
};

export default CustomTable;
