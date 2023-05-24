import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  ({ items }, filterValue) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
