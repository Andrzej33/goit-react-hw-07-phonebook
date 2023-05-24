import { ContactItem } from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { ListOfContacts } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilteredContacts } from 'Redux/selectors';
import { fetchContacts } from 'API/API.Axios';
import { ThreeDots } from 'react-loader-spinner';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListOfContacts>
      {isLoading && <ThreeDots color="darkblue" />}
      {error && <b>{error}</b>}
      {filteredContacts.length !== 0 ? (
        filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          );
        })
      ) : (
        <h3 style={{ paddingLeft: '40px' }}>
          There are no apropriate contacts
        </h3>
      )}
    </ListOfContacts>
  );
};
