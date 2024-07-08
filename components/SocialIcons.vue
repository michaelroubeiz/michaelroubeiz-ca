<template>
  <div class="grid grid-cols-3 gap-16 max-w-min md:m-auto pt-6">
    <ULink
      v-for="(social, key) in socialLinks"
      :key="key"
      :to="social.link"
      target="_blank"
      :aria-label="key"
    >
      <UTooltip :text="key" :key="key">
        <UIcon :name="social.icon" width="40" height="40" dynamic />
      </UTooltip>
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
