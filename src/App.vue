<template>
  <div class="flex justify-center items-center min-h-screen">
    <Panel class="min-w-60">
      <h1 class="flex pb-8 justify-center items-center">Login</h1>
      <label for="username">Username</label>
      <InputText id="username" v-model="value" class="min-w-full" />
      <Password v-model="value" toggleMask class="min-w-full" />
    </Panel>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeStep = ref(1);
const completed = ref(false);
const products = ref();
const name = ref();
const email = ref();
const password = ref();
const option1 = ref(false);
const option2 = ref(false);
const option3 = ref(false);
const option4 = ref(false);
const option5 = ref(false);
const option6 = ref(false);
const option7 = ref(false);
const option8 = ref(false);
const option9 = ref(false);
const option10 = ref(false);
</script>
