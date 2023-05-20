import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'API/API.Axios';

// export const contactsSlice = createSlice({
//   name: 'contacts ',
//   initialState: [],
//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//     },
//     remove(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// export const { add, remove } = contactsSlice.actions;


  const initialContacts= {
    items: [],
    isLoading: false,
    error: null,
  }


export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const contactsReducer = contactsSlice.reducer;