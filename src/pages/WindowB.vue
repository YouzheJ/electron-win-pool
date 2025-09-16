<script setup lang="ts">
import { ref, onMounted } from "vue"

const apiB = (window as any).apiB as { 
  send: (input: string) => Promise<any>, 
  normalSend: (input: string) => Promise<any>, 
  onMessage: (callback: (event: any, input: string) => void) => void 
}
const input = ref('')
async function onSend() {
  try {
    const res = await apiB?.send?.(input.value)
    alert(`invoke: ${input.value}, receive: ${res}`)
  } catch (e) {
    console.error(e)
    alert(e)
  }
}
async function onNormalSend() {
  try {
    const res = await apiB?.normalSend?.(input.value)
    alert(`invoke: ${input.value}, receive: ${res}`)
  } catch (e) {
    console.error(e)
    alert(e)
  }
}

onMounted(() => {
  apiB.onMessage((event, input) => {
    alert('handle message from WindowA: ' + input)
  })
})
</script>

<template>
  <div>
    <h1>Window B</h1>
    <input type="text" v-model="input" />
    <button @click="onSend">invoke to A</button>
    <button @click="onNormalSend">invoke normal to A</button>
  </div>
  
</template>

<style scoped>
h1 { font-size: 20px; }
</style>
