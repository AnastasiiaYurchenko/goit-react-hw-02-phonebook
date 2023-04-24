import { Formik } from 'formik';
import {
  FormField,
  Form,
  Button,
  Field,
  ErrorMessage,
} from './ContactsForm.styled';
import { FormWrapper } from './ContactsForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
// import * as yup from 'yup';
// const yup = require("yup");
import 'yup-phone';

const phoneRegExp =
  /^(\+?3?8)?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field'),
  number: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .required('Required field'),
});

export const ContactsForm = ({ onSave }) => (
  <FormWrapper>
    <h1>Phonebook</h1>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        console.log(values.number);
        onSave({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" placeholder="Jane Petrenko" />
          <ErrorMessage name="name" component="div" />
        </FormField>

        <FormField>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </FormField>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  </FormWrapper>
);
