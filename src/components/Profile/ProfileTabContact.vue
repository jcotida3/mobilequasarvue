<script setup>
defineProps({
  contactInfo: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="q-gutter-y-md">
    <q-card flat bordered>
      <q-card-section class="bg-grey-2 text-h6 text-weight-bold">
        Contact and Address Information
      </q-card-section>

      <q-card-section class="q-gutter-y-md">
        <q-input :model-value="contactInfo.primaryAddress" label="Primary Address" outlined dense />
        <q-input :model-value="contactInfo.primaryContact" label="Primary Contact" outlined dense />
      </q-card-section>
    </q-card>
  </div>
</template>
