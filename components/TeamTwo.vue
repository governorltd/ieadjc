<template>
    <section class="team-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <div class="section-title text-center">
                        <h5 class="subtitle line-theme-color mb-7">Obreiros</h5>
                        <h2 class="title title-style">Corpo de obreiros. <img class="img-shape" src="/images/shape/3.png" alt="Image-Givest"></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="team-member-items">
                        <div class="row">
                            <div class="col-sm-6 col-lg-4" v-for="(member, index) in teamMembers" :key="index">
                                <TeamMember :member="member" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            TeamMember: () => import('@/components/TeamMember'),
        },

        data() {
            return {
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