const { photoModel, userModel } = require('../models');
const { newPost } = require('./postController')

function getPhotos(req, res, next) {
    photoModel.find()
        .populate('userId')
        .then(photos => res.json(photos))
        .catch(next);
}

function getPhoto(req, res, next) {
    const { photoId } = req.params;

    photoModel.findById(photoId)
        .populate({
            path : 'posts',
            populate : {
              path : 'userId'
            }
          })
        .then(photo => res.json(photo))
        .catch(next);
}

function createPhoto(req, res, next) {
    const { photoTitle, photoUrl, photoExif } = req.body;
    const { _id: userId } = req.user;

    photoModel.create({ photoTitle, photoUrl, photoExif, userId, subscribers: [userId] })
        .then(photo => {
            newPost(photoTitle, userId, photo._id)
                .then(([_, updatedPhoto]) => res.status(200).json(updatedPhoto))
        })
        .catch(next);
}

function subscribe(req, res, next) {
    const photoId = req.params.photoId;
    const { _id: userId } = req.user;
    photoModel.findByIdAndUpdate({ _id: photoId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedPhoto => {
            res.status(200).json(updatedPhoto)
        })
        .catch(next);
}

function unsubscribe(req, res, next) {
    const photoId = req.params.photoId;
    const { _id: userId } = req.user;
    photoModel.findByIdAndUpdate({ _id: photoId }, { $pull: { subscribers: userId } }, { new: true })
        .then(updatedPhoto => {
            res.status(200).json(updatedPhoto)
        })
        .catch(next);
}

function deletePhoto(req, res, next){
    const { photoId } = req.params;
    const { _id: userId } = req.user;
    
        Promise.all([
            photoModel.findOneAndDelete({ _id: photoId}),
            userModel.findOneAndUpdate({ _id: userId }, { $pull: { photos: photoId } }),
        ])
            .then(([deletedOne, _, __]) => {
                if (deletedOne) {
                    res.status(200).json(deletedOne)
                } else {
                    res.status(401).json({ message: `Not allowed!` });
                }
            })
            .catch(next);
}

module.exports = {
    subscribe,
    getPhotos,
    createPhoto,
    getPhoto,
    unsubscribe,
    deletePhoto
}
