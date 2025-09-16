<script setup lang="ts">
import { onMounted, ref } from 'vue'

const apiA = (window as any).apiA as { ping: (input: string) => Promise<any>, onMessage: (callback: (event: any, input: string) => void) => void }

const input = ref('')

async function onPing() {
  try {
    await apiA?.ping?.(input.value)
    alert(`send: ${input.value}`)
  } catch (e) {
    console.error(e)
    alert(e)
  }
}


onMounted(() => {
  apiA.onMessage((event, input) => {
    alert('on message from WindowB: ' + input)
  })
})
</script>

<template>
  <div>
    <h1>Window A</h1>
    <input type="text" v-model="input" />
    <button @click="onPing">send to B</button>
  </div>
  
</template>

<style scoped>
h1 { font-size: 20px; }
</style>
