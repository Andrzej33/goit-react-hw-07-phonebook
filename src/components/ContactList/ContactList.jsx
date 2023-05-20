// import { takeContacts, takeFilter } from 'Redux/selectors';
// import { ContactItem } from '../ContactItem/ContactItem';

import { useEffect } from 'react';
import { ListOfContacts } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { takeContacts } from 'Redux/selectors';
import { fetchContacts } from 'API/API.Axios';

export const ContactList = () => {
const dispatch = useDispatch();
const { items, isLoading, error } = useSelector(takeContacts);
  useEffect(()=>{
dispatch(fetchContacts())
  })
  // const contacts = useSelector(takeContacts);
  // const filterValue = useSelector(takeFilter);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filterValue.toLowerCase())
  // );

  // if (filteredContacts.length === 0) {
  //   return (
  //     <h3 style={{ paddingLeft: '40px' }}>There are no apropriate contacts</h3>
  //   );
  // }

  return (
    <>
    <ListOfContacts>
      {/* {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })} */}
    </ListOfContacts>
     <div>
     {isLoading && <b>Loading tasks...</b>}
     {error && <b>{error}</b>}
     <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
   </div>
   </>
  );
};
