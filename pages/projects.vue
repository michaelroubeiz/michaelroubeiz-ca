<template>
  <div>
    <PageTitle :title="title" />
  </div>
</template>

<script>
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
