<script setup lang="ts">
import layout from '~/layouts/default.vue'

useHead({
  title: 'Riwayat Pendidikan'
});

const { data, pending, error } = await useLazyFetch<Education[]>('/api/education')

const dateConverter = (date: string): string => {
  const $dateInstance = new Date(date);
  const $date = $dateInstance?.getDate();
  const $month = $dateInstance?.getMonth();
  const $year = $dateInstance?.getFullYear();

  const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];

  return `${$date} ${monthName[$month]} ${$year}`;
}
</script>

<template>
  <layout id="pendidikan">
    <template #page-title>Riwayat Pendidikan Saya</template>
    <template #page-desc>Biar gak bingung saya ini alumni mana aja dan atau lagi sekolah dimana?</template>

    <section v-motion :initial="{ y: 100, opacity: 0 }" :enter="{ y: 0, opacity: 1 }" :delay="200" class="pb-16 pt-6 gap-2 text-slate-500 dark:text-slate-400">
      <div class="container sm:text-left mx-auto px-4 sm:max-w-7xl justify-between flex flex-col-reverse md:flex-row gap-6 lg:gap-12">
        <div class="w-full md:w-4/6 lg:w-3/4">
          <div class="lg:pl-20 border-l border-transparent lg:border-slate-200 dark:lg:border-slate-800">
            <div v-if="data && !error">
              <div class="-mt-20 pt-20" v-for="(school, index) in data" :key="index" :id="school.name.replaceAll(/[\W_]+/g, '').toLowerCase()">
                
                <div class="flex w-full gap-6">
                  <img :src="school.logo" class="h-24 w-24" v-if="school.logo" :alt="school.name" />
                  <img src="/images/education/default.png" class="h-24 w-24" v-if="!school.logo" alt="Kemdikbud Logo" />

                  <div>
                    <h6 class="font-bold text-xl md:text-xl lg:text-3xl mb-2 text-gray-600 dark:text-gray-300">{{ school.name }} <span v-if="school.grade">({{ school.grade }})</span></h6>

                    <div class="flex mb-2 flex-wrap gap-y-1 gap-x-2 items-center">
                      <span v-if="school.departement" class="inline-block">{{ school.departement }} <span v-if="school.study_program">/ {{ school.study_program }}</span></span>
                      <Icon v-if="school.departement" name="fa6-solid:circle" class="text-[.5rem]" />
                      <a v-if="school.web" class="hover:text-green-700 hover:underline transition-all duration-200 dark:hover:text-green-500" :href="school.web">{{ school.web?.match(/^(?:.*?\.)?([a-zA-Z0-9\-_]{3,}\.(?:\w{2,8}|\w{2,4}\.\w{2,4}))$/)?.[1] }}</a>
                      <Icon v-if="school.web" name="fa6-solid:circle" class="text-[.5rem]" />
                      <span class="inline-flex gap-y-1 gap-x-2 flex-wrap items-center">
                        {{ dateConverter(school.start) }} s/d {{ school.end ? dateConverter(school.end) : '-' }}
                        <span class="p-2 rounded-md text-xs leading-none flex bg-green-500/[.25] text-green-500" v-if="school.end">Lulus</span>
                        <span class="p-2 rounded-md text-xs leading-none flex bg-indigo-500/[.25] text-indigo-500" v-else>Sedang Menempuh Pendidikan</span>
                      </span>
                    </div>

                    <div class="text-lg md:text-xl mt-2">{{ school.place }}</div>
                  </div>
                </div>

                <hr class="border-slate-200 pb-12 mt-12 dark:border-slate-700" v-if="index < Object.keys(data).length - 1" />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-2/6 lg:-mt-16 lg:w-1/4">
          <div class="bg-white z-20 top-0 border border-gray-200 sticky md:top-20 lg:top-16 dark:border-gray-800 dark:bg-gray-900 rounded-lg">
            <div class="font-bold px-5 py-4 border-b border-gray-200 dark:border-gray-800">Tabel Konten</div>
            <div class="my-2">
              <template v-for="(school, index) in data" :key="index">
                <a class="py-2 px-5 block duration-200 transition-all hover:bg-green-500/[.125] hover:text-green-600" :href="'#' + school.name.replaceAll(/[\W_]+/g, '').toLowerCase()">{{ school.name }}</a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>