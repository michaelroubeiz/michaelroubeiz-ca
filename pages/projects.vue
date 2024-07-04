<template>
  <div>
    <PageTitle>{{ title }}</PageTitle>
  </div>
</template>

<script lang="ts">
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "Projects",
  components: { PageTitle },
  data() {
    return {
      title: "Projects",
    };
  },
};
</script>
