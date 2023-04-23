import { Formik } from 'formik';
import { FormField, Form, Button, Field } from './ContactsForm.styled';
import { FormWrapper } from './ContactsForm.styled';

export const ContactsForm = () => (
  <FormWrapper>
    <h1>Phonebook</h1>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" placeholder="Jane Petrenko" />
        </FormField>

        <FormField>
          Number
          <Field type="tel" name="number" />
        </FormField>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  </FormWrapper>
);
