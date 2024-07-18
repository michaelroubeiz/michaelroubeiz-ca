<template>
  <div class="fixed top-0 pt-8 flex flex-wrap w-full justify-center z-50">
    <ul
      class="fixed top-0 my-8 px-3 flex-wrap gap-4 font-open-sans text-gray-300 rounded-lg backdrop-blur-sm md:flex hidden"
      aria-label="NavBar links"
    >
      <li v-for="link in links" :key="link.label">
        <ULink
          :to="link.to"
          active-class="active-link rounded-lg bg-gray-200/20"
          class="flex px-4 py-2.5 my-3 transition-all duration-300 ease-in-out"
          inactive-class="hover:bg-gray-300/10 rounded-lg"
          :aria-label="link.label"
        >
          {{ link.label }}
        </ULink>
      </li>
    </ul>
    <div class="md:hidden flex justify-center items-center">
      <UIcon
        name="ic:round-menu"
        width="40"
        height="40"
        dynamic
        class="mt-6 m-8 z-10"
        @click="toggleMenu"
      />
      <div v-if="showList" class="fixed inset-0 backdrop-blur-lg z-0" />
      <ul
        v-if="showList"
        class="fixed top-0 my-8 px-3 gap-4 font-open-sans text-gray-300 rounded-lg min-h-screen w-full mt-28"
        aria-label="NavBar links"
      >
        <li v-for="link in links" :key="link.label" class="flex justify-center">
          <ULink
            :to="link.to"
            active-class="active-link rounded-lg bg-gray-200/10"
            class="px-4 py-2.5 my-3 ease-in-out min-w-28 text-center text-lg"
            :aria-label="link.label"
            @click="toggleMenu"
          >
            {{ link.label }}
          </ULink>
        </li>
      </ul>
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
      showList: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showList = !this.showList;
    },
  },
};
</script>
