<template>
  <nav class="mt-5 p-10 flex justify-between items-center">
    <UIcon
      name="meteocons:dust-wind-fill"
      class="text-white text-6xl"
      dynamic
    />
    <ul class="flex space-x-4">
      <!-- Turn this into a component to reduce repetition -->
      <li>
        <UButton :class="buttonClass" variant="link" color="white"
          >About</UButton
        >
      </li>
      <li>
        <UButton :class="buttonClass" variant="link" color="white"
          >Experience</UButton
        >
      </li>
      <li>
        <UButton :class="buttonClass" variant="link" color="white"
          >Projects</UButton
        >
      </li>
      <!-- Turn this into a component to reduce repetition -->
      <!-- <li><UButton variant="ghost"><UIcon class="font-bold" name="ph:moon" dynamic/></UButton></li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    buttonClass() {
      return ["text-white", "text-lg", "font-medium"];
    },
  },
};
</script>
