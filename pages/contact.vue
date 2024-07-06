<template>
  <div>
    <PageTitle :title="title" />
  </div>
</template>

<script lang="ts">
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "Contact",
  components: { PageTitle },
  data() {
    return {
      title: "Contact",
    };
  },
};
</script>
