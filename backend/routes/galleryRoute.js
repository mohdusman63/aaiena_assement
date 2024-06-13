const express = require('express');
const router = express.Router();
const galleryController = require('../controller/galleryController')
const { registerValidationRules } = require('../validator/validation');
const multer = require('multer');
const path=require('path');
const jwtVerify = require('../middleware/jwtVerify');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  const upload = multer({ storage });

router.post('/api/v1/upload/image',jwtVerify,upload.single('image'), galleryController.uploadImage)

router.get('/api/v1/get/image',jwtVerify, galleryController.getAllImage)



module.exports = router