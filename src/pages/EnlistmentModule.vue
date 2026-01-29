<script setup>
import { ref, computed } from 'vue'

/* =====================
   CONFIG
===================== */
const START_HOUR = 7
const END_HOUR = 19
const SLOT_MINUTES = 15

/* =====================
   DAYS
===================== */
const days = [
  { label: 'Mon' },
  { label: 'Tue' },
  { label: 'Wed' },
  { label: 'Thu' },
  { label: 'Fri' },
  { label: 'Sat' },
  { label: 'Sun' },
]

const selectedDay = ref('Tue') // default selected day

/* =====================
   HOURS LABELS (12-hour format)
===================== */
const hours = Array.from({ length: END_HOUR - START_HOUR + 1 }, (_, i) => {
  const hour24 = i + START_HOUR
  const hour12 = hour24 % 12 || 12
  const period = hour24 >= 12 ? 'PM' : 'AM'
  return `${hour12}:00 ${period}`
})

/* =====================
   EVENTS (with day)
===================== */
const events = [
  {
    id: 1,
    title: 'Breakfast',
    start: '09:00',
    end: '09:30',
    icon: 'restaurant',
    day: 'Tue',
  },
  {
    id: 2,
    title: 'Yoga Class',
    start: '10:00',
    end: '11:15',
    icon: 'self_improvement',
    day: 'Tue',
  },
  {
    id: 3,
    title: 'Lunch',
    start: '12:00',
    end: '12:30',
    icon: 'restaurant',
    day: 'Wed',
  },
  {
    id: 4,
    title: 'Focus Time',
    start: '13:00',
    end: '15:00',
    icon: 'headphones',
    day: 'Fri',
  },
  {
    id: 5,
    title: 'Focus Time',
    start: '16:00',
    end: '18:00',
    icon: 'headphones',
    day: 'Tue',
  },
]

/* =====================
   HELPERS
===================== */
const timeToMinutes = (time) => {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

const getGridRow = (start, end) => {
  const startMin = timeToMinutes(start) - START_HOUR * 60
  const endMin = timeToMinutes(end) - START_HOUR * 60

  return {
    gridRow: `${startMin / SLOT_MINUTES + 1} / ${endMin / SLOT_MINUTES + 1}`,
  }
}

const format12Hour = (time) => {
  const [hour, minute] = time.split(':').map(Number)
  const period = hour >= 12 ? 'PM' : 'AM'
  const formattedHour = hour % 12 || 12
  return `${formattedHour}:${String(minute).padStart(2, '0')} ${period}`
}

/* =====================
   FILTERED EVENTS BY DAY
===================== */
const filteredEvents = computed(() => events.filter((event) => event.day === selectedDay.value))
</script>

<template>
  <q-page class="q-pa-md bg-grey-1">
    <!-- Header -->
    <div class="row items-center q-mb-md">
      <div class="text-h6">November 2023</div>
      <q-icon name="expand_more" class="q-ml-xs" />
    </div>

    <!-- Weekdays -->
    <div class="row q-mb-md">
      <div v-for="day in days" :key="day.label" class="col text-center">
        <q-chip
          clickable
          :color="selectedDay === day.label ? 'primary' : 'grey-3'"
          :text-color="selectedDay === day.label ? 'white' : 'black'"
          @click="selectedDay = day.label"
        >
          {{ day.label }}
        </q-chip>
      </div>
    </div>

    <!-- Calendar -->
    <div class="calendar">
      <!-- Time column -->
      <div class="time-column">
        <div v-for="hour in hours" :key="hour" class="time-label">
          {{ hour }}
        </div>
      </div>

      <!-- Events column -->
      <div class="events-column">
        <div
          v-for="event in filteredEvents"
          :key="event.id"
          class="event"
          :style="getGridRow(event.start, event.end)"
        >
          <q-icon :name="event.icon" size="sm" />
          <div class="event-title">{{ event.title }}</div>
          <div class="event-time">
            {{ format12Hour(event.start) }} – {{ format12Hour(event.end) }}
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="filteredEvents.length === 0" class="empty-state">
          No schedules for {{ selectedDay }}
        </div>
      </div>
    </div>

    <!-- Floating Button -->
  </q-page>
</template>

<style scoped>
/* =====================
   CALENDAR GRID
===================== */
.calendar {
  display: grid;
  grid-template-columns: 60px 1fr;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}

/* =====================
   TIME COLUMN
===================== */
.time-column {
  display: grid;
  grid-template-rows: repeat(48, 20px);
  background: #fafafa;
  border-right: 1px solid #e0e0e0;
}

.time-label {
  grid-row: span 4;
  font-size: 12px;
  color: #666;
  padding: 4px;
}

/* =====================
   EVENTS COLUMN
===================== */
.events-column {
  position: relative;
  display: grid;
  grid-template-rows: repeat(48, 20px);
}

/* =====================
   EVENT CARD
===================== */
.event {
  margin: 2px 8px;
  padding: 8px;
  background: #e3f2fd;
  border-left: 4px solid #1976d2;
  border-radius: 8px;
  font-size: 12px;
}

.event-title {
  font-weight: 600;
}

.event-time {
  font-size: 11px;
  opacity: 0.7;
}

/* =====================
   EMPTY STATE
===================== */
.empty-state {
  text-align: center;
  margin-top: 40px;
  color: #999;
  font-size: 14px;
}

/* =====================
   FLOATING BUTTON
===================== */
.fab {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
