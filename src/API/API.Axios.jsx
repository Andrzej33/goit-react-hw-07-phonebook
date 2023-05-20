import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://646885c360c8cb9a2cab8d4d.mockapi.io/api/v5";


export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_,thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
  return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
});


// export const fetchTasks = createAsyncThunk(
//     "tasks/fetchAll",
//     // Використовуємо символ підкреслення як ім'я першого параметра,
//     // тому що в цій операції він нам не потрібен
//     async (_, thunkAPI) => {
//       try {
//         const response = await axios.get("/tasks");
//         // При успішному запиті повертаємо проміс із даними
//         return response.data;
//       } catch (e) {
//         // При помилці запиту повертаємо проміс
//         // який буде відхилений з текстом помилки
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
//   );