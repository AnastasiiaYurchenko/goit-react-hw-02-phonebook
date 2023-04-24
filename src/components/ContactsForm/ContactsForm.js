import { Formik } from 'formik';
import { FormField, Form, Button, Field } from './ContactsForm.styled';
import { FormWrapper } from './ContactsForm.styled';
import * as Yup from 'yup';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field'),
  number: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('Required field'),
});

export const ContactsForm = () => (
  <FormWrapper>
    <h1>Phonebook</h1>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={values => {
        console.log(values);
        console.log(values.number);
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
