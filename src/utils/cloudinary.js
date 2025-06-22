import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

// CLOUDINARY_CLOUD_NAME=dvhcptjgj
// CLOUDINARY_API_KEY=798432677113178
// CLOUDINARY_API_SECRET=l_68AZu2UuMK1yQQ3dk-8m1CLk8
cloudinary.config({ 
  cloud_name: "dvhcptjgj", 
  api_key: 798432677113178, 
  api_secret: "l_68AZu2UuMK1yQQ3dk-8m1CLk8" 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("❌ No localFilePath provided to Cloudinary.");
            return null;
        }

        const resolvedPath = path.resolve(localFilePath);
        console.log("📤 Uploading file to Cloudinary:", resolvedPath);

        const response = await cloudinary.uploader.upload(resolvedPath, {
            resource_type: "auto",
        });

        console.log("✅ Uploaded to Cloudinary:", response.secure_url);

        // Safely delete the temp file
        if (fs.existsSync(resolvedPath)) {
            fs.unlinkSync(resolvedPath);
        }

        return response;

    } catch (error) {
        console.error("❌ Cloudinary upload failed:", error.message);
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
        return null;
    }
};

export { uploadOnCloudinary };