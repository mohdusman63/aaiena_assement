const utill = require('../utill/helper')
const models = require('../models');
const { where } = require('sequelize');
const GalleryModel = models.gallery;

exports.uploadImage = async (req, res) => {
    try {
        console.log(req.file)
        const userImagesCount = await GalleryModel.count({ where: { user_id: req.userData.id } });

        // If the user has already uploaded 5 images, return an error
        if (userImagesCount >= 5) {
            return res.status(400).json({
                statusCode: 400,
                message: 'You can upload a maximum of 5 images',
            });
        }
        console.log('image count',userImagesCount)
        if (!req.file) {
            return res.status(400).json({
                statusCode: 400,
                message: 'Image is required',
            });
        }
        const insertData = {
            image_path: req.file.path,
            user_id: req.userData.id
        }
        let data = await GalleryModel.create(insertData)


        res.status(200).json({
            statusCode: 200,
            message: 'Image successfully',
            data: data,
        });

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: 'Internal server error',
            error: error.message,
        });
    }
};

exports.getAllImage = async (req, res) => {
    try {
        let getAllImage = await GalleryModel.findAll({ where: { user_id: req.userData.id } })
        res.status(200).json({
            statusCode: 200,
            message: 'Image List ',
            data: getAllImage,
        });

    }
    catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: 'Internal server error',
            error: error.message,
        });

    }
}