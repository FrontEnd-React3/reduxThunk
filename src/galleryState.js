import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// https://www.youtube.com/watch?v=lH-yFJZF0ts
export const getPhotos = createAsyncThunk('photos/getPhotos', async () => {
  const response = await fetch(
    "https://picsum.photos/v2/list?page=3&limit=9"
  );
  const formattedResponse = await response.json();
  return formattedResponse;

});
export const gallerySlice = createSlice({
  name: "gallery",
  initialState: { photos: [], isLoading: false},
  // THUNK starts here
  extraReducers: {

    [getPhotos.pending]: state => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
      // console.log("action.payload" + action.payload);
    },
    [getPhotos.rejected]: state => {
      state.isLoading = false;
    }
  }

});
export default gallerySlice.reducer;
