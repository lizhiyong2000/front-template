<script setup lang="ts">
import TaskForm from "@/components/TaskForm.vue";
import TaskItem from "@/components/TaskItem.vue";

import { useTaskStore } from "@/store/task";

const store = useTaskStore();
</script>

<template>
  <v-container>
    <h1>Todo App</h1>
    <TaskForm @submit="store.addTask"/>
<!--    <TaskItem :taskId="1" name="task1" />-->
<!--    <TaskItem :taskId="2" name="task2" />-->

    <template v-for="task in store.tasks" :key="task.taskId">
      <TaskItem :taskId="task.id" :name="task.name" @deleteTask="store.deleteTask" />
    </template>
  </v-container>
</template>

<style scoped>

</style>