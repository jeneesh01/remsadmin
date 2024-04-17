import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {
  IS_FIRST_TIME,
  IS_LOGIN,
  RECENT_SEARCH,
  USER_INFO,
  setStorageData,
} from '../../services/storageHandler/storageHandler';
export interface IAuthSlice {
  token: null;
  isFirstTime: boolean | null;
  isLogin: boolean | null;
  city: string;
  states: string;
  recentSearch: {city: string; state: string}[];
  userInfo:any;
  drawerIndex:number;
}

const initialState: IAuthSlice = {
  token: null,
  isFirstTime: null,
  isLogin: null,
  city: '',
  states: '',
  recentSearch: [],
  userInfo:null,
  drawerIndex:1
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsFirstTime: (state, action: PayloadAction<boolean | null>) => {
      setStorageData(IS_FIRST_TIME, action.payload);
      state.isFirstTime = action.payload;
    },
    setIsLogin: (state, action: PayloadAction<boolean | null>) => {
      setStorageData(IS_LOGIN, action.payload);
      state.isLogin = action.payload;
    },
    setRecentSearch: (
      state,
      action: PayloadAction<{recentSearch: {city: string; state: string}[]}>,
    ) => {
      state.recentSearch = action.payload.recentSearch;
    },
    setCityState: (
      state,
      action: PayloadAction<{city: string; states: string}>,
    ) => {
      const {city, states} = action.payload;
      state.city = city;
      state.states = states;
      const existingIndex = state.recentSearch.findIndex(
        item => item.city === city && item.state === states,
      );
      if (city.length != 0 || states.length != 0) {
        if (existingIndex !== -1) {
          const [recentItem] = state.recentSearch.splice(existingIndex, 1);
          state.recentSearch.unshift(recentItem);
        } else {
          state.recentSearch.unshift({city, state: states});
        }
        setStorageData(RECENT_SEARCH, state.recentSearch);
      }
    },
    setUserInfo: (state, action: PayloadAction<any>) => {
      setStorageData(USER_INFO, state.userInfo);

      state.userInfo = action.payload;
    },
    setDrawerIndex: (state, action: PayloadAction<any>) => {
      state.drawerIndex = action.payload;
    },
  },
});

export const {setIsFirstTime, setIsLogin, setCityState, setRecentSearch,setUserInfo,setDrawerIndex} =
  authSlice.actions;

export default authSlice.reducer;
