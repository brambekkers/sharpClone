<script setup>
import { useRoute } from 'vue-router';
import ImageProgress from '@/components/overview/ImageProgress.vue';
import HeaderLayout from '@/layouts/HeaderLayout.vue';
import useUserStore from '@/stores/userStore';

const { user } = storeToRefs(useUserStore());
const route = useRoute();
const { t } = useI18n();

const title = computed(() => {
  if (route.name === 'Overview' || route.name === 'Settings') {
    return `${t('general.hi')} ${user.value.name}!`;
  }
  if (route.name === 'Duel') {
    return 'Duelscore: 1.202';
  }
});

const subtitle = computed(() => {
  if (route.name === 'Overview') {
    return `${t('overview.welcomeBack')}!`;
  }
  if (route.name === 'Duel') {
    return `${t('duel.rdyToDuel')}`;
  }
  if (route.name === 'Settings') {
    return `${t('settings.changeYourProfileHere')}`;
  }
});
</script>

<template>
  <div class="h-44 w-screen relative">
    <HeaderLayout />
    <section
      class="h-44 flex justify-between relative pt-8 max-w-screen-lg mx-auto"
    >
      <div class="mt-4">
        <h1 class="font-extrabold text-3xl text-white">
          {{ title }}
        </h1>
        <p class="text-2xl text-white">
          {{ subtitle }}
        </p>
      </div>
      <ImageProgress v-if="route.name !== 'Practice'" />
    </section>
  </div>
</template>
