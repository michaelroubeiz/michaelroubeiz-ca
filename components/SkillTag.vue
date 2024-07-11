<template>
  <div
    :class="[
      `bg-${color}-500`,
      'rounded-full px-3.5 py-2 bg-opacity-85 text-sm',
    ]"
    v-text="skill"
  />
</template>

<script lang="ts">
export default defineComponent({
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
});
</script>
