<template>
  <div class="q-gutter-y-md">
    <q-card flat bordered class="q-mb-md">
      <q-tabs
        v-model="innerTab"
        dense
        class="text-subtitle2"
        align="justify"
        active-color="primary"
      >
        <q-tab name="grades" label="Grades" />
        <q-tab name="holds" label="Holds" />
        <q-tab name="accounts" label="Accounts" />
        <q-tab name="records" label="Records" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="innerTab" animated>
        <q-tab-panel name="grades" class="q-pa-none">
          <q-card-section>
            <q-list bordered separator>
              <q-item>
                <q-item-section class="text-grey-7">Term Admitted</q-item-section>
                <q-item-section side>First Semester A.Y. 2025-2026</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-grey-7">Degree Program</q-item-section>
                <q-item-section side>Master in Public Affairs</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-grey-7">Total Units Earned</q-item-section>
                <q-item-section side class="text-weight-bold text-black">0</q-item-section>
              </q-item>
            </q-list>

            <q-expansion-item
              label="View Computation Notes"
              icon="info"
              header-class="text-grey-8"
              dense
              class="q-mt-sm"
            >
              <q-card class="bg-grey-1">
                <q-card-section class="text-caption">
                  <ul class="q-pl-md">
                    <li>Computation based on units passed.</li>
                    <li>Excludes HK, NSTP, and MS courses.</li>
                    <li>Verify GWA with your OCS.</li>
                  </ul>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <div class="q-mt-md">
              <q-select
                v-model="selectedTerm"
                :options="termOptions"
                label="Select Term"
                outlined
                dense
              />
            </div>
          </q-card-section>
        </q-tab-panel>

        <q-tab-panel name="holds">No holds yet.</q-tab-panel>
        <q-tab-panel name="accounts">Account info will appear here.</q-tab-panel>
        <q-tab-panel name="records">Student records will appear here.</q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const innerTab = ref('grades')
const selectedTerm = ref(null)
const termOptions = ['First Semester 2024-2025', 'Second Semester 2024-2025']
</script>
