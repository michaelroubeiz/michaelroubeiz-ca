<template>
  <div
    v-text="skill"
    :class="[`bg-${color}-500`, 'rounded-full px-4 py-2 opacity-85 text-sm']"
  ></div>
</template>

<script lang="ts">
export default {
  name: "SkillTag",
  props: {
    skill: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>
