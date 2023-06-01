import { storage, app } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export default async function uploadPhotoToServer(uploadedImg, folder) {
  try {
    const res = await fetch(uploadedImg);
    const file = await res.blob();
    const uniquePostId = uuidv4();

    const storageRef = ref(storage, `${folder}/${uniquePostId}`);
    await uploadBytes(storageRef, file);
    // get url
    const postImageUrl = await getDownloadURL(storageRef);
    return postImageUrl;
  } catch (error) {
    console.log('uploadPhotoToServer::', error.message);
  }
}
