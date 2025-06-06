<template>
  <div class="container my-5">
    <div class="text-center">
      <h2 class="mb-4 text-dark fw-bold">Experiences</h2>
    </div>
    <div class="position-relative ms-4">
      <div class="timeline-line position-absolute top-0 start-0 h-100"></div>
      <div
        v-for="(item, index) in experienceList"
        :key="index"
        class="timeline-item position-relative ps-5 mb-5"
      >
        <!-- Dot -->
        <span   data-aos="fade-up" :data-aos-delay="index * 100"
               data-aos-duration="1000" class="fw-bold position-absolute fs-5" style="top: -3%; left: 2%">
          {{ item.startDate }} – {{ item.endDate }}
        </span>
        <div class="timeline-dot position-absolute top-0 start-0 translate-middle bg-dark"></div>

        <br>
        <!-- Content -->
        <div
          class="card p-5 "
          style="background-color: #f9fafb; border: none"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          data-aos-duration="800"
        >
          <div class="d-flex gap-4  align-items-start">
            <!-- Date & Logo -->

            <!-- Text -->
            <div class="flex-grow-1" style="width: 50%">
              <div class="d-flex gap-3 align-items-center">
                <img
                  :src="item.logo"
                  alt="logo"
                  class="img-fluid my-2"
                  style="width:80px; height: 80px; object-fit: contain"
                />
                <div class="d-flex flex-column">
                  <a
                    :href="item.url"
                    class="h4 fw-bold text-decoration-none text-dark"
                    target="_blank"
                    rel="noopener"
                  >
                    {{ item.company }}
                  </a>
                  <h5 class="fst-italic">{{ item.title }}</h5>
                </div>


              </div>


              <ul class="mb-0" style="list-style: unset">
                <li
                  v-for="(point, idx) in item.details"
                  :key="idx"
                >
                  {{ point }}
                </li>
              </ul>
            </div>
            <div style="width: 45%" class="d-flex flex-column h-100  justify-content-center">
              <div class="row gy-3 h-100">
                <div class="col-md-4" v-for="i in 9">
                  <img data-aos="fade-up"
                       :data-aos-delay="index *i* 100"
                       data-aos-duration="800" style="height: 80px" :src="`https://www.computerworld.com/wp-content/uploads/2025/05/1656594-0-68082700-1748257438-excel-cheat-sheet-primary-2000px.jpg?quality=50&strip=all`" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

  </div>
</template>

<script lang="ts" setup>
import Timeline from 'primevue/timeline'
import { ref } from 'vue'

interface Experience {
  title: string
  company: string
  logo: string
  url: string
  startDate: string
  endDate: string
  details: string[]
}

const experienceList = ref<Experience[]>([
  {
    title: 'Senior Accountant',
    company: 'ABC Finance Corp',
    logo: 'https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png',
    url: 'https://www.abcfinance.com',
    startDate: 'Jan 2020',
    endDate: 'Present',
    details: [
      'Led monthly financial closing and reporting cycles',
      'Improved budgeting accuracy by implementing new tools',
      'Managed payroll, invoicing, and ledger reconciliation',
      'Managed payroll, invoicing, and ledger reconciliation',
      'Managed payroll, invoicing, and ledger reconciliation',
      'Managed payroll, invoicing, and ledger reconciliation',
      'Managed payroll, invoicing, and ledger reconciliation',
      'Managed payroll, invoicing, and ledger reconciliation',
      'Used QuickBooks and SAP ERP for process automation',
    ],
  },
  {
    title: 'Accounting Assistant',
    company: 'XYZ Enterprises',
    logo: 'https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png',
    url: 'https://www.xyzcorp.com',
    startDate: 'Mar 2017',
    endDate: 'Dec 2019',
    details: [
      'Assisted in audit documentation and regulatory compliance',
      'Processed accounts payable and receivable',
      'Supported internal reporting and variance analysis',
      'Supported internal reporting and variance analysis',
      'Supported internal reporting and variance analysis',
      'Supported internal reporting and variance analysis',
      'Supported internal reporting and variance analysis',
      'Supported internal reporting and variance analysis',
      'Maintained tax filing records and cash flow reports',
    ],
  },
  {
    title: 'Accounting Assistant',
    company: 'XYZ Enterprises',
    logo: 'https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png',
    url: 'https://www.xyzcorp.com',
    startDate: 'Mar 2017',
    endDate: 'Dec 2019',
    details: [
      'Assisted in audit documentation and regulatory compliance',
      'Processed accounts payable and receivable',
      'Supported internal reporting and variance analysis',
      'Supported internal reporting and variance analysis',
      'Supported internal reporting and variance analysis',
      'Supported internal reporting and variance analysis',
      'Supported internal reporting and variance analysis',
      'Supported internal reporting and variance analysis',
      'Maintained tax filing records and cash flow reports',
    ],
  },
])

function isLast(index: number) {
  return index === experienceList.value.length - 1;
}

const timeline = [
  {
    title: 'Frontend Developer',
    company: 'ABC Tech Solutions',
    date: 'Jan 2022 - Dec 2022',
    description: 'Worked on Vue 3 applications, integrating REST APIs and maintaining responsive UI with Bootstrap.'
  },
  {
    title: 'Senior Developer',
    company: 'XYZ Innovations',
    date: 'Jan 2023 - Present',
    description: 'Leading a team of developers building scalable web apps using NestJS and Vue 3.'
  }
]
</script>

<style >
.p-timeline-event .p-timeline-event-opposite {
  display: none !important;
}
/* Extend the vertical line visually */
::v-deep(.p-timeline-event:last-child .p-timeline-event-separator::after) {
  height: 100%;
}

/* Optional: hide last marker if you don't want it */
::v-deep(.p-timeline-event:last-child .p-timeline-event-marker) {
  display: none;
}

.timeline-line {
  width: 3px;
  background-color: #042f6a;
  left: 6px;
}

.timeline-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 3px solid white;
  z-index: 2;
}
</style>
