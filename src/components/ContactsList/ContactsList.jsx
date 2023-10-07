import { ButtonDelete, Lilist, Ullist } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { delContact, getphoneBooksValue } from 'redux/contactSlice';
import { getFilter } from 'redux/filter.Slice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const phoneBook = useSelector(getphoneBooksValue);

  const filterPhoneBook = useSelector(getFilter);

  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(filterPhoneBook)
  );

  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };

  return (
    <Ullist>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Lilist key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <ButtonDelete type="button" onClick={() => deleteContact(id)}>
              Delete
            </ButtonDelete>
          </Lilist>
        );
      })}
    </Ullist>
  );
};
