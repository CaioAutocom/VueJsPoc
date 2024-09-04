<template>
  <div class="flex justify-center items-center min-h-screen">
    <Panel class="w-80">
      <h1 class="flex pb-8 justify-center items-center">Login</h1>
      <IconField>
        <InputIcon class="pi pi-user" />
        <InputText fluid v-model="value1" placeholder="Usuário" />
      </IconField>
      <!-- <IconField class="mt-6">
        <InputIcon class="pi pi-user mx-8" />
        <Password v-model="value" toggleMask :feedback="false" />
      </IconField> -->

      <div>
        <InputText
          fluid
          v-model="password"
          :type="passwordVisible ? 'text' : 'password'"
          placeholder="Enter your password"
          class="p-input-icon-right"
        >
          <template #suffix>
            <i
              :class="passwordVisible ? 'pi pi-eye-slash' : 'pi pi-eye'"
              @click="togglePasswordVisibility"
            />
          </template>
        </InputText>
      </div>
      <div class="flex justify-end mt-3">
        <Button label="Entrar" icon="pi pi-check" iconPos="left" />
      </div>
    </Panel>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const password = ref('');
const passwordVisible = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
</script>

<style scoped>
.p-input-icon-right i {
  cursor: pointer;
}
</style>
