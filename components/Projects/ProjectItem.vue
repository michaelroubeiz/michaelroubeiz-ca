<template>
  <div
    class="bg-[#112240] rounded-sm p-6 hover:-translate-y-1 transition ease-out delay-150"
  >
    <div class="grid grid-flow-col mb-2">
      <div class="hover:text-blue-700 max-w-min">
        <ULink :to="projectItem.projectLink">
          {{ projectItem.title }}
        </ULink>
      </div>
      <ULink
        class="ml-auto hover:text-blue-700 rounded-full"
        :to="projectItem.githubLink"
      >
        <UIcon name="mdi:github" width="24" height="24" dynamic />
      </ULink>
    </div>
    <div class="text-xs text-gray-300 mb-6">{{ projectItem.description }}</div>
    <div class="flex flex-wrap gap-2 mt-2">
      <div
        v-for="item in projectItem.technologies"
        :key="item"
        class="text-xs text-gray-400"
        v-text="item"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProjectItem",
  props: {
    projectItem: {
      type: Object,
      required: true,
    },
  },
});
</script>
<!-- <ULink :to="socialLinks.github">
    <UIcon name="mdi:github" width="24" height="24" dynamic />
  </ULink> -->
