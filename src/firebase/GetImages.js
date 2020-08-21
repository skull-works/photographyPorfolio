import {storage} from './index';

const getImage = (images, cb, location) => {
    storage.child(`${location}/${images}`)
    .getDownloadURL()
    .then((url) => {
            return cb(url);
    })
    .catch(err => {
            console.error(err);
    })
}

export default getImage;