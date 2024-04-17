import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {
  IPropertyDetail,

} from '../../@types/form';
interface IFormSlice {
  propertyDetail: IPropertyDetail;
  propertyDetailList: IPropertyDetail[];
  header: number;
}

const initialState: IFormSlice = {
  propertyDetail: {
    property_images:[],
    property_name:'',
    property_type:'',
    address:'',
    city:'',
    state:'',
    country:'india',
    zip:'',
    price:'',
    sqft:'',
    

  },
  propertyDetailList: [{
    property_images:[],
    property_name:'',
    property_type:'',
    address:'',
    city:'',
    state:'',
    country:'india',
    zip:'',
    price:'',
    sqft:'',

  }],

 
  header: 1,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPropertyData: (state, action: PayloadAction<IPropertyDetail>) => {
      state.propertyDetail = action.payload;
    },
    setPropertyDataList: (state, action: PayloadAction<IPropertyDetail[]>) => {
      state.propertyDetailList = action.payload;
    },
   
    setHeader: (state, action: PayloadAction<number>) => {
      state.header = action.payload;
    },
  },
});

export const {
  setPropertyData,
  setHeader,
  setPropertyDataList
} = formSlice.actions;

export default formSlice.reducer;
