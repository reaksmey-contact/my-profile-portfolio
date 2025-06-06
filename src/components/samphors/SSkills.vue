<template>
  <div class="container  mb-5 mt-5">
    <div class="text-center">
      <h2 class="mb-5  text-dark fw-bold">Skills</h2>
    </div>
    <div class="row">
      <div
        class="col-md-6"
        v-for="(skill, index) in skills"
        :key="skill.id"
        :data-aos="index < skills.length / 2 ? 'fade-right' : 'fade-left'"
        :data-aos-duration="500"
      >
        <div class="card mb-4">
          <div class="card-body">
            <div class="h5 fw-bold d-flex gap-2 align-items-center">
              <i class="fw-bold" :class="skill.icon"></i>
              <div>
                {{ skill.name }}
              </div>
            </div>
            <div class="desciption">
              {{ skill.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Sample data for Accounting and Tax skills
const skills = ref([
  {
    id: 1,
    name: 'Knowledge of Accounting Practices',
    description: 'Understanding of accounting principles and standards (e.g., GAAP, IFRS).',
    proficiency: 90,
    icon: 'pi pi-book',
  },
  {
    id: 2,
    name: 'Financial Statement Preparation',
    description: 'Skilled in preparing balance sheets, income statements, and cash flow statements.',
    proficiency: 88,
    icon: 'pi pi-file',
  },
  {
    id: 3,
    name: 'Financial Analysis',
    description: 'Proficient in analyzing financial data to support decision-making.',
    proficiency: 85,
    icon: 'pi pi-chart-bar',
  },
  {
    id: 4,
    name: 'Auditing',
    description: 'Experienced in conducting and preparing for internal and external audits.',
    proficiency: 82,
    icon: 'pi pi-search',
  },
  {
    id: 5,
    name: 'Accounting Software',
    description: 'Competent in using software like QuickBooks, Xero, or SAP for accounting tasks.',
    proficiency: 80,
    icon: 'pi pi-desktop',
  },
  {
    id: 6,
    name: 'Analytical Thinking',
    description: 'Ability to interpret complex financial data and identify trends.',
    proficiency: 87,
    icon: 'pi pi-brain',
  },
  {
    id: 7,
    name: 'Problem-Solving',
    description: 'Skilled in resolving discrepancies and optimizing financial processes.',
    proficiency: 84,
    icon: 'pi pi-cog',
  },
  {
    id: 8,
    name: 'Communication',
    description: 'Effective in presenting financial information to stakeholders.',
    proficiency: 83,
    icon: 'pi pi-comments',
  },
  {
    id: 9,
    name: 'Organizational',
    description: 'Strong ability to manage multiple accounting tasks efficiently.',
    proficiency: 86,
    icon: 'pi pi-list',
  },
  {
    id: 10,
    name: 'Time Management',
    description: 'Proficient in meeting deadlines for financial reporting and tax filings.',
    proficiency: 85,
    icon: 'pi pi-clock',
  },
]);
</script>

<style scoped>
</style>