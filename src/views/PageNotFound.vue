<template>
  <div class="page-not-found">
    <v-card>
      <v-img class="page-not-found__image" :src="PageNotFoundImage" alt="page not found"></v-img>
    </v-card>
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
  </div>
</template>

<script>
import PageNotFoundImage from '@/assets/images/404.png';

export default {
  name: 'PageNotFound',
  data() {
    return {
     PageNotFoundImage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:100px ;
  &__image {
    display: block;
    margin: auto;
    max-width: 800px;
  }
}
</style>
