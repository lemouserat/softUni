const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { photoController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', photoController.getPhotos);
router.post('/', auth(), photoController.createPhoto);

router.get('/:photoId', photoController.getPhoto);
router.post('/:photoId', auth(), postController.createPost);
router.put('/:photoId', auth(), photoController.subscribe);
router.put('/:photoId/posts/:postId', auth(), postController.editPost);
router.delete('/:photoId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router