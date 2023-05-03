import { createSlice } from "@reduxjs/toolkit";

const initState = {
  initState: true,
  menuStateOn: false,
}

export const menuSlice = createSlice({
  name: 'navMenu',
  initialState: initState,
  reducers: {
    toggleMenuState: (state) => {
      state.menuStateOn = state.initState ? true : !state.menuStateOn;
      state.initState = false;
    }
  }
})

export const { toggleMenuState } = menuSlice.actions;
export default menuSlice.reducer;