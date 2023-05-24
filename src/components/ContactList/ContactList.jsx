import { ContactItem } from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { ListOfContacts } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'Redux/selectors';
import { fetchContacts } from 'API/API.Axios';
import { ThreeDots } from 'react-loader-spinner';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterValue = useSelector(selectFilter);

  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    return (
      <h3 style={{ paddingLeft: '40px' }}>There are no apropriate contacts</h3>
    );
  }

  return (
    <ListOfContacts>
      {isLoading && <ThreeDots color="darkblue" />}
      {error && <b>{error}</b>}
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ListOfContacts>
  );
};
