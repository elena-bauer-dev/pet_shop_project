import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories, getCategoriesById } from '../api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async () => {
    const { data } = await getCategories();
    return data;
  },
);
export const fetchCategoryProducts = createAsyncThunk(
  'categories/fetchOne',
  async (id) => {
    const { data } = await getCategoriesById(id);
    return data;
  },
);
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    status: 'idle',
    current: null,
    currentProducts: [],
    currentStatus: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.currentStatus = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.items = action.error.message;
      })

      .addCase(fetchCategoryProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.currentStatus = 'succeeded';
        state.current = action.payload.category;
        state.currentProducts = action.payload.data;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.items = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
