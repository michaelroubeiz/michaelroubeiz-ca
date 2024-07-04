<template>
  <div class="text-6xl font-cairo" v-text="title"></div>
</template>

<script lang="ts">
export default {
  name: "PageTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
