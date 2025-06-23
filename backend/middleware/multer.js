import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure the "uploads" directory exists
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Save files to the "uploads" directory
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Preserve original filename
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;
