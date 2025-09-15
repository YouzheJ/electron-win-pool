<script setup lang="ts">
import { onMounted, ref } from 'vue'

const apiA = (window as any).apiA as { ping: (input: string) => Promise<any>, onMessage: (callback: (event: any, input: string) => void) => void }

const input = ref('')

async function onPing() {
  try {
    await apiA?.ping?.(input.value)
    alert('WindowA pinged main via apiA')
  } catch (e) {
    console.error(e)
  }
}


onMounted(() => {
  apiA.onMessage((event, input) => {
    alert('WindowA received message from WindowB: ' + input)
  })
})
</script>

<template>
  <div>
    <h1>Window A</h1>
    <input type="text" v-model="input" />
    <button @click="onPing">Ping Main (apiA)</button>
  </div>
  
</template>

<style scoped>
h1 { font-size: 20px; }
</style>
