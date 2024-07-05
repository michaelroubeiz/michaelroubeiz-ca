<template>
  <div>
    <PageTitle :title="title" />
    <ProjectList :projectList="projectData">
      <template #default="{ projectList }">
        <div v-for="item in projectList" :key="item.id" class="text-white">
          <ProjectItem :projectItem="item" />
        </div>
      </template>
    </ProjectList>
  </div>
</template>

<script lang="ts">
import PageTitle from "../components/PageTitle.vue";
import ProjectList from "../components/Projects/ProjectList.vue";
import ProjectItem from "../components/Projects/ProjectItem.vue";
import { projectData } from "../data/projects";

export default {
  name: "Projects",
  components: { PageTitle, ProjectList, ProjectItem },
  data() {
    return {
      title: "Projects",
      projectData,
    };
  },
};
</script>
