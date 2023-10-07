import { CreateContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import React from 'react';

export const App = () => {
  return (
    <>
      <CreateContact />
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
