<script>
import Typed from 'typed.js'
export default {
  mounted() {
    const options = {
      strings: ["Interface", "System Application", "Ideas to Life"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    }
    new Typed('.typed', options)
  }
}
</script>

<template>
    <section id="hero" class="hero">
        <div class="container position-relative">
            <div class="row gy-5" data-aos="fade-in">
                <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                    <h2>Welcome</h2>
                    <p>We Create <span class="typed"></span></p>
                    <div class="d-flex justify-content-center justify-content-lg-start">
                        <a v-scroll-to="'#about'" href="javascript:void(0)" class="btn-get-started">Get Started</a>
                    </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2">
                    <img src="assets/img/hero-img.svg" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100">
                </div>
            </div>
        </div>

        <div class="icon-boxes position-relative">
            <div class="container position-relative">
                <div class="row gy-4 mt-5">

                    <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-code-slash"></i></div>
                            <h4 class="title"><a href="#" class="stretched-link">Web Development</a></h4>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-phone"></i></div>
                            <h4 class="title"><a href="#" class="stretched-link">Mobile Development</a></h4>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-pc-display"></i></div>
                            <h4 class="title"><a href="#" class="stretched-link">Software Development</a></h4>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div class="icon-box">
                            <div class="icon"><i class="bi bi-brush"></i></div>
                            <h4 class="title"><a href="#" class="stretched-link">UI / UX Design</a></h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>