<template>
  <ULink :to="socialLinks.email">
    <UIcon name="mdi:email-outline" width="24" height="24" dynamic />
  </ULink>
  <ULink :to="socialLinks.linkedIn">
    <UIcon name="mdi:linkedin" width="24" height="24" dynamic />
  </ULink>
  <ULink :to="socialLinks.github">
    <UIcon name="mdi:github" width="24" height="24" dynamic />
  </ULink>
</template>

<script>
import { socialLinks } from "../data/socialLinks.ts";

export default {
  data() {
    return {
      socialLinks,
    };
  },
};
</script>
