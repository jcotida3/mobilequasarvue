<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Matches the Parent's :additional-info
  additionalInfo: Object,
})

// Necessary for the 'set' function to work
const emit = defineEmits(['update:modelValue'])

const localData = computed({
  get: () => props.additionalInfo,
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <div class="q-gutter-y-md">
    <q-card flat bordered>
      <q-card-section class="bg-grey-2 text-h6 text-weight-bold">
        Additional Information
      </q-card-section>

      <q-card-section class="q-gutter-y-md">
        <q-input v-model="localData.preferredName" label="Preferred Name" outlined dense />
        <q-input v-model="localData.indigenousGroup" label="Indigenous Group" outlined dense />
        <q-input v-model="localData.religion" label="Religion" outlined dense />
        <q-input v-model="localData.genderIdentity" label="Gender Identity" outlined dense />
        <q-input v-model="localData.disability" label="Disability" outlined dense />
      </q-card-section>
    </q-card>
  </div>
</template>
