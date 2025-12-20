<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated height="200px">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>AMIS</q-toolbar-title>

        <q-btn flat round @click="$router.push('/profile')" class="q-ml-sm">
          <q-avatar size="40px">
            <img src="https://cdn.quasar.dev/img/avatar.png" alt="User Avatar" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" bordered>
      <q-item-label header>Sidebar</q-item-label>

      <q-list>
        <q-item class="text-weight-bold" to="/home" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>

        

        <!-- Student Portal with nested Enrollment -->
        <q-expansion-item group="nav" label="Student Portal" icon="school">
          <q-list padding class="q-pl-md">
            <!-- Nested Expansion for Enrollment -->
            <q-expansion-item label="Enrollment" class="text-weight">
              <q-list padding class="q-pl-md">
                <q-item clickable><q-item-section>Consent of Instructor</q-item-section></q-item>
                <q-item clickable><q-item-section>Departmental Consent</q-item-section></q-item>
                <q-item clickable><q-item-section>OCS Consent</q-item-section></q-item>
                <q-item clickable><q-item-section>Prerogative Enrollment</q-item-section></q-item>
                <q-item clickable><q-item-section>Enlistment Module</q-item-section></q-item>
              </q-list>
            </q-expansion-item>

            <!-- Other modules under Student Portal -->
            <q-item clickable to="/home/grade"><q-item-section>SET Module</q-item-section></q-item>
            <q-item clickable><q-item-section>UPSCEE Module</q-item-section></q-item>
          </q-list>
        </q-expansion-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
