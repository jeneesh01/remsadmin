import storage from '@react-native-firebase/storage';

export const imagePath = async (imageurl: string | any) => {
  const dos = await storage()?.ref(imageurl)?.getDownloadURL();
  return dos;
};
