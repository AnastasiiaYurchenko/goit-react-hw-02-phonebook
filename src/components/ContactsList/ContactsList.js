import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          // <Item key={contact.id}>
          //   {contact.name} : {contact.number}
          // </Item>
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};
