export interface Customer {
  customer_number: number;
  first_name: string;
  last_name: string;
  date_birth: string;
  ssn: string;
  email: string | null;
  primary_address: CustomerAddress;
  mobile_phone_number: string | null;
  join_date: string;
}

export interface CustomerAddress {
  address_line_1: string;
  city: string;
  state: string;
  zip_code: number;
}

export type CreateCustomerDto = Omit<Customer, 'customer_number' | 'join_date'>;

export type CustomerTableItem = Omit<
  Customer,
  'email' | 'primary_address' | 'mobile_phone_number' | 'join_date'
> & { age: number };
