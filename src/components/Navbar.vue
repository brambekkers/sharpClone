<script setup>
import IconBrain from '~icons/lucide/brain';
import IconTrophy from '~icons/material-symbols/trophy-outline';
import IconSettings from '~icons/tdesign/setting-1';
</script>

<template>
  <nav class="bg-sharp-navbar-bg z-50">
    <section class="sharp">
      <router-link to="/" class="flex items-center">
        <img src="../../public/vite.svg" alt="Shark icon" class="mr-2 h-8" />
        {{ $t('general.appName').toUpperCase() }}
        <span class="mark">!</span>
      </router-link>
    </section>
    <section class="links">
      <router-link to="/overview">
        <span class="link"> <icon-brain /> {{ $t('general.practice') }}</span>
      </router-link>
      <router-link to="/duel">
        <span class="link"><IconTrophy /> {{ $t('general.duel') }}</span>
      </router-link>
      <router-link to="/settings">
        <span class="link"><IconSettings /> {{ $t('general.settings') }}</span>
      </router-link>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
/* Style the header */
nav {
  padding: 0rem;
  color: #f1f1f1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.links {
  display: flex;
  gap: 1rem;
}
.link {
  display: flex;
  gap: 0.2rem;
  font-weight: 300;
  justify-content: center;
  align-items: center;
}
.sharp {
  font-weight: 800;
  font-size: 2rem;
  font-stretch: ultra-condensed;
}
.mark {
  color: #f3c000;
}
</style>
