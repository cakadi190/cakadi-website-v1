<script setup lang="ts">
interface ErrorInterface {
  statusMessage?: string;
  message?: string;
  statusCode?: number;
};

const props = defineProps<{
  error: ErrorInterface;
}>();

const computedTitle = computed(() => {
  if (props.error.statusCode === 404) return 'Halaman Tidak Dapat Ditemukan!';
  else return 'Woops! An Error Occurred!';
});

const computedMessage = computed(() => {
  if (props.error.statusCode === 404) return 'Halaman yang anda akses saat ini tidak dapat ditemukan. Periksa kembali ejaan url anda supaya tidak tersesat.';
  else props.error.message;
});

useHead({
  title: computedTitle,
});
</script>

<style lang="scss" scoped>
.title-page {
  font-size: 5rem;
  font-weight: bold;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
}
</style>

<template>
  <main class="container">
    <div class="row min-vh-100 text-center justify-content-center align-items-center">
      <div class="col-md-6">
        <h1 class="title-page">{{ error.statusCode }}</h1>
        <h2>{{ computedTitle }}</h2>
        <p>{{ computedMessage }}</p>

        <nuxt-link :to="{ name: 'index' }" class="btn mx-auto btn-primary" v-if="error.statusCode === 404">
          <Icon name="solar:home-bold-duotone" />
          <span>Kembali Ke Beranda</span>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>