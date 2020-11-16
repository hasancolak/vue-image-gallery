<template>
<v-container>
  <v-content>
    <v-row max-width="1024"
    align="center"
    justify="space-around">
    <v-col cols="24" align="center">
         <v-card align="center"
  max-width="1024">
      <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
        <v-card-title>{{imageDetails.title}}</v-card-title>
      <v-card-text>
         <img class="image__img" :src="imageDetails.bigImage" :alt="imageDetails.title">
      <v-card-text class="image___details">{{imageDetails.description}}</v-card-text>
      </v-card-text>
    <v-divider class="mx-4"></v-divider>
   <v-card-text>
     <v-row>
        <v-col cols="6">
          <v-icon>{{ svgUpload }}</v-icon>
          {{imageDetails.ups}}
        </v-col>
        <v-col cols="6">
          <v-icon>{{ svgDownload }}</v-icon>
          {{imageDetails.downs}}
        </v-col>
        <v-col cols="6">
          <v-icon>{{ svgStar }}</v-icon>
          {{imageDetails.score}}
        </v-col>
        <v-col cols="6">
          <v-icon>{{ svgEye }}</v-icon>
          {{imageDetails.views}}
        </v-col>
       </v-row>
     </v-card-text>
    </v-card>
    </v-col>
    </v-row>
    <v-row>
    <v-col cols="24"
    align="center"
    justify="space-around">
      <v-btn
      depressed
      color="primary"
      href="/gallery"
    >
      Back to gallery page
    </v-btn>
    </v-col>
    </v-row>
  </v-content>
  </v-container>
</template>

<script>
import { mdiCloudUpload, mdiCloudDownload, mdiStar, mdiEye } from '@mdi/js';

export default {
  name: 'GalleryImgDetails',
  props: {
    galleryImage: {
      type: Object,
      default: () => {},
    },
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    svgUpload: mdiCloudUpload,
    svgDownload: mdiCloudDownload,
    svgStar: mdiStar,
    svgEye: mdiEye

  }),
  computed: {
    imageDetails() {
      return this.galleryImage || this.$store.state.galleryStore.imgDetails;
    }
  },
  created() {
    if (!this.galleryImage) {
      this.$store.dispatch('galleryStore/getGalleryImageDetails', this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

.image {
  border: 1px solid $primaryColor;
  max-width: 800px;
  margin: 40px auto;
  &__title {
    text-align: center;
  }
  &__img {
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: top;
    margin: auto;
  }
  &__details {
    &__description {
      text-align: center;
    }
  }
  &__analytics {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    border-top: 1px dashed $primaryColor;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
.link {
  &__gallery {
    font-size: 1.5rem;
    color: $primaryColor;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
