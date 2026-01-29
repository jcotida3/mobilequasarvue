<template>
  <q-page padding class="bg-grey-2">
    <div class="q-mb-lg q-mt-lg q-ml-sm">
      <div class="text-subtitle2 text-primary">Good Morning!</div>
      <div class="text-h6 q-mt-xs text-primary">Warren Mendoza Miguel</div>
    </div>

    <template>
      <div class="q-pa-md">
        <q-btn-dropdown color="pink" label="Dropdown Button" dropdown-icon="change_history">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Videos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Articles</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </template>
    <q-card flat bordered class="q-mb-md bg-white shadow-1 rounded-borders">
      <q-card-section>
        <q-badge color="primary" class="q-mb-sm q-pa-sm">Latest Updates</q-badge>
        <div class="text-body2">{{ latestUpdate }}</div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="q-mb-md bg-white shadow-1 rounded-borders">
      <q-card-section>
        <div class="text-subtitle2 q-mb-md">Schedule for Activities</div>

        <ActivityCard v-for="item in activities" :key="item.title" :title="item.title">
          <div v-html="item.description"></div>
        </ActivityCard>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="q-mb-md bg-white shadow-1 rounded-borders">
      <q-card-section>
        <div class="text-subtitle2 q-mb-md">Calendars</div>

        <CalendarLink v-for="cal in calendars" :key="cal" :label="cal" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import ActivityCard from 'components/ActivityCard.vue'
import CalendarLink from 'components/CalendarLink.vue'

const latestUpdate =
  'Faculty can now view and download their class lists under the “My Classes” option.'

const activities = [
  {
    title: '1st Semester SY 2025-2026 (1251)',
    description: '<strong>Undergraduate:</strong> Classes begin August 11, 2025',
  },
  {
    title: '1st Trimester SY 2025-2026 (1254)',
    description: '<strong>MBA Program:</strong> Classes begin August 11, 2025',
  },
]

const calendars = [
  '2025-2026 UP Cebu Academic Calendar (Semestral)',
  '2025-2026 UP Cebu MBA Academic Calendar (Trimesteral)',
  '2025-2026 UP Cebu MEd Academic Calendar (Trimesteral)',
]
</script>
