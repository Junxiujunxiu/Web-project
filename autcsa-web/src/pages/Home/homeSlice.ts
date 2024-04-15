import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

export interface MoreListItem {
  item: string;
  link: string;
}

export interface HeaderState {
  qaIn: number;
  memberIn: number;
  staffIn: number;
  newsIn: number;
  moreList: Array<MoreListItem>;
}

const initialState: HeaderState = {
  qaIn: 0,
  memberIn: 0,
  staffIn: 0,
  newsIn: 0,
  moreList: [],
};

const headerStateSlice = createSlice({
  name: "headerState",
  initialState,
  reducers: {
    setQaIn: (state) => {
      state.qaIn = 1;
    },
    setMemberIn: (state) => {
      state.memberIn = 1;
    },
    setStaffIn: (state) => {
      state.staffIn = 1;
    },
    setNewsIn: (state) => {
      state.newsIn = 1;
    },
    setQaOut: (state) => {
      state.qaIn = 0;
    },
    setMemberOut: (state) => {
      state.memberIn = 0;
    },
    setStaffOut: (state) => {
      state.staffIn = 0;
    },
    setNewsOut: (state) => {
      state.newsIn = 0;
    },
    setHeaderState: (state, action: PayloadAction<number[]>) => {
      state.qaIn = action.payload[0];
      state.memberIn = action.payload[1];
      state.staffIn = action.payload[2];
      state.newsIn = action.payload[3];
    },
    setMoreList: (state, action: PayloadAction<MoreListItem[]>) => {
      state.moreList = action.payload;
    },
  },
});

export const {
  setQaIn,
  setMemberIn,
  setStaffIn,
  setNewsIn,
  setQaOut,
  setMemberOut,
  setStaffOut,
  setNewsOut,
  setHeaderState,
  setMoreList,
} = headerStateSlice.actions;
export default headerStateSlice.reducer;
