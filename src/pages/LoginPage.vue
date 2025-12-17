<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="q-pa-none">
        
        <div class="row" style="min-height: 100vh;">
          <q-card
            class="col-12 col-md-6 flex flex-center bg-white text-black q-pa-xl"
            style="min-height: 100vh;"
            flat
          >
            <div class="text-center" style="max-width: 350px;">
              <q-img
                src="/images/upheader.png"
                style="width: 200px; height: 200px;"
                class="q-mb-lg"
              />

              <div class="text-h6 q-mb-md">
                Welcome to the UP Cebu Academic Management Information System
              </div>

              <div class="text-subtitle2 q-mb-lg text-grey-7">Version 1.0.0</div>

              <q-btn
                label="Login with UPmail"
                color="red-10"
                unelevated
                icon="mail"
                class="full-width q-mb-lg q-py-sm"
                to="/home"
              />

              <div class="text-caption q-mb-md ">
                <strong>For Mac users:</strong> Please use the Chrome browser, as Safari is not currently supported. 
                If you are unable to log in using your UP Mail, accomplish this 
                <a href="https://support.upcebu.edu.ph/" target="_blank" class="text-blue">AMIS support form</a>.
              </div>

              <div class="text-caption text-grey-8">
                To help you get started, we will be conducting user training sessions soon.
                Additionally, <strong>UVEC class</strong> will be a <strong>resource hub</strong> for guides.
              </div>
            </div>
          </q-card>

          <!-----SCROLL CONTENT----->
          <q-card
            class="col-12 col-md-6 flex flex-center bg-primary text-black q-pa-md"
            style="min-height: 100vh; overflow-y: auto;"
            flat
          >
            <div style="max-width: 450px; width: 100%; border-radius: 12px;" class="bg-white q-pa-lg shadow-2">
              <div class="text-h6 q-mb-md" style="color:#8B2233;">
                Schedule for Activities
              </div>
              
              <q-separator color="primary" class="q-my-md" />

              <q-card flat bordered class="q-mb-md activity-card">
                <q-card-section>
                  <div class="activity-title text-subtitle1 q-mb-sm">1st Semester SY 2025-2026 (1251)</div>
                  <div class="text-caption">
                    <strong>Undergraduate and Graduate Programs:</strong><br>
                    Classes begin August 11, 2025
                  </div>
                </q-card-section>
              </q-card>
              
              <q-card flat bordered class="q-mb-md activity-card">
                <q-card-section>
                  <div class="activity-title text-subtitle1 q-mb-sm">1st Trimester SY 2025-2026 (1254)</div>
                  <div class="text-caption">
                    <strong>MBA & MEd Programs:</strong><br> 
                    Classes begin August 11, 2025
                  </div>
                </q-card-section>
              </q-card>

              <div class="text-h6 q-mt-lg text-primary" >
                Calendars
              </div>
              <q-separator color="primary" class="q-my-md" />
              
                <div class="q-gutter-y-sm">
                <q-card flat class="bg-primary text-white">
                    <q-card-section class="text-caption">
                    2025–2026 UP Cebu Academic Calendar (Semestral)
                    </q-card-section>
                </q-card>

                <q-card flat class="bg-primary text-white">
                    <q-card-section class="text-caption">
                    2025–2026 UP Cebu Academic Calendar (Trimesteral)
                    </q-card-section>
                </q-card>
                </div>


                </div>
          </q-card>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>


<style scoped>
/* Ensure the page fills the layout without extra scrollbars */
.q-page {
  overflow-x: hidden;
}

.activity-card {
  border-radius: 8px;
  transition: transform 0.2s;
}

.activity-card:hover {
  transform: translateY(-2px);
  border-color: var(--q-primary);
}

.activity-title {
  background-color: var(--q-primary);
  border-radius: 6px;
  padding: 4px 12px;
  color: white;
}

.calendar-btn {
  border-radius: 8px;
  padding: 10px;
}

.text-caption {
  line-height: 1.4;
}


</style>