<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'

import About from '@/components/About.vue'
import Client from '@/components/Client.vue'
import CallAction from '@/components/CallAction.vue'
import Portfolio from '@/components/Portfolio.vue'
import Team from '@/components/Team.vue'
</script>

<template>
  <Header />

  <Hero />

  <main id="main">

    <About />

    <Client />

    <CallAction />

    <Portfolio />

    <Team />
    
  </main>

  <Footer />
</template>