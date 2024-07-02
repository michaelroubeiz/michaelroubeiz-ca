<template>
  <div class="welcome-section">
    <h1 class="welcome-title text-6xl font-cairo">I'm Michael Roubeiz</h1>
    <p class="welcome-message mt-6 text-2xl font-roboto-mono">
      Software Engineering graduate from Concordia University.
    </p>
    <!-- TODO: Move this component and style it -->
    <SocialIcons />
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .welcome-section {
    margin: 0px 100px 100px 50px;
  }
  .welcome-message {
    font-size: large;
  }
}
</style>
