import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

export async function uploadFile(file: File, path: string) {
  const storageRef = ref(storage, "tempo/" + path + "/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  try {
    await new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject(error);
        },
        () => {
          resolve("Done");
        }
      );
    });

    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    return downloadURL;
  } catch (error) {
    return error;
  }
}
