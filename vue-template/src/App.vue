<template>
  <v-app>
    <v-main>
      <div>
        <router-link to="/" >Home</router-link>
        |
        <router-link to="/about" >About</router-link>

        |
        <router-link to="/list" >List</router-link>
        |
        <router-link to="/detail" >Detail</router-link>
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>


<style>
</style>

<script setup lang="ts">

</script>
