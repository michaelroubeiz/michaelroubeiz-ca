<template>
  <div class="grid grid-cols-3 gap-8 max-w-min">
    <ULink
      v-for="(social, key) in socialLinks"
      :key="key"
      :to="social.link"
      target="_blank"
    >
      <UIcon :name="social.icon" width="24" height="24" dynamic />
    </ULink>
  </div>
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
