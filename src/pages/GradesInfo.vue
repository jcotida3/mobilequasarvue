<template>

    <!-- Main Page -->
    <q-page padding>

      <!-- Only show Student Info for now -->
      <q-card flat bordered class="q-mb-md">
        <q-tabs v-model="tab" dense class="text-subtitle2" align="justify">
          <q-tab name="grades" label="Grades" />
          <q-tab name="holds" label="Holds" />
          <q-tab name="accounts" label="Accounts" />
          <q-tab name="records" label="Student Records" />
        </q-tabs>

        <q-separator class="q-mb-lg"/>

        <q-tab-panels  v-model="tab" animated>
          <!-- Grades Tab -->
          <q-tab-panel name="grades">
            <q-card-section>
              <q-list bordered>
                <q-item>
                  <q-item-section>Term Admitted</q-item-section>
                  <q-item-section>First Semester A.Y. 2025-2026</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>Degree Program</q-item-section>
                  <q-item-section>Master in Public Affairs</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>Total Units Earned</q-item-section>
                  <q-item-section>0</q-item-section>
                </q-item>
                <q-item>
                  <q-item-section>Overall GWA</q-item-section>
                  <q-item-section>0</q-item-section>
                </q-item>
              </q-list>

              <!-- Notes collapsible -->
              <q-expansion-item label="Notes" icon="info" expand-separator>
                <q-list>
                  <q-item>
                    <q-item-section>The computation is based on the number of units passed.</q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>HK, NSTP, and MS courses are not included.</q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>Grades DRP, INC, 4, S, or U are excluded.</q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>Some limitations apply to SP/Thesis courses.</q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>Verify your Official GWA with your OCS.</q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>

              <!-- View Grades Dropdown -->
              <div class="q-mt-md">
                <q-select
                  filled
                  label="Select Term"
                  v-model="selectedTerm"
                  :options="terms"
                  dense
                  stack-label
                />
              </div>
            </q-card-section>
          </q-tab-panel>

          <!-- Placeholder tabs -->
          <q-tab-panel name="holds">No holds yet.</q-tab-panel>
          <q-tab-panel name="accounts">Account info will appear here.</q-tab-panel>
          <q-tab-panel name="records">Student records will appear here.</q-tab-panel>
        </q-tab-panels>
      </q-card>

    </q-page>
  
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('grades')

const selectedTerm = ref('')
const terms = [
  { label: 'First Semester 2024-2025', value: '2024-2025' },
  { label: 'Second Semester 2024-2025', value: '2024-2025-2' }
]
</script>

<style>
.q-page {
  max-width: 500px;
  margin: auto;
}
</style>
