<template>
    <section class="team-area team-fluid-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-xl-4 offset-xl-0">
                    <div class="section-title">
                        <h5 class="subtitle line-theme-color mb-7">obreiros</h5>
                        <h2 class="title title-style">Corpo de obreiros. <img class="img-shape" src="/images/shape/3.png" alt="Image-Givest"></h2>
                        <div class="desc">
                            <p>Nosso corpo de obreiros é composto por pessoas dedicadas e com os olhos voltados para o reino de Deus.</p>
                            <nuxt-link to="/contato" class="btn-theme btn-gradient btn-slide">Faça parte <img class="icon icon-img" src="/images/icons/arrow-line-right2.png" alt="Icon"></nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="team-member-items">
                        <div class="team-slider-container">
                            <swiper
                                :speed="1000"
                                :loop="true"
                                :space-between="30"
                                :breakpoints="swiperOptions.breakpoints"
                                :pagination="{ clickable: true }"
                            >
                                <swiper-slide class="team-member" v-for="(member, index) in teamMembers" :key="index">
                                    <div class="thumb">
                                        <img :src="member.imgSrc" :alt="member.name">
                                        <div class="social-icons">
                                            <a :href="list.url" v-for="(list, index) in member.socialLink" :key="index">
                                                <i :class="list.icon"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="member-info">
                                            <h4 class="name"><a href="#">{{ member.name }}</a></h4>
                                            <h6 class="designation">{{ member.designation }}</h6>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOptions: {
                    breakpoints: {
                        1200:{
                            slidesPerView : 4
                        },

                        768:{
                            slidesPerView : 3
                        },

                        320:{
                            slidesPerView : 1
                        }
                    }
                },

                teamMembers: [
                    {
                        imgSrc: "/images/team/0.png",
                        name: "José Aparecido",
                        designation: "Pastor local",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "https://www.facebook.com/rosane.zezinho"
                            },
                            {
                                icon: "icofont-instagram",
                                url: "https://www.instagram.com/rosane.zezinho/"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/1.png",
                        name: "Claudemir Casa",
                        designation: "1° Tesoureiro",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "https://www.facebook.com/casaclaudemir"
                            },
                            {
                                icon: "icofont-instagram",
                                url: "https://www.instagram.com/claudemircasa/"
                            },
                            {
                                icon: "icofont-mail",
                                url: "maito:claudemir.casa@ufpr.br"
                            },
                            {
                                icon: "icofont-globe",
                                url: "https://claudemir.casa"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/2.png",
                        name: "Délclacio Sá",
                        designation: "2° Tesoureiro",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "https://www.facebook.com/deoclacio.sa"
                            },
                            {
                                icon: "icofont-instagram",
                                url: "https://www.instagram.com/deoclacio_sa/"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/3.png",
                        name: "Carolina Ferreira",
                        designation: "1° Secretária",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "https://www.facebook.com/ccfcarolinaferreira"
                            },
                            {
                                icon: "icofont-instagram",
                                url: "https://www.instagram.com/ccfcarolferreira/"
                            },
                            {
                                icon: "icofont-mail",
                                url: "maito:ccfcarolferreira@gmail.com"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/4.png",
                        name: "Nelson Macedo",
                        designation: "Presbítero",
                        socialLink: [
                            {
                                icon: "icofont-globe",
                                url: "https://adcruzeiro.org"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/5.png",
                        name: "Anderson Mendes",
                        designation: "Diácono",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "https://www.facebook.com/anderson.mendes.998603495"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/6.png",
                        name: "Daniel Alves",
                        designation: "Diácono",
                        socialLink: [
                            {
                                icon: "icofont-globe",
                                url: "https://adcruzeiro.org"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/7.png",
                        name: "Paulo Cesar",
                        designation: "Diácono",
                        socialLink: [
                            {
                                icon: "icofont-globe",
                                url: "https://adcruzeiro.org"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/8.png",
                        name: "Walber Ygor",
                        designation: "Cooperador",
                        socialLink: [
                            {
                                icon: "icofont-instagram",
                                url: "https://www.instagram.com/casaldepaulla/"
                            },
                        ]
                    },
                    {
                        imgSrc: "/images/team/9.png",
                        name: "Nathan Henrique",
                        designation: "Cooperador",
                        socialLink: [
                            {
                                icon: "icofont-instagram",
                                url: "https://www.instagram.com/ivonenathan7/"
                            },
                        ]
                    },
                ]
            }
        },
    };
</script>