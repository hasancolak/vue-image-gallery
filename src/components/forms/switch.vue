<template>
  <v-switch
      class="switvh__item"
      :label="`${title}`"
      @click="$emit('checked', !showViral)"
    ></v-switch>
</template>

<script>
export default {
  name: 'GroupButtons',
  inheritAttrs: false,
  model: {
    prop: 'showViral',
    event: 'checked',
  },
  props: {
    showViral: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
    }
  },
};
</script>

<style lang="scss" scoped>
.v-input--selection-controls, .v-input__slot{
  margin-top: 0;
}
.switvh{
  &__item{ height: 46px;}
}
</style>
