<script setup lang="ts">
import { ref, onMounted } from "vue"

const apiB = (window as any).apiB as { ping: (input: string) => Promise<any>, onMessage: (callback: (event: any, input: string) => void) => void }
const input = ref('')
async function onPing() {
  try {
    const res = await apiB?.ping?.(input.value)
    alert('WindowB sent to A via apiB: ' + res)
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  apiB.onMessage((event, input) => {
    alert('WindowB received message from WindowA: ' + input)
  })
})
</script>

<template>
  <div>
    <h1>Window B</h1>
    <input type="text" v-model="input" />
    <button @click="onPing">Ping Main (apiB)</button>
  </div>
  
</template>

<style scoped>
h1 { font-size: 20px; }
</style>
