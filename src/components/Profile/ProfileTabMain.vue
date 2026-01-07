<script setup>
import { computed } from 'vue'

const props = defineProps({
  userData: Object,
  loading: Boolean,
})

const emit = defineEmits(['update:modelValue', 'save'])

const shiftOptions = ['Single', 'Married', 'Divorced', 'Widowed']

const localData = computed({
  get: () => props.userData,
  set: (val) => emit('update:modelValue', val),
})
</script>
<template>
  <div class="q-gutter-y-md">
    <q-card flat bordered>
      <q-card-section class="bg-grey-2 text-h6 text-weight-bold">
        Personal Information
      </q-card-section>

      <q-card-section class="q-gutter-y-md">
        <q-input v-model="localData.firstName" label="First Name" outlined dense />

        <div class="row q-col-gutter-sm">
          <q-input
            v-model="localData.middleName"
            label="Middle Name"
            outlined
            dense
            class="col-6"
          />
          <q-input v-model="localData.lastName" label="Last Name" outlined dense class="col-6" />
        </div>

        <q-input v-model="localData.socialSuffix" label="Generational Suffix" outlined dense />
        <q-input
          v-model="localData.fullName"
          label="Full Name"
          outlined
          dense
          readonly
          bg-color="grey-2"
        />
        <q-input v-model="localData.email" label="Email" outlined dense />
        <q-select
          v-model="localData.shiftStatus"
          :options="shiftOptions"
          label="Civil Status"
          outlined
          dense
          bg-color="grey-1"
        />

        <q-input
          outlined
          dense
          v-model="localData.dateOfBirth"
          label="Date of Birth"
          bg-color="grey-1"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="localData.dateOfBirth" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <div class="q-pt-sm">
          <div class="text-caption text-grey-7">Sex at Birth</div>
          <div class="q-gutter-x-sm">
            <q-radio v-model="localData.sex" val="male" label="Male" dense />
            <q-radio v-model="localData.sex" val="female" label="Female" dense />
            <q-radio v-model="localData.sex" val="other" label="Other" dense />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-btn
      label="Save Profile Information"
      color="primary"
      unelevated
      class="full-width q-py-md text-weight-bold"
      :loading="loading"
      @click="$emit('save')"
    />
  </div>
</template>
