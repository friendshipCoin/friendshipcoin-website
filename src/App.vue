<template>
  <div>
    <app-header></app-header>

    <app-home></app-home>

    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Footer from './components/Footer';
  import Home from './components/home/Home';

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer,
      appHome: Home
    }
  }
</script>

