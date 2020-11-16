import { getGalleryImages, getGalleryImageDetails } from '@/service/gallery';
import {
  SECTIONS_DEFAULT,
  SORTS_DEFAULT,
  WINDOWS_DEFAULT
} from '@/comman/constant';

const galleryStore = {
  namespaced: true,
  state: {
    galleryImages: [],
    imgDetails: {},
    filtersData: {
      selectedSection: SECTIONS_DEFAULT,
      selectedSort: SORTS_DEFAULT,
      selectedWindow: WINDOWS_DEFAULT,
      showViral: true
    }
  },
  actions: {
    async getGalleryItems({ commit, state }) {
      const data = await getGalleryImages(state.filtersData);
      commit('setGalleryImages', data);
    },
    async getGalleryImageDetails({ commit }, imageId) {
      const data = await getGalleryImageDetails(imageId);
      commit('setGalleryImageDetails', data);
    }
  },
  mutations: {
    setGalleryImages(state, payload) {
      state.galleryImages = payload;
    },
    setGalleryImageDetails(state, payload) {
      state.imgDetails = payload;
    },
    setFiltersData(state, payload) {
      state.filtersData = payload;
    }
  }
};

export default galleryStore;
