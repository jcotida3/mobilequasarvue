<template>
  <q-card flat bordered class="q-mb-sm activity-card bg-grey-1">
    <q-card-section>
      <div class="text-subtitle2 q-mb-xs">{{ title }}</div>
      <div class="text-caption">
        <slot></slot> </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps(['title'])
</script>