// imageUtils.ts

import { Platform } from 'react-native';
import RNFS from 'react-native-fs'; // Assuming you're using react-native-fs for file operations

// Function to persist image to a persistent location and return its URL
export const persistImage = async (uri: string): Promise<string> => {
  try {
    // Generate a unique filename
    const filename = `${Date.now()}.jpg`;

    // Determine the directory to save the image based on the platform
    const dir = Platform.OS === 'ios' ?
      `${RNFS.DocumentDirectoryPath}/images/` :
      `${RNFS.CachesDirectoryPath}/images/`;

    // Create the directory if it doesn't exist
    await RNFS.mkdir(dir);

    // Move the image to the persistent location
    const newPath = `${dir}${filename}`;
    await RNFS.moveFile(uri, newPath);
    console.log("path",newPath);
    

    // Return the persistent URL
    return newPath;
  } catch (error) {
    console.error('Error persisting image:', error);
    throw error;
  }
};
