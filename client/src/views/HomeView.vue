<script setup lang="ts">
import { ref } from 'vue';

const newTask = ref('');
const tasks = ref([] as string[]);

function addTask() {
  tasks.value.push(newTask.value);
  newTask.value = '';
};

</script>

<template>
  <main>
    <h1 class="title">Home</h1>
    <h2 class="subtitle">Home Page</h2>

    <article class="panel is-primary">
      <p class="panel-heading">Primary</p>
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Sources</a>
        <a>Forks</a>
      </p>
      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-primary" type="text" placeholder="Search" @keypress.enter="addTask" v-model="newTask" />
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <label class="panel-block" v-for="task in tasks">
        <input type="checkbox">
          { task }
      </label>
    </article>
  </main>
</template>

<style scoped>
.container {
  max-width: 960px;
}
</style>