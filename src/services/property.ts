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
    .get(`api/property`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error in dashboard data', err);
      throw err;
    });
};
const getProperty = async (id: string) => {
  return instanceWithoutAuth
    .get(`property/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error in dashboard data', err);
    });
};
const addProperty = async (body: any) => {
  console.log('Body', body);

  try {
    const response = await instanceWithAuth.post('api/property/', body, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error in add data', error);
    throw error;
  }
};
const modifyProperty = async (body: any, id: string) => {
  return instanceWithAuth
    .post(`property/${id}`, body)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error ', err);
    });
};

const deleteProperty = async (id: string) => {
  return instanceWithAuth
    .delete(`property/${id}`)
    .then(result => {
      return result.data;
    })
    .catch(err => {
      console.log('Error ', err);
    });
};
const propertyVerifty = async (body: any, id: string) => {
  return instanceWithAuth
    .get(`api/admin/verify-property/${id}`)
    .then(res => {
      return res.data;
    })
    .catch(e => {
      console.log('Error user authorize api', e);
    });
};
export default {
  getProperties,
  modifyProperty,
  getProperty,
  deleteProperty,
  addProperty,
  propertyVerifty,
};
