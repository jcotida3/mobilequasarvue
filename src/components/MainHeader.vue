<template>
  <q-header elevated class="bg-primary text-white">
    
    <q-toolbar>
      <q-btn flat dense round icon="menu" @click="$emit('toggle-drawer')" />
      <q-toolbar-title>AMIS</q-toolbar-title>

      <q-btn flat round @click="$router.push('/profile')" class="q-ml-sm">
        <q-avatar size="40px">
          <img src="https://cdn.quasar.dev/img/avatar.png" alt="User Avatar" />
        </q-avatar>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>
defineEmits(['toggle-drawer'])
</script>