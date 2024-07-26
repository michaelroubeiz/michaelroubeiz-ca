<template>
  <ul
    class="grid grid-flow-col auto-cols-max gap-6 max-w-min md:m-auto pt-6"
    aria-label="Social media links"
  >
    <li v-for="(social, key) in socialLinks" :key="key">
      <ULink
        :to="social.link"
        target="_blank"
        :aria-label="key"
        rel="noopener noreferrer"
      >
        <UTooltip :text="key">
          <UIcon :name="social.icon" width="40" height="40" dynamic />
        </UTooltip>
      </ULink>
    </li>
  </ul>
</template>

<script lang="ts">
import { socialLinks } from "../data/socialLinks";

export default {
  data() {
    return {
      socialLinks,
    };
  },
};
</script>
