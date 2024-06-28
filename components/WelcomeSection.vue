<template>
  <div class="welcome-section">
    <h1 class="welcome-title text-6xl ">I'm Michael Roubeiz</h1>
    <p class="welcome-message mt-6 text-2xl font-['Roboto_Mono']">
      Software Engineering graduate from Concordia University.
    </p>
    <!-- TODO: Move this component and style it -->
    <SocialIcons />
  </div>
</template>

<style scoped>
.welcome-section {
  margin: 100px 100px 100px 150px;
  justify-content: left;
  align-items: center;
  color: white;
}

.welcome-title {
  font-family: "Cairo Play", sans-serif;
}

/* .welcome-message {
  font-family: "Cairo Play", sans-serif;
} */

@media screen and (max-width: 768px) {
  .welcome-section {
    margin: 0px 100px 100px 50px;
  }
  .welcome-message {
    font-size: large;
  }
}
</style>
