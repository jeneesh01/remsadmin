import axios, {CancelToken} from 'axios';
import {instanceWithAuth, instanceWithoutAuth} from '../util/axiosHandler';

// const getDashBoard = async (page: string) => {
//   return instanceWithoutAuth
//     .get(`api/v1/dashboard?page=${page}`)
//     .then(result => {
//       return result.data;
//     })
//     .catch(err => {
//       console.log('Error in dashboard data', err);
//       throw err;
//     });
// };
const getProperties = async () => {
  return instanceWithoutAuth
    .get(`property`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error in dashboard data', err);
      throw err;
    });
};
const getProperty = async (id:string) => {
  return instanceWithoutAuth
    .get(`property/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error in dashboard data', err);
    });
};
const addProperty = async (body:any) => {
   return instanceWithAuth
   .post('property/')
   .then(result=>{
    return result.data;
   })
   .catch(err=>{
    console.log("Error in add data",err);
    
   })
};

const modifyProperty = async (body: any,id:string) => {
  return instanceWithAuth
    .post(`property/${id}`, body)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error ', err);
    });
};

const deleteProperty = async (id:string) => {
  return instanceWithAuth
    .delete(`property/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error ', err);
    });
};

export default {
    getProperties,
    modifyProperty,
    getProperty,
    deleteProperty,
    addProperty,
};
