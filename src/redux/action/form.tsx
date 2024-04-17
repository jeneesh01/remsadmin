import { showMessage } from "react-native-flash-message";
import { IPropertyDetail } from "../../@types/form";
import { PropertyService } from "../../services/service";
import { mixpanelTrack } from "../../util/mixpanel";
import { AppDispatch, RootState } from "../app/store";
import { setPropertyData, setPropertyDataList } from "../reducer/formSlice";






export const addPropertyData =
  <K extends keyof IPropertyDetail>(
    key: K,
    data: IPropertyDetail[K],
  ) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const transactionDetail = {...state.form.propertyDetail};
    const transaction = {...transactionDetail, [key]: data};
    dispatch(setPropertyData(transaction));
  };

  
export const emptyProperty=()=>async(dispatch:AppDispatch,getState:()=>RootState)=>{
   const  propertyDetail= {
        property_images:[],
        property_name:'',
        property_type:'',
        address:'',
        city:'',
        state:'',
        country:'India',
        zip:'',
        price:'',
        sqft:'',
      }
    dispatch(setPropertyData(propertyDetail));
     
}

export const getPropertiesData = () => async (dispatch: AppDispatch) => {
  const data = await PropertyService.getProperties();
  if(data.status){
    dispatch(setPropertyDataList(data));
  }else{
    showMessage({
      type:'warning',
      message:data.message
      
    })
  }
};

export const getProperty =(id:string,
  
  )=>async(dispatch:AppDispatch)=>{
  mixpanelTrack('User get specific new property');
  const data =  await PropertyService.getProperty(id);
  if(data.status){
    showMessage({
      type:'info',
      message:data.message
      
    })
    dispatch(setPropertyDataList(data));
  }else{
    showMessage({
      type:'warning',
      message:'Issue in Getting Data'
      
    })
  }

}
export const addProperty =
  (
    body: any,
    onSuccess: (success: boolean) => void,
  ) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    mixpanelTrack('User add Property');

      const data = await PropertyService.addProperty(body);
      if(data.status){
        showMessage({
          type:'info',
          message:data.message
          
        })
        dispatch(getPropertiesData())
        onSuccess(true);
      }else{
        showMessage({
          type:'warning',
          message:'Issue in adding Data'
          
        })
        onSuccess(false)
      }
  };
export const deleteProperty =
  (id: string, onSuccess: (success: boolean) => void) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    mixpanelTrack('User delete Property');

      const data = await PropertyService.deleteProperty(id);
      if(data.status){
        showMessage({
          type:'info',
          message:data.message
          
        })
        dispatch(getPropertiesData())

        onSuccess(true);

      }else{
        showMessage({
          type:'warning',
          message:'Issue in deleting Data'
          
        })
        onSuccess(false);
      }
  };


export const modifyProperty =
  (id: string, body: any, onSuccess: (success: boolean) => void) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    mixpanelTrack('User modify Property');

      const data = await PropertyService.modifyProperty(body,id);
      if(data.status){
        showMessage({
          type:'info',
          message:data.message
          
        })
        dispatch(getPropertiesData())

        onSuccess(true);

      }else{
        showMessage({
          type:'warning',
          message:'Issue in updating Data'
          
        })
        onSuccess(false);
      }
  };
