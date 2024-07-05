<template>
  <div
    class="flex flex-wrap gap-8 justify-center p-6 pt-8 font-roboto-mono text-gray-300 "
  >
    <ULink
      :to="link.to"
      v-for="link in links"
      active-class="active-link rounded-full bg-gray-200/10 text-white"
      class="flex px-4 py-2 transition-all duration-300 ease-in-out"
    >
      {{ link.label }}
    </ULink>
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

<style>
.active-link {
  position: relative;
}

.active-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  z-index: -1;
  border-radius: inherit;
  transition: transform 0.3s ease-in-out;
  animation: shimmy 0.3s ease-in-out forwards;
}

@keyframes shimmy {
  0% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
