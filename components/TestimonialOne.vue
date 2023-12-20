<template>
    <section class="testimonial-area testimonial-default-area bgcolor-theme3 position-relative">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-4 col-xl-5 position-static">
                    <div class="title-wrp" :style="{ backgroundImage: `url('/images/testimonial/bg-testi1.jpg')` }">
                        <div class="section-title">
                            <h5 class="subtitle line-white-color text-white mb-7">Comentários</h5>
                            <h2 class="title title-style text-white">
                                O que as pessoas dizem sobre nós. 
                                <img class="img-shape" src="/images/shape/3.png" alt="Image-Givest">
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-7 col-xl-6 position-static">
                    <div class="testimonial-content">
                        <div class="testimonial-slider-content">
                            <div class="testimonial-slider-container">
                                <swiper
                                    :speed="1000"
                                    :loop="true"
                                    :navigation="swiperOptions.navigation"
                                >
                                    <swiper-slide class="testimonial-single" v-for="(testimonial, index) in testimonials" :key="index">
                                        <div class="client-thumb-wrp">
                                            <div class="client-thumb">
                                                <img :src="testimonial.imgSrc" :alt="testimonial.name">
                                            </div>
                                            <div class="quote-icon">“</div>
                                        </div>
                                        <div class="client-content">
                                            <p>{{ testimonial.desc }}</p>
                                        </div>
                                        <div class="client-info">
                                            <img class="shape-line-img" src="/images/shape/line-t1.png" alt="Image-Givest">
                                            <h4 class="name">{{ testimonial.name }}</h4>
                                            <h6 class="designation">{{ testimonial.designation }}</h6>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                                <!-- Add Arrows -->
                                <div class="navigation-wrp">
                                    <div class="swiper-button-prev">
                                        <img class="icon-img" src="/images/icons/test-arrow-left.png" alt="Image-Icon">
                                    </div>
                                    <div class="swiper-button-next">
                                        <img class="icon-img" src="/images/icons/test-arrow-right.png" alt="Image-Icon">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue"
    import SwiperCore, { Navigation } from 'swiper/core'
    SwiperCore.use([Navigation ])

    import "swiper/css"

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },

                testimonials: [
                    {
                        imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjXIJRm7_pQAaWf-GggYWBznkx4VeDzOmGCEfjvUHpFslgy0=w120-h120-p-rp-mo-ba4-br100",
                        desc: "Benção!! A presença de Deus foi notória...Glória a Deus!!",
                        name: "Bruno Hernandes",
                        designation: ""
                    },
                    {
                        imgSrc: "https://lh3.googleusercontent.com/a/ACg8ocJ_yoeVniqG_f0bQay9M_CR6SC-ffjL905Rz3A37b7K=w120-h120-p-rp-mo-ba3-br100",
                        desc: "A glória do senhor desceu naquele lugar Foi benção pura 🙏🏻 …",
                        name: "Marilda Soares",
                        designation: ""
                    },
                    {
                        imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjUHttCB0j8GxCQJZ9tu5pvuedbM1qWYWBSpLkEmjWWTsbgD=w120-h120-p-rp-mo-ba2-br100",
                        desc: "Uma igreja acolhedora pessoas muito humilde e simpatissimas um ótimo lugar para cultuar a Deus em família",
                        name: "David Cadmiel",
                        designation: ""
                    }
                ]
            }
        },
    };
</script>
