<template>
  <div class="welcome-section">
    <PageTitle :title="title" />
    <p class="welcome-message mt-6 text-2xl font-open-sans text-white">
      Software Engineering graduate from Concordia University.
    </p>
    <SocialIcons />
    <!-- TODO: Move this component and style it -->
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
