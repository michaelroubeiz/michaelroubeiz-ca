<template>
  <div
    class="mt-5 md:px-8 px-4 border-b border-gray-800 justify-between flex flex-row items-center text-white"
  >
    <ULink to="/" class="font-playwrite">MR</ULink>
    <UHorizontalNavigation
      :links="links"
      class="w-auto md:scale-100 scale-90 md:translate-x-0 translate-x-4 hover:bg-black-300"
    >
      <template #default="{ link }">
        <span
          class="font-roboto-mono text-white after:border-gray-300 hover:text-white dark:text-white after:bg-red-500 dark:after:bg-red-400"
          v-text="link.label"
        ></span>
      </template>
    </UHorizontalNavigation>
  </div>
</template>

<script setup lang="ts">
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
