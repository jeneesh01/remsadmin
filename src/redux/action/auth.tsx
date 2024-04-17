import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch, RootState} from '../app/store';
import {
  IS_FIRST_TIME,
  IS_LOGIN,
  USER_INFO,
  getStorageData,
} from '../../services/storageHandler/storageHandler';
import { setIsFirstTime, setIsLogin, setRecentSearch, setUserInfo } from '../reducer/authSlice';
import { showMessage } from 'react-native-flash-message';
import { mixpanel, mixpanelTrack } from '../../util/mixpanel';
import * as Sentry from '@sentry/react-native'
import { AuthService } from '../../services/service';

export const getIsLogin = () => async (dispatch: AppDispatch) => {
  try {
    const isLogin = await getStorageData(IS_LOGIN);
    dispatch(setIsLogin(isLogin));
  } catch (error) {
    console.log('Async Error');
  }
};
export const getIsFirstTime = () => async (dispatch: AppDispatch) => {
  try {
    const isFirstTime = await getStorageData(IS_FIRST_TIME);
    dispatch(setIsFirstTime(isFirstTime));
  } catch (error) {
    console.log('Async Error');
  }
};
export const loadRecentSearchData = () => async (dispatch: AppDispatch) => {
  try {
    const recentSearchJson = await AsyncStorage.getItem('recent_search');
    if (recentSearchJson !== null) {
      const recentSearch: {city: string; state: string}[] =
        JSON.parse(recentSearchJson);
      dispatch(setRecentSearch({recentSearch}));
    }
  } catch (error) {
    console.error('Error loading recent search data:', error);
  }
};



export const getUserData = () => async (dispatch: AppDispatch) => {
  const user_auth_data = await getStorageData(USER_INFO);
  dispatch(setUserInfo(user_auth_data))
};

export const signIn =
  (
    email: string,
    password: string,
    onSuccess: (success: boolean) => void,
  ) =>
  async (disptach: AppDispatch, getState: () => RootState) => {
    const cleanedEmail = email.replace(/\s/g, '');
    const cleanPassword = password.replace(/\s/g, '');
    if (cleanedEmail === '' || cleanPassword === '') {
      showMessage({
        message: 'Incomplete Credentials',
        description: 'Please enter valid username and password.',
        type: 'warning',
      });
      onSuccess(false);
    } else {
      mixpanelTrack('Sign In With Email');
      try {
        const data = {
          email: cleanedEmail,
          password: cleanPassword,
        };
        const loginData = await AuthService.login(data);
        if (loginData) {

          disptach(setIsLogin(true));
          disptach(setUserInfo(loginData));
          showMessage({
            message: 'SignIn Successfully',
            type: 'success',
          });
          onSuccess(true);
        } else {
          showMessage({
            message: 'SignUp Failed',
            description: 'please sign up first in order to login',

            type: 'warning',
          });
          onSuccess(false);
        }
      } catch (error: any) {
        onSuccess(false);
        Sentry.captureMessage('Error in Sign In With Email ', error);
        showMessage({
          message: 'Sign-in Error',
          description: 'Please check your credentials and try again',
          type: 'danger',
        });
      }
    }
  };
export const isEmailValid = (email: string) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};
export const signUp =
  (
    email: string,
    password: string,
    confirmPassword: string,
    name: string,
    user_type: string,
    onSuccess: (success: boolean) => void,
  ) =>
  async (disptach: AppDispatch, getState: () => RootState) => {
    const cleanedEmail = email.replace(/\s/g, '');
    const cleanPassword = password.replace(/\s/g, '');
    const cleanConfirmPassword = confirmPassword.replace(/\s/g, '');

    if (!isEmailValid(email)) {
      showMessage({
        message: 'Invalid Email',
        description: 'Please enter a valid email address.',
        type: 'warning',
      });
      onSuccess(false);
    } else if (cleanPassword.length < 6) {
      showMessage({
        message: 'Password Too Short',
        description: 'Password should be at least 6 characters long.',
        type: 'warning',
      });
      onSuccess(false);
    } else if (cleanPassword !== cleanConfirmPassword) {
      showMessage({
        message: 'Password Mismatch',
        description: 'The password and confirm password do not match.',
        type: 'warning',
      });
      onSuccess(false);
    } else {
      mixpanelTrack('Sign Up With Email');

      try {
        const data = {
          email: cleanedEmail.toLowerCase(),
          name: name,
          password: cleanPassword,
          user_type:user_type
        };
        const loginData = await AuthService.register(data);
        console.log('Logindata', loginData);

        if (loginData) {
          disptach(setUserInfo(loginData));
          disptach(setIsLogin(true));
          showMessage({
            message: 'Sign Up Successfully',
            type: 'success',
          });

          onSuccess(true);
        } else {
          showMessage({
            message: 'Login Failed',
            description: 'email already in use. Kindly choose another email',
            type: 'warning',
          });
          onSuccess(false);
        }
      } catch (error: any) {
        console.log('error', error);

        onSuccess(false);
        Sentry.captureMessage('Error in Sign Up With Email ', error);
        showMessage({
          message: 'Account Creation Error',
          description: 'Please check your credentials and try again',
          type: 'danger',
        });
      }
    }
  };

// GoogleSignin.configure({
//   webClientId:
//     '558142856777-f93jneqj4blhn6ahc39bge1i67qdmd0t.apps.googleusercontent.com',
// });

// export const signUpWithGoogle =
//   (
//     navigation: NavigationProp<MainStackParamList>,
//     onSuccess: (success: boolean) => void,
//   ) =>
//   async (disptach: AppDispatch, getState: () => RootState) => {
//     const stateData = getState();
//     mixpanelTrack('Sign Up With Google');
//     try {
//       await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
//       const userData = await GoogleSignin.signIn();
//       // console.log('data', JSON.stringify(userData, null, 2));

//       const data = {
//         fcmToken: token ? token : '',
//         loginType: 'google',
//         email: userData?.user?.email,
//         socialToken: userData?.user?.id,
//         fName: userData?.user?.givenName,
//         lName: userData?.user?.familyName,
//         profileImage: userData?.user?.photo,
//       };

//       const loginData = await AuthService.login(data);

//       if (loginData) {
//         const mainData = {
//           ...data,
//           userID: loginData?.user?._id ?? '',
//         };
//         mixpanel.identify('' + mainData?.userID);

//         disptach(setUserInfo(mainData));

//         disptach(setIsLoggedIn(true));

//         console.log('dfasdfadsfadsf', loginData?.token);
//         disptach(setUserToken(loginData?.token));
//         // disptach(setIsLoggedIn(true));
//         showMessage({
//           message: 'Google SignIn Successfully',
//           type: 'success',
//         });
//         navigation.navigate('BottomTab' as never);

//         onSuccess(true);
//       } else {
//         showMessage({
//           message: 'Google SingUp Failed',
//           description: 'An error occurred while Google SignUp',
//           type: 'warning',
//         });
//         onSuccess(false);
//       }
//     } catch (error: any) {
//       onSuccess(false);

//       showMessage({
//         message: 'Google Sign Up Error',
//         description: 'Please check your credentials and try again',
//         type: 'danger',
//       });
//       Sentry.captureMessage('Error in GoogleSign Up ', error);
//     }
//   };

// export const signUpWithApple =
//   (
//     navigation: NavigationProp<MainStackParamList>,
//     onSuccess: (success: boolean) => void,
//   ) =>
//   async (disptach: AppDispatch, getState: () => RootState) => {
//     const stateData = getState();
//     try {
//       const appleAuthRequestResponse = await appleAuth.performRequest({
//         requestedOperation: appleAuth.Operation.LOGIN,
//         requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//       });

//       const {identityToken, email, fullName} = appleAuthRequestResponse;

//       const data = {
//         fcmToken: token ? token : '',
//         loginType: 'apple',
//         email: email,
//         socialToken: identityToken,
//         fName: fullName?.givenName,
//         lName: fullName?.familyName,
//       };

//       const loginData = await AuthService.login(data);
//       if (loginData) {
//         disptach(setIsLoggedIn(true));
//         disptach(setUserInfo(data));
//         disptach(setUserToken(loginData?.token));

//         showMessage({
//           message: 'Apple SignIn Successfully',
//           type: 'success',
//         });
//         navigation.navigate('BottomTab' as never);

//         // console.log('dfasdfadsfadsf', loginData);
//         onSuccess(true);
//         // navigation.reset({
//         //   index: 0,
//         //   routes: [{name: 'BottomTab'}],
//         // });
//       } else {
//         showMessage({
//           message: 'Apple SingUp Failed',
//           description: 'An error occurred while Apple SignUp',
//           type: 'warning',
//         });
//         onSuccess(false);
//       }
//     } catch (error: any) {
//       showMessage({
//         message: 'Apple Sign Up Error',
//         description: 'Please check your credentials and try again',
//         type: 'danger',
//       });
//       Sentry.captureMessage('Error in Apple Sign Up ', error);
//       console.error(error);
//     }
//   };

// export const singOUt =
//   (
//     userToken: string | null,
//     navigation: NavigationProp<MainStackParamList>,
//     onSuccess: (success: boolean) => void,
//   ) =>
//   async (disptach: AppDispatch, getState: () => RootState) => {
//     try {
//       const signout = await AuthService.signOut();
//       await GoogleSignin.signOut();
//       disptach(setIsLoggedIn(false));
//       showMessage({
//         message: 'Sign Out Successfully',
//         type: 'success',
//       });
//       disptach(setUserToken(null));
//       disptach(setCourseDetail(null));
//       navigation.navigate('BottomTab' as never);

//       onSuccess(true);
//       // console.log('Signout', signout);
//       console.log('Sign-out successful');
//     } catch (error: any) {
//       onSuccess(false);
//       showMessage({
//         message: 'Sign-Out Error',
//         description: 'Please check your credentials and try again',
//         type: 'danger',
//       });
//       Sentry.captureMessage('Error in  Sign Out ', error);
//     }
//   };

// export const changePAssword =
//   (
//     oldPassword: string,
//     newPassword: string,
//     confirmPassword: string,
//     navigation: NavigationProp<MainStackParamList>,
//     onSuccess: (success: boolean) => void,
//   ) =>
//   async (dispatch: AppDispatch, getState: () => RootState) => {
//     const cleanOldPassword = oldPassword.replace(/\s/g, '');
//     const cleanNewPassword = newPassword.replace(/\s/g, '');
//     const cleanCofirmPassword = confirmPassword.replace(/\s/g, '');
//     const userState = getState();
//     if (!oldPassword || !newPassword || !confirmPassword) {
//       showMessage({
//         message: 'Password Reset',
//         description:
//           'Please provide your old password, new password, and confirm the new password.',
//         type: 'warning',
//       });
//       onSuccess(false);
//     } else if (cleanNewPassword.length < 6) {
//       showMessage({
//         message: 'Password Too Short',
//         description: 'Password should be at least 6 characters long.',
//         type: 'warning',
//       });
//       onSuccess(false);
//     } else if (cleanOldPassword === cleanNewPassword) {
//       showMessage({
//         message: 'Password Reset',
//         description: 'Old password and new password should be different',
//         type: 'warning',
//       });
//       onSuccess(false);
//     } else if (cleanCofirmPassword !== cleanNewPassword) {
//       showMessage({
//         message: 'Password Reset',
//         description: 'New Password Mismatch',
//         type: 'warning',
//       });
//       onSuccess(false);
//     } else {
//       const userData = userState.auth?.userInfo;

//       const data: any = {
//         email: userData.email,
//         oldPassword: cleanOldPassword,
//         newPassword: cleanNewPassword,
//       };
//       const resetPassword = await AuthService.changePassword(data);
//       console.log('Reset pasw', resetPassword);
//       if (resetPassword) {
//         showMessage({
//           message: resetPassword?.message,
//           type: 'success',
//         });

//         navigation.navigate('BottomTab' as any, {
//           screen: 'Setting',
//         });
//         onSuccess(true);
//       } else {
//         showMessage({
//           message: 'Password Change Failed',
//           description: 'An error occurred while changing the password',
//           type: 'warning',
//         });
//         onSuccess(false);
//       }
//     }
//   };

// export const deleteACCOUNT =
//   (
//     navigation: NavigationProp<MainStackParamList>,
//     onSuccess: (success: boolean) => void,
//   ) =>
//   async (disptach: AppDispatch, getState: () => RootState) => {
//     const state = getState();
//     const userDetail = state.auth.userInfo;

//     if (userDetail && userDetail.email) {
//       const deleteUser = await AuthService.deleteAccount(userDetail.email);
//       const data = {
//         isLogin: false,
//         fcmToken: '',
//         loginType: '',
//         email: '',
//         socialToken: '',
//         fName: '',
//         lName: '',
//         profileImage: '',
//       };
//       console.log('delete user', deleteUser);
//       if (deleteUser) {
//         disptach(setIsLoggedIn(false));
//         disptach(setUserInfo(data));
//         disptach(setUserToken(null));
//         disptach(setCourseDetail(null));
//         await GoogleSignin.signOut();

//         navigation.navigate('BottomTab' as never);
//         onSuccess(true);
//       } else {
//         onSuccess(false);
//         showMessage({
//           message: 'Delete Account Failed',
//           description: 'An error occurred while deleting the account',
//           type: 'warning',
//         });
//       }
//     } else {
//       showMessage({
//         message: 'You do not have account',
//         type: 'info',
//       });
//       onSuccess(false);
//     }
//   };

// export const resetPassword =
//   (
//     email: string,
//     password: string,
//     navigation: NavigationProp<MainStackParamList>,
//     onSuccess: (success: boolean) => void,
//   ) =>
//   async (disptach: AppDispatch, getState: () => RootState) => {
//     const cleanPassword = password.replace(/\s/g, '');

//     mixpanelTrack('Reset Password Press');

//     try {
//       const data: ResetPasswordProps = {
//         email: email,
//         password: cleanPassword,
//       };
//       const resetpassword = await AuthService.resetPassword(data);
//       if (resetpassword && resetpassword.data) {
//         showMessage({
//           message: resetpassword.message,
//           type: 'success',
//         });
//         onSuccess(true);
//       } else {
//         onSuccess(false);
//         showMessage({
//           message: 'There is a issue in changing password! try again',
//           type: 'warning',
//         });
//       }
//     } catch (error: any) {
//       Sentry.captureMessage('Error in reset Password  ', error);
//       showMessage({
//         message: 'Password Reset Error',
//         description: error.message,
//         type: 'danger',
//       });
//       onSuccess(false);
//     }
//   };

// export const sendMAIL =
//   (email: string, onSuccess: (success: boolean) => void) =>
//   async (disptach: AppDispatch, getState: () => RootState) => {
//     const cleanEmail = email.replace(/\s/g, '');

//     if (!isEmailValid(email)) {
//       showMessage({
//         message: 'Invalid Email',
//         description: 'Please enter a valid email address.',
//         type: 'warning',
//       });
//       onSuccess(false);
//     } else {
//       // api call
//       const mail = await AuthService.sendMail(cleanEmail);
//       if (mail) {
//         showMessage({
//           message: 'Mail send Successfully ',
//           type: 'success',
//         });
//         disptach(setOTPToken(mail.token_otp));
//         onSuccess(true);
//       } else {
//         Sentry.captureMessage('Error in sending mail  ');

//         showMessage({
//           message: 'User do not exists with this email',
//           type: 'warning',
//         });
//         onSuccess(false);
//       }
//     }
//   };

// export const verificationOTP =
//   (email: string, otp: string, onSuccess: (success: boolean) => void) =>
//   async (disptach: AppDispatch, getState: () => RootState) => {
//     const state = getState();
//     if (otp.length < 6) {
//       showMessage({
//         message: 'Invalid OTP',
//         description: 'Please Enter Valid OTP.',
//         type: 'warning',
//       });
//       onSuccess(false);
//     } else {
//       // api call
//       const data: VerifyOTPProps = {
//         email: email,
//         otp: otp,
//         otp_token: state.auth.otp_token,
//       };
//       const verification = await AuthService.verifyOtp(data);
//       if (verification) {
//         if (verification.isValid) {
//           showMessage({
//             message: 'Otp Verified successfully',
//             type: 'success',
//           });
//           onSuccess(true);
//         } else {
//           showMessage({
//             message: 'Invalid OTP',
//             type: 'warning',
//           });
//           onSuccess(false);
//         }
//       } else {
//         onSuccess(false);

//         showMessage({
//           message: 'Oops! Something went wrong while trying to send the Otp',
//           type: 'warning',
//         });
//       }
//     }
//   };
// export const userAUTHORIZED =
//   (onSuccess: (success: boolean) => void) =>
//   async (dispatch: AppDispatch, getState: () => RootState) => {
//     const user_token = await EncryptedStorage.getItem('user_token');
//     const token = user_token ? JSON.parse(user_token) : null;
//     const is_loged = await AsyncStorage.getItem('is_logged');
//     const validateUser = is_loged ? JSON.parse(is_loged) : null;
//     if (validateUser) {
//       const verification = await AuthService.userAuthorize(token ?? '');
//       console.log('Verify', verification);

//       if (!verification) {
//         const data: IUser = {
//           isLogin: false,
//           fcmToken: '',
//           loginType: '',
//           email: '',
//           socialToken: '',
//           fName: '',
//           lName: '',
//           profileImage: '',
//         };

//         dispatch(setIsLoggedIn(false));
//         dispatch(setUserToken(''));
//         dispatch(setUserInfo(data));
//         onSuccess(false);
//       }
//     } else {
//       onSuccess(false);
//     }
//   };

// export const updatePROFILE =
//   (fName: string, lName: string, onSuccess: (success: boolean) => void) =>
//   async (dispatch: AppDispatch, getState: () => RootState) => {
//     const state = getState();
//     const userData = state.auth?.userInfo;
//     console.log('called');

//     if (!userData?.email && userData?.email?.length === 0) {
//       onSuccess(false);
//     } else {
//       if (userData?.email) {
//         const body: profileProps = {
//           email: userData.email,
//           fName: fName,
//           lName: lName,
//         };
//         const updateProfile = await AuthService.updateProfile(body);
//         console.log('profile', updateProfile);

//         if (updateProfile) {
//           const updatedUserData = {
//             ...userData,
//             fName: updateProfile.fName,
//             lName: updateProfile.lName,
//           };

//           dispatch(setUserInfo(updatedUserData));
//           onSuccess(true);
//         } else {
//           onSuccess(false);
//         }
//       }
//       onSuccess(false);
//     }
//   };
