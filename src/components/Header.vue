<template>
  <section id="topbar" class="topbar d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="social-links d-flex align-items-center">
        <a href="https://github.com/mctechnologyofficial/" target="_blank" class="twitter"><i class="bi bi-github"></i></a>
        <a href="https://web.facebook.com/mctechnologyofficial" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://instagram.com/mctechnology.official" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/company/mctechnologyofficial" target="_blank" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </section>
  <!-- End Top Bar -->

  <header id="header" class="header d-flex align-items-center">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="/" class="logo d-flex align-items-center">
        <h1>MC TECHNOLOGY<span>.</span></h1>
      </a>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a v-scroll-to="'#hero'" href="javascript:void(0)">Home</a></li>
          <li><a v-scroll-to="'#about'" href="javascript:void(0)">About</a></li>
          <li><a v-scroll-to="'#portfolio'" href="javascript:void(0)">Portfolio</a></li>
          <li><a v-scroll-to="'#team'" href="javascript:void(0)">Team</a></li>
        </ul>
      </nav>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    </div>
  </header>
</template>