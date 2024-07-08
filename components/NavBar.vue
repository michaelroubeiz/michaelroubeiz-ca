<template>
  <div class="fixed top-0 pt-8 flex flex-wrap w-full justify-center z-50">
    <div
      class="fixed top-0 my-8 px-3 flex flex-wrap gap-4 font-open-sans text-gray-300 rounded-full backdrop-blur-sm"
    >
      <ULink
        :to="link.to"
        v-for="link in links"
        active-class="active-link rounded-full bg-gray-200/10 text-white"
        class="flex px-4 py-1.5 my-3 transition-all duration-300 ease-in-out"
        inactive-class="hover:bg-gray-300/10 rounded-full"
        :aria-label="link.label"
      >
        {{ link.label }}
      </ULink>
    </div>
  </div>
</template>

<script lang="ts">
import { navbarLinks } from "../data/navbarLinks";

export default {
  name: "NavBar",
  data() {
    return {
      links: navbarLinks,
    };
  },
};
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
