import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // file system module, it allows us to work with the file system on our computer

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // this will automatically detect the file type and upload it accordingly
    }); // file has been uploaded on cloudinary
    console.log("file uploaded on cloudinary successfully", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed. delete the file from local storage if there is an error while uploading on cloudinary.
    return null; // return null if there is an error while uploading on cloudinary
  }
};

export { uploadCloudinary };
