<script setup>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import ProfileTabMain from 'components/Profile/ProfileTabMain.vue'
import ProfileTabAdditional from 'components/Profile/ProfileTabAdditional.vue'

const $q = useQuasar()
const activeTab = ref('profile')
const loading = ref(false)

const personalInfo = ref({
  firstName: 'Warren',
  middleName: 'Miguel',
  lastName: 'Mina',
  socialSuffix: '...',
  fullName: 'Warren Miguel Mina',
  email: 'warrenmiguel@gmail.com',
  shiftStatus: 'Single',
  dateOfBirth: '2002/05/26',
  sex: 'male'
})

// Update full name when parts change
watch(
  [() => personalInfo.value.firstName, () => personalInfo.value.middleName, () => personalInfo.value.lastName],
  ([f, m, l]) => {
    personalInfo.value.fullName = `${f} ${m} ${l}`.trim()
  }
)

const saveProfile = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    $q.notify({ type: 'positive', message: 'Saved successfully!', position: 'top' })
  }, 1500)
}
</script>

<style scoped>
.profile-page { background-color: #f5f5f5; min-height: 100vh; }
.profile-header { border-radius: 0 0 20px 20px; }
.opacity-80 { opacity: 0.8; }
</style>
<template>
  <q-page class="profile-page">
    <div class="profile-header bg-primary text-white q-pa-md">
      <q-toolbar>
        <q-btn flat round icon="arrow_back" @click="$router.back()" />
        <q-toolbar-title class="text-center">Profile Information</q-toolbar-title>
        <q-btn flat round icon="more_vert" />
      </q-toolbar>
      
      <div class="text-center q-my-lg">
        <q-avatar size="120px" class="q-mb-md">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <div class="text-h5 q-mb-xs">{{ personalInfo.fullName }}</div>
        <div class="text-subtitle1 opacity-80">{{ personalInfo.email }}</div>
      </div>
    </div>

    <q-tabs v-model="activeTab" active-color="primary" indicator-color="primary" align="justify" class="bg-white text-grey-8 shadow-1">
      <q-tab name="profile" icon="person" label="Profile" />
      <q-tab name="additional" icon="info" label="Additional" />
      <q-tab name="contact" icon="phone" label="Contact" />
      <q-tab name="student" icon="school" label="Student" />
    </q-tabs>

    <q-tab-panels v-model="activeTab" animated class="bg-transparent">
      <q-tab-panel name="profile">
        <ProfileTabMain 
          :user-data="personalInfo" 
          :loading="loading" 
          @update:model-value="val => personalInfo = val"
          @save="saveProfile" 
        />
      </q-tab-panel>
      <q-tab-panel name="additional">
       <ProfileTabAdditional />
        
      </q-tab-panel>
      
    </q-tab-panels>
  </q-page>
</template>

