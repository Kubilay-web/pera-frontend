const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const CLOUDINARY_URL = `${process.env.CLOUDINARY_CLOUD_NAME}.cloudinary.com/`;

const stables = {
  UPLOAD_FOLDER_BASE_URL: `https://${CLOUDINARY_URL}blog-app/`, // Yüklenen dosyaların Cloudinary URL'si
  API_BASE_URL,
};

export default stables;
