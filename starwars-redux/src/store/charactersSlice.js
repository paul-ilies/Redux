import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
};

export const fetchCharactersFromAPI = createAsyncThunk(
  'characters/fetchCharacters',
  async (searchTerm) => {
    const responseData = await fetch(
      'https://swapi.dev/api/species?name=' + searchTerm,
    ).then((response) => response.json());
    return responseData.results;
  },
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    add: (state, action) => {
      state.characters = action.payload;
    },
  },
  extraReducers: {
    [fetchCharactersFromAPI.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchCharactersFromAPI.pending]: (state, action) => {
      state.loading = true;
    },
  },
});
