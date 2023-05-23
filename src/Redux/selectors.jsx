// import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;



// export const selectFilteredContacts = createSelector(
//     [selectContacts, selectFilter],
//     (contacts, filterValue) => {
//       console.log("Calculating visible tasks. Now memoized!");
//       switch (statusFilter) {
//         case statusFilters.active:
//           return tasks.filter(task => !task.completed);
//         case statusFilters.completed:
//           return tasks.filter(task => task.completed);
//         default:
//           return tasks;
//       }
//     }
//   );