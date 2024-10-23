const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dqqynqpwp/image/upload";
const BLOG_APP_FOLDER = "v1729611956/blog-app";

const UPLOAD_FOLDER_BASE_URL = `${CLOUDINARY_BASE_URL}/${BLOG_APP_FOLDER}/`;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const stables = { UPLOAD_FOLDER_BASE_URL, API_BASE_URL };

export default stables;
