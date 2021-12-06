import { FC, FormEventHandler, useEffect, useState } from 'react';
import { Alert, Button, FloatingLabel, Form, Modal, ModalProps } from 'react-bootstrap';
import {
  CreateCustomerDto,
  Customer,
  CustomerAddress,
  CustomersModalType,
} from '../../types/customer';
import { createCustomer } from '../../utils/api';

import './CustomerModal.scss';

interface Props extends ModalProps {
  type: CustomersModalType;
  customer?: Customer;
}

const CustomerModal: FC<Props> = ({ type, customer, ...props }) => {
  const textVars: { [key in CustomersModalType]: { title: string } } = {
    [CustomersModalType.CREATE]: { title: 'Create Customer' },
    [CustomersModalType.VIEW]: { title: 'View Customer' },
  };
  const text = textVars[type];
  const [renderCount, setRenderCount] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const incrementRenderCount = () => setRenderCount((prev) => prev + 1);
  const [customerData, setCustomerData] = useState<CreateCustomerDto>(
    customer ||
      ({
        first_name: '',
        last_name: '',
        date_birth: '',
        email: '',
        mobile_phone_number: '',
        primary_address: { address_line_1: '', city: '', state: '', zip_code: '' },
        ssn: '',
      } as CreateCustomerDto)
  );
  const addressFields = ['address_line_1', 'city', 'state', 'zip_code'];

  useEffect(() => {
    incrementRenderCount();
    return () => {
      setFormSubmitted(false);
      setCustomerData(
        customer ||
          ({
            first_name: '',
            last_name: '',
            date_birth: '',
            email: '',
            mobile_phone_number: '',
            primary_address: { address_line_1: '', city: '', state: '', zip_code: '' },
            ssn: '',
          } as CreateCustomerDto)
      );
    };
  }, [customer, props.show]);

  const fieldsFromObject = (data: any): string[] => {
    if (!data) return [];
    const fields = Object.keys(data).flatMap((key) =>
      typeof data[key] === 'object' ? fieldsFromObject(data[key]) : key
    );
    return fields as string[];
  };

  const fields = fieldsFromObject(customerData);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();

      const res = await createCustomer(customerData);
      setFormSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      {...props}
      dialogClassName='customerModal__dialog'
      contentClassName='customerModal__content'
    >
      <Modal.Header>
        <Modal.Title>{text.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='customerModal__body'>
        {formSubmitted ? (
          <Alert variant='success'>Customer has been created successfully!</Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <Form.Group
                key={`${renderCount}${field}`}
                className='mb-3'
                controlId={`formGroup__${field}`}
              >
                <Form.Label style={{ textTransform: field === 'ssn' ? 'uppercase' : 'capitalize' }}>
                  {field.replaceAll('_', ' ')}
                </Form.Label>
                <Form.Control
                  required
                  type={field === 'date_birth' ? 'date' : 'text'}
                  value={
                    customerData.primary_address[field as keyof CustomerAddress] ||
                    (customerData[field as keyof typeof customerData] as string)
                  }
                  onChange={(e) =>
                    setCustomerData((prev) => ({
                      ...prev,
                      primary_address: {
                        ...prev.primary_address,
                        ...(addressFields.includes(field) && { [field]: e.target.value }),
                      },
                      ...(!addressFields.includes(field) && { [field]: e.target.value }),
                    }))
                  }
                  readOnly={type === CustomersModalType.VIEW}
                />
              </Form.Group>
            ))}

            {type === CustomersModalType.CREATE ? (
              <Button variant='primary' type='submit' disabled={formSubmitted}>
                Submit
              </Button>
            ) : null}
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CustomerModal;
