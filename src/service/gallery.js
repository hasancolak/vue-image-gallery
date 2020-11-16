import $http from '@/service/http';
import GalleryModel from '@/model/gallery';
import { GALLERY_LIST, IMAGE_DETAILS } from '@/comman/constant';

export function getGalleryImages(filtersData) {
  return $http
    .get(GALLERY_LIST(filtersData))
    .then(({ data: { data: images = [] } = [] }) =>
      images
        .filter(gallery => gallery.images && gallery.images.find(img => !img.mp4))
        .map(gallery => new GalleryModel(gallery))
    );
}

export function getGalleryImageDetails(imageId) {
  return $http
    .get(IMAGE_DETAILS(imageId))
    .then(({ data }) => new GalleryModel(data.data));
}

export default { getGalleryImages, getGalleryImageDetails };
