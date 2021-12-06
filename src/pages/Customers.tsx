import { FC, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import CustomTable, { Column } from '../components/CustomTable/CustomTable';
import { Customer, CustomerTableItem } from '../types/customer';
import { getAge } from '../utils/age';
import { getCustomers } from '../utils/api';

import '../styles/Customers.scss';

interface Props {}

const Customers: FC<Props> = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const getCustomer = (customer_number: number) =>
    customers.find((cust) => cust.customer_number === customer_number);

  const populateCustomers = async () => {
    try {
      const customersRes = await getCustomers({ size: 200 });
      setCustomers(customersRes);
      const customersRes2 = await getCustomers({ size: 800 });
      setCustomers([...customersRes, ...customersRes2]);
    } catch (error: any) {
      setErrorMessage('Error fetching customers.');
    }
  };

  useEffect(() => {
    populateCustomers();

    return () => {
      setCustomers([]);
      setErrorMessage('');
    };
  }, []);

  const today = new Date();

  const getCustomerTableItems = (custList: Customer[]): CustomerTableItem[] => {
    return custList.map(({ customer_number, first_name, last_name, date_birth, ssn }) => ({
      customer_number,
      first_name,
      last_name,
      date_birth,
      ssn: ssn ? `***-**-${ssn.substring(ssn.length - 4)}` : '',
      age: getAge(date_birth, today),
    }));
  };

  const columns: Column<CustomerTableItem>[] = [
    { label: 'Customer Number', key: 'customer_number' },
    { label: 'First Name', key: 'first_name' },
    { label: 'Last Name', key: 'last_name' },
    { label: 'Date of Birth', key: 'date_birth' },
    { label: 'SSN', key: 'ssn' },
    { label: 'Age', key: 'age' },
  ];

  return (
    <div className='customers'>
      <div className='customers__content'>
        <CustomTable
          columns={columns}
          data={getCustomerTableItems(customers)}
          getCustomer={getCustomer}
        />
      </div>
    </div>
  );
};

export default Customers;
