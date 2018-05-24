<template>
  <div>
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/shared/Header';
  import Footer from './components/shared/Footer';

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  }
</script>

<style>
  .fade-enter-active {
    animation: fade-in 200ms ease-out forwards;
  }

  .fade-leave-active {
    animation: fade-out 200ms ease-out forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>

