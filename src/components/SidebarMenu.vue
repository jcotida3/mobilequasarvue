<template>
  <q-scroll-area class="fit">
    <q-list padding>
      <q-item-label header>Main Navigation</q-item-label>

      <q-item class="text-weight-bold" to="/home" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>Dashboard</q-item-section>
      </q-item>

      <q-expansion-item
        group="nav"
        header-class="text-weight-medium"
        label="Student Portal"
        icon="school"
        default-opened
      >
        <q-list class="q-pl-md">
          <q-expansion-item label="Enrollment" header-class="text-weight-medium" default-opened>
            <q-list class="q-pl-md">
              <q-item clickable v-ripple
                ><q-item-section>Consent of Instructor</q-item-section></q-item
              >
              <q-item clickable v-ripple
                ><q-item-section>Departmental Consent</q-item-section></q-item
              >
              <q-item clickable v-ripple><q-item-section>OCS Consent</q-item-section></q-item>
              <q-item clickable v-ripple
                ><q-item-section>Prerogative Enrollment</q-item-section></q-item
              >
              <q-item clickable v-ripple to="/enlistment"
                ><q-item-section>Enlistment Module</q-item-section></q-item
              >
            </q-list>
          </q-expansion-item>

          <q-item clickable v-ripple><q-item-section>SET Module</q-item-section></q-item>
          <q-item clickable v-ripple><q-item-section>UPSCEE Module</q-item-section></q-item>
        </q-list>
      </q-expansion-item>
    </q-list>
  </q-scroll-area>
</template>
