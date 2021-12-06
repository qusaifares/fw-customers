import { GetCustomersOptions } from '../types/api';
import { CreateCustomerDto, Customer } from '../types/customer';

const API_URL = 'https://my.api.mockaroo.com/customers.json?key=e95894a0';

const request = (path: string, init?: RequestInit) => fetch(`${API_URL}${path}`, init);

export const getCustomers = async (options: GetCustomersOptions = {}): Promise<Customer[]> => {
  const { size } = options;
  const res = await request(size !== undefined ? `&size=${size}` : '');
  return res.json();
};

export const createCustomer = async (createCustomerDto: CreateCustomerDto) => {
  const res = await request('', {
    method: 'POST',
    body: JSON.stringify(createCustomerDto),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
};
