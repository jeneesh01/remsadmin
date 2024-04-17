  import {instanceWithAuth, instanceWithoutAuth} from '../util/axiosHandler';
  
  const login = async (body: any) => {
    return instanceWithoutAuth
      .post('api/user/login', body)
      .then(res => {
        instanceWithAuth.defaults.headers.common.Authorization = `Bearer ${res.data?.token}`;
        return res.data;
      })
      .catch(e => {
        console.log('error in login api ', e);
      });
  };
  const register = async (body: any) => {
    return instanceWithoutAuth
      .post('api/user/register', body)
      .then(res => {
        instanceWithAuth.defaults.headers.common.Authorization = `Bearer ${res.data?.token}`;
        return res.data;
      })
      .catch(e => {
        console.log('error in login api ', e);
      });
  };
  
  const signOut = async () => {
    return instanceWithAuth
      .patch('api/user/logout')
      .then(res => {
        instanceWithAuth.defaults.headers.common.Authorization = '';
        return res.data;
      })
      .catch(e => {
        console.log('error in singout api ', e);
      });
  };
  
  const changePassword = async (body: any) => {
    return instanceWithAuth
      .post('api/v1/auth/changePassword', body)
      .then(res => {
        return res.data;
      })
      .catch(e => {
        console.log('Error in password reset api');
      });
  };
  const deleteAccount = async (email: any) => {
    return instanceWithAuth
      .post('api/v1/auth/deleteAccount', {email})
      .then(res => {
        instanceWithAuth.defaults.headers.common.Authorization = '';
        console.log('this is data of deleted account', res.data);
  
        return res.data;
      })
      .catch(e => {
        console.log('Error in delete account api', e);
      });
  };
  
  const sendMail = async (email: string) => {
    return instanceWithoutAuth
      .post('api/v1/auth/forgotPassword/sendMail', {email})
      .then(res => {
        console.log('this is mail data', res.data);
  
        return res.data;
      })
      .catch(e => {
        console.log('Error in send mail api', e);
      });
  };
  const verifyOtp = async (body: any) => {
    return instanceWithoutAuth
      .post('api/v1/auth/forgotPassword/verifyOtp', body)
      .then(res => {
        return res.data;
      })
      .catch(e => {
        console.log('Error in vefiry api', e);
      });
  };
  const resetPassword = async (body: any) => {
    return instanceWithoutAuth
      .post('api/v1/auth/forgotPassword/resetPassword', body)
      .then(res => {
        return res.data;
      })
      .catch(e => {
        console.log('Error in reset password api', e);
      });
  };
  const userAuthorize = async (uesrToken: string) => {
    instanceWithAuth.defaults.headers.common.Authorization = `Bearer ${uesrToken}`;
    return instanceWithAuth
      .get('api/v1/auth/userAuthorize')
      .then(res => {
        return res.data;
      })
      .catch(e => {
        console.log('Error user authorize api', e);
      });
  };
  const updateProfile = async (body: any) => {
    return instanceWithAuth
      .post('api/v1/auth/updateProfile', body)
      .then(res => {
        return res.data;
      })
      .catch(e => {
        console.log('Error in update profile api');
      });
  };
  export default {
    login,
    signOut,
    changePassword,
    deleteAccount,
    sendMail,
    verifyOtp,
    resetPassword,
    userAuthorize,
    updateProfile,
    register
  };
  