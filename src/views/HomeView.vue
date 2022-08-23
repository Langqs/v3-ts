<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { getCurrentInstance } from "vue";
const name:string = ''

let {proxy} = getCurrentInstance() as any
  console.log(proxy.$API,name);
  
  

</script>
