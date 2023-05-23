import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title.styled';

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
