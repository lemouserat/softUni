const { photoModel  } = require('../models/photoModel');
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

function addPhoto(req, res, next) {
    const { photoTitle, photoUrl, photoExif } = req.body;
    const { _id: userId } = req.user;

    photoModel.create({ photoTitle, photoUrl, photoExif})
        .then(photo => {
            newPost(postText, userId, photo._id)
                .then(([_, updatedPhoto]) => res.status(200).json(updatedPhoto))
        })
        .catch(next);
}

function subscribe(req, res, next) {
    const themeId = req.params.themeId;
    const { _id: userId } = req.user;
    photoModel.findByIdAndUpdate({ _id: themeId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedTheme => {
            res.status(200).json(updatedTheme)
        })
        .catch(next);
}

module.exports = {
    getPhotos,
    addPhoto,
    getPhoto,
    subscribe,
}
