<script lang="ts" setup>
import { ref, defineEmits } from "vue";
const taskName = ref("");
const errorMessage = ref("");

const emits = defineEmits<{ (e: "submit", name: string): void }>();

const addTask = (): void => {
  if (!taskName.value.trim()) {
    errorMessage.value = "请输入";
    return;
  }
  errorMessage.value = "";
  const name = taskName.value.trim();
  emits("submit", name);
  taskName.value = "";
};
</script>

<template>
  <v-form @submit.prevent>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field v-model="taskName" label="输入任务" variant="underlined"
                      :error-messages="errorMessage"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn @click="addTask">添加</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
