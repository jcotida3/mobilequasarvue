<template>
  <q-page padding class="bg-grey-2">

    <!-- Greeting -->
     
    <div class="q-mb-lg q-mt-lg q-ml-sm">
      <div class="text-subtitle2 text-primary">Good Morning!</div>
      <div class="text-h6 q-mt-xs text-primary">Warren Miguel Miras</div>
    </div>
    

    <!-- Latest Updates -->
    <q-card flat bordered class="q-mb-md bg-white rounded-borders shadow-1">
      <q-card-section>
        <q-badge color="primary" class="q-mb-sm">Latest Updates</q-badge>
        <div class="text-body2">
          Faculty can now view and download their class lists under the “My Classes” option.
        </div>
      </q-card-section>
    </q-card>

    <!-- Schedule for Activities -->
    <q-card flat bordered class="q-mb-md bg-white rounded-borders shadow-1" style="max-height: 200px; overflow-y: auto;">
      <q-card-section>
        <div class="text-subtitle2 q-mb-md">Schedule for Activities</div>

        <q-card flat bordered class="q-mb-sm activity-card bg-grey-1">
          <q-card-section>
            <div class="text-subtitle2 q-mb-xs">1st Semester SY 2025-2026 (1251)</div>
            <div class="text-caption">
              <strong>Undergraduate and other Graduate Programs:</strong><br>
              Classes begin August 11, 2025
            </div>
          </q-card-section>
        </q-card>

        <q-card flat bordered class="q-mb-sm activity-card bg-grey-1">
          <q-card-section>
            <div class="text-subtitle2 q-mb-xs">1st Trimester SY 2025-2026 (1254)</div>
            <div class="text-caption">
              <strong>MBA Program:</strong> Classes begin August 11, 2025<br>
              <strong>Master of Education Program:</strong> Classes begin August 11, 2025
            </div>
          </q-card-section>
        </q-card>

      </q-card-section>
    </q-card>

    <!-- Calendars -->
    <q-card flat bordered class="q-mb-md bg-white rounded-borders shadow-1">
      <q-card-section>
        <div class="text-subtitle2 q-mb-md">Calendars</div>

        <q-card flat bordered class="q-mb-sm bg-primary text-white" style="cursor: pointer;">
          <q-card-section class="row items-center justify-between">
            <div class="text-caption">
              2025-2026 UP Cebu Academic Calendar (Semestral for Undergraduate and Graduate Programs except MBA and MEd)
            </div>
          </q-card-section>
        </q-card>

        <q-card flat bordered class=" q-mb-sm bg-primary text-white" style="cursor: pointer;">
          <q-card-section class="row items-center justify-between">
            <div class="text-caption">
              2025-2026 UP Cebu M Business Administration Academic Calendar (Trimesteral)
            </div>
          </q-card-section>
        </q-card>

        <q-card flat bordered class="q-mb-sm bg-primary text-white" style="cursor: pointer;">
          <q-card-section class="row items-center justify-between">
            <div class="text-caption">
              2025-2026 UP Cebu M Business Administration Academic Calendar (Trimesteral)
            </div>
          </q-card-section>
        </q-card>

      </q-card-section>
    </q-card>

  </q-page>
</template>
<style scoped>
.rounded-borders {
  border-radius: 12px;
}
.activity-card {
  border-radius: 8px;
  padding: 8px;
}
</style>

