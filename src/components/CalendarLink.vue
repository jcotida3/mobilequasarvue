<template>
  <q-card flat bordered class="q-mb-sm bg-primary text-white cursor-pointer hover-effect">
    <q-card-section class="row items-center justify-between">
      <div class="text-caption">{{ label }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps(['label'])
</script>