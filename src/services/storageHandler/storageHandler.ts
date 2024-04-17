import AsyncStorage from '@react-native-async-storage/async-storage';

export const IS_LOGIN = 'is_login';
export const IS_FIRST_TIME = 'is_first_time';
export const RECENT_SEARCH = 'recent_search';
export const USER_INFO='user_info';
export const FONT_MULTIPLIER_VALUE = 'font_multiplier_value';
const getStorageData = async (key: string) => {
  try {
    const get_item = await AsyncStorage.getItem(key);
    if (get_item) {
      const data = JSON.parse(get_item);
      return data;
    } else {
      return null;
    }
  } catch {
    throw Error('Key not found');
  }
};

const setStorageData = async (key: string, value: any): Promise<void> => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw Error('Key not found');
  }
};

const removeStorageData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    throw new Error('Error removing storage data: ' + error);
  }
};

export {getStorageData, setStorageData, removeStorageData};
