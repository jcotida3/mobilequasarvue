<template>
  <q-page class="profile-page">
    <!-- Header Section -->
    <div class="profile-header bg-primary text-white q-pa-md">
      <q-toolbar>
        <q-btn flat round icon="arrow_back" @click="$router.back()" />
        <q-toolbar-title class="text-center">Profile Information</q-toolbar-title>
        <q-btn flat round icon="more_vert" />
      </q-toolbar>
      
      <div class="text-center q-my-lg">
        <q-avatar size="120px" class="q-mb-md">
          <img src="https://cdn.quasar.dev/img/avatar.png" alt="Profile Picture">
        </q-avatar>
        <div class="text-h5 q-mb-xs">Warren Miguel Mina</div>
        <div class="text-subtitle1 opacity-80">warrenmiguel@gmail.com</div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <q-tabs 
      v-model="activeTab"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      class="bg-white text-grey-8 q-mb-md shadow-1"
    >
      <q-tab name="profile" icon="person" label="Profile" />
      <q-tab name="additional" icon="info" label="Additional" />
      <q-tab name="contact" icon="phone" label="Contact" />
      <q-tab name="student" icon="school" label="Student" />
    </q-tabs>

    <!-- Profile Information Content -->
    <q-tab-panels v-model="activeTab" animated class="q-px-md">
      <q-tab-panel name="profile">
        <!-- Personal Information Card -->
        <q-card class="q-mb-md">
          <q-card-section class="bg-grey-2">
            <div class="text-h6 text-weight-bold">Personal Information</div>
          </q-card-section>
          
          <q-card-section>
            <!-- First Name -->
            <div class="row q-mb-md">
              <div class="col-4">
                <div class="text-subtitle2 text-grey-7">First Name:</div>
              </div>
              <div class="col-8">
                <q-input 
                  outlined 
                  dense 
                  v-model="personalInfo.firstName"
                  placeholder="Warren"
                  bg-color="grey-1"
                />
              </div>
            </div>

            <!-- Middle Name and Last Name Row -->
            <div class="row q-mb-md">
              <div class="col-6 q-pr-sm">
                <div class="text-subtitle2 text-grey-7 q-mb-xs">Middle Name:</div>
                <q-input 
                  outlined 
                  dense 
                  v-model="personalInfo.middleName"
                  placeholder="Miguel"
                  bg-color="grey-1"
                />
              </div>
              <div class="col-6 q-pl-sm">
                <div class="text-subtitle2 text-grey-7 q-mb-xs">Last Name:</div>
                <q-input 
                  outlined 
                  dense 
                  v-model="personalInfo.lastName"
                  placeholder="Mina"
                  bg-color="grey-1"
                />
              </div>
            </div>

            <!-- Social Suffix -->
            <div class="row q-mb-md">
              <div class="col-4">
                <div class="text-subtitle2 text-grey-7">Social Suffix:</div>
              </div>
              <div class="col-8">
                <q-input 
                  outlined 
                  dense 
                  v-model="personalInfo.socialSuffix"
                  placeholder="..."
                  bg-color="grey-1"
                />
              </div>
            </div>

            <!-- Full Name -->
            <div class="row q-mb-md">
              <div class="col-4">
                <div class="text-subtitle2 text-grey-7">Full Name:</div>
              </div>
              <div class="col-8">
                <q-input 
                  outlined 
                  dense 
                  v-model="personalInfo.fullName"
                  placeholder="Warren Miguel Mina"
                  readonly
                  bg-color="grey-1"
                />
              </div>
            </div>

            <!-- Email -->
            <div class="row q-mb-md">
              <div class="col-4">
                <div class="text-subtitle2 text-grey-7">Email:</div>
              </div>
              <div class="col-8">
                <q-input 
                  outlined 
                  dense 
                  v-model="personalInfo.email"
                  type="email"
                  placeholder="warrenmiguel@gmail.com"
                  bg-color="grey-1"
                />
              </div>
            </div>

            <!-- Shift Status -->
            <div class="row q-mb-md">
              <div class="col-4">
                <div class="text-subtitle2 text-grey-7">Shift Status:</div>
              </div>
              <div class="col-8">
                <q-select
                  outlined
                  dense
                  v-model="personalInfo.shiftStatus"
                  :options="shiftOptions"
                  bg-color="grey-1"
                />
              </div>
            </div>

            <!-- Date of Birth -->
            <div class="row q-mb-md">
              <div class="col-4">
                <div class="text-subtitle2 text-grey-7">Date of Birth:</div>
              </div>
              <div class="col-8">
                <q-input 
                  outlined 
                  dense 
                  v-model="personalInfo.dateOfBirth"
                  placeholder="May 26, 2002"
                  bg-color="grey-1"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="personalInfo.dateOfBirth" />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>

            <!-- Sex at Birth -->
            <div class="row">
              <div class="col-4">
                <div class="text-subtitle2 text-grey-7">Sex at Birth:</div>
              </div>
              <div class="col-8">
                <div class="row q-gutter-sm">
                  <q-radio 
                    v-model="personalInfo.sex" 
                    val="male" 
                    label="Male" 
                    color="primary"
                  />
                  <q-radio 
                    v-model="personalInfo.sex" 
                    val="female" 
                    label="Female" 
                    color="primary"
                  />
                  <q-radio 
                    v-model="personalInfo.sex" 
                    val="other" 
                    label="Other" 
                    color="primary"
                  />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- Action Button -->
        <div class="q-mt-lg q-mb-xl">
          <q-btn 
            label="Save Profile Information" 
            color="primary" 
            class="full-width q-py-sm text-h6"
            size="lg"
            @click="saveProfile"
            :loading="loading"
          />
        </div>
      </q-tab-panel>

      <!-- Additional Information Tab -->
      <q-tab-panel name="additional">
        <q-card class="q-mb-md">
          <q-card-section class="bg-grey-2">
            <div class="text-h6">Additional Information
              <q-icon name="edit"></q-icon>
            </div>
          </q-card-section>
        </q-card>
      </q-tab-panel>

      <!-- Contact Information Tab -->
      <q-tab-panel name="contact">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-center">Contact Information Content</div>
            <div class="text-center q-mt-md">
              <q-icon name="phone" size="xl" color="grey-5" />
              <div class="q-mt-md text-grey-6">Contact information will be displayed here</div>
            </div>
          </q-card-section>
        </q-card>
      </q-tab-panel>

      <!-- Student Information Tab -->
      <q-tab-panel name="student">
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
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const activeTab = ref('profile')
const loading = ref(false)

const tab = ref('grades')

const selectedTerm = ref('')
const terms = [
  { label: 'First Semester 2024-2025', value: '2024-2025' },
  { label: 'Second Semester 2024-2025', value: '2024-2025-2' }
]

// Personal Information Data
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

// Shift Status Options
const shiftOptions = ['Single', 'Married', 'Divorced', 'Widowed']

// Watch for name changes to update full name
watch(
  [() => personalInfo.value.firstName, () => personalInfo.value.middleName, () => personalInfo.value.lastName],
  ([firstName, middleName, lastName]) => {
    personalInfo.value.fullName = `${firstName} ${middleName} ${lastName}`.trim()
  }
)

// Format date for display
const formattedDate = computed(() => {
  if (!personalInfo.value.dateOfBirth) return ''
  const date = new Date(personalInfo.value.dateOfBirth)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
})

// Save Profile Function
const saveProfile = () => {
  loading.value = true
  
  // Simulate API call
  setTimeout(() => {
    loading.value = false
    $q.notify({
      type: 'positive',
      message: 'Profile information saved successfully!',
      position: 'top',
      timeout: 2000
    })
    
    // Navigate back or to another page
    // router.push('/dashboard')
  }, 1500)
}

// Format date when component mounts
personalInfo.value.dateOfBirth = formattedDate.value
</script>

<style scoped>
.profile-page {
  background-color: #f5f5f5;
  min-height: 100vh;
}

.profile-header {
  border-radius: 0 0 20px 20px;
}

.opacity-80 {
  opacity: 0.8;
}

/* Custom styles for inputs */
:deep(.q-field--outlined .q-field__control) {
  border-radius: 8px;
}

:deep(.q-tab__icon) {
  font-size: 24px;
}

:deep(.q-tab__label) {
  font-size: 12px;
  font-weight: 500;
}

/* Custom card styling */
.q-card {
  border-radius: 12px;
  overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .profile-header {
    padding: 16px;
  }
  
  .text-h5 {
    font-size: 1.25rem;
  }
  
  .text-subtitle1 {
    font-size: 0.875rem;
  }
}
</style>