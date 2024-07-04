<template>
  <div class="welcome-section">
    <PageTitle>{{ title }}</PageTitle>
    <p class="welcome-message mt-6 text-2xl font-roboto-mono">
      Software Engineering graduate from Concordia University.
    </p>
    <SocialIcons />  <!-- TODO: Move this component and style it -->
  </div>
</template>

<script lang="ts">
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "WelcomeSection",
  components: { PageTitle },
  data() {
    return {
      title: "I'm Michael Roubeiz",
    };
  },
};
</script>

<!-- <style scoped>
@media screen and (max-width: 768px) {
  .welcome-section {
    margin: 0px 100px 100px 50px;
  }
  .welcome-message {
    font-size: large;
  }
}
</style> -->
