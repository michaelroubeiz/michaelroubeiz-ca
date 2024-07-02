<script setup lang="ts">
const route = useRoute();

const links = [
  {
    label: "About",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Experience",
    icon: "i-heroicons-chart-bar",
    to: "/experience",
  },
  {
    label: "Projects",
    icon: "i-heroicons-command-line",
    to: "/projects",
  },
];
</script>

<template>
  <div
    class="mt-5 px-8 border-b border-gray-200 dark:border-gray-800 justify-between flex flex-row items-center"
  >
    <ULink to="/" class="font-playwrite">MR</ULink>
    <UHorizontalNavigation :links="links" class="w-auto font-roboto-mono" />
  </div>
</template>
