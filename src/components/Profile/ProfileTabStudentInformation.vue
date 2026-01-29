<script setup>
import { ref } from 'vue'

const innerTab = ref('grades')
const selectedTerm = ref(null)
const termOptions = ['First Semester 2024-2025', 'Second Semester 2024-2025']
</script>
<template>
  <div class="q-gutter-y-md">
    <q-card flat bordered class="q-mb-md">
      <q-tabs
        v-model="innerTab"
        dense
        no-indicator
        class="text-subtitle2 gold-active-tab"
        align="justify"
        active-bg-color="primary"
      >
        <q-tab name="grades" label="Grades" />
        <q-tab name="holds" label="Holds" />
        <q-tab name="accounts" label="Accounts" />
        <q-tab name="class" label="Class" />
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
              <q-item>
                <q-item-section class="text-grey-7">Overall GWA</q-item-section>
                <q-item-section side class="text-weight-bold text-black">0</q-item-section>
              </q-item>
            </q-list>

            <q-expansion-item
              label="Notes"
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

        <q-tab-panel v-model="innerTab" name="holds">
          <div class="bg-blue-1">Hello</div>
        </q-tab-panel>

        <q-tab-panel name="holds">No holds yet.</q-tab-panel>
        <q-tab-panel name="accounts">Account info will appear here.</q-tab-panel>

        <q-tab-panel name="records">
          <q-card bordered class="q-mb-md">
            <q-card-section
              class="bg-secondary text-center text-white text-subtitle1 text-weight-medium"
              >Active Student Record</q-card-section
            >
            <q-card-section>
              <div class="row q-col-gutter-lg">
                <div class="col-12 col-sm-2">
                  <div class="text-grey-7 text-caption">Student Number</div>
                  <div class="text-body1 text-weight-medium">200581455</div>
                </div>

                <div class="col-12 col-sm-3">
                  <div class="text-grey-7 text-caption">Classification</div>
                  <div class="text-body1 text-weight-medium">Continuing Graduate Student</div>
                </div>

                <div class="col-12 col-sm-3">
                  <div class="text-grey-7 text-caption">Degree Program</div>
                  <div class="text-body1 text-weight-medium">Master in Public Affairs</div>
                </div>

                <div class="col-12 col-sm-2">
                  <div class="text-grey-7 text-caption">Department/Unit</div>
                  <div class="text-body1 text-weight-medium">CSS</div>
                </div>

                <div class="col-12 col-sm-2">
                  <div class="text-grey-7 text-caption">College</div>
                  <div class="text-body1 text-weight-medium">CSS</div>
                </div>
              </div>

              <q-card flat bordered class="q-mt-md">
                <q-card-section class="bg-grey-4 text-center text-subtitle2 text-weight-medium">
                  Inactive Student Records
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
<style>
.gold-active-tab .q-tab--active {
  color: #ffb81c;
}
.gold-active-tab .q-tab--active .q-tab__indicator {
  background-color: #ffb81c;
}
</style>
