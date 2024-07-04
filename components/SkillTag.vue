<template>
  <div
    v-text="skill"
    :class="[`bg-${color}-400`, 'rounded-full px-4 py-2 opacity-80']"
  ></div>
</template>

<style scoped>
.skill-tag {
}
</style>

<script>
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
