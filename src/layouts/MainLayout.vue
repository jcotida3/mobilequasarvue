<script setup>
import { ref } from 'vue'
import MainHeader from 'components/MainHeader.vue'
import SidebarMenu from 'components/SidebarMenu.vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    
    <MainHeader @toggle-drawer="toggleLeftDrawer" />

    <q-drawer 
      v-model="leftDrawerOpen" 
      show-if-above 
      bordered 
      :width="280"
      class="bg-grey-1"
    >
      <SidebarMenu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>