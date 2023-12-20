<template>
    <footer class="footer-area" :style="{ backgroundImage: `url('/images/shape/footer-line.png')` }">
        <div class="footer-main">
            <div class="container">
                <div class="row mtn-40">
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-40">
                        <div class="widget-item">
                            <div class="about-widget">
                                <nuxt-link to="/" class="footer-logo">
                                    <img src="/images/logo/logo.png" alt="Logo">
                                </nuxt-link>
                                <p>A igreja Assembleia de Deus Jardim Cruzeiro está localizada em um ponto estratégico do bairro Jardim Cruzeiro para anunciar o evangelho aos moradores locais. Estamos sempre de portas e corações abertos para atender a todos os necessitados.</p>
                                <!--<div class="widget-total-raised">
                                    <h4 class="raised-title">Total Raised:</h4>
                                    <div class="raised-amount">$8,965</div>
                                </div>-->
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-40">
                        <div class="widget-item">
                            <h4 class="widget-title line-style">Galeria</h4>
                            <div class="widget-gallery">
                                <div class="row row-cols-3 row-gutter-10 mtn-10">
                                    <div class="tagembed-container" style=" width:100%;height:100%;overflow: auto;"><div class="tagembed-socialwall" data-wall-id="29813" view-url="https://widget.tagembed.com/29813"></div></div>
                                    <!--<div class="col mt-10">
                                        <div class="gallery-item">
                                            <img src="/images/photos/gallery1.jpg" alt="image">
                                            <a class="icon" href="#">
                                                <i class="icofont-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col mt-10">
                                        <div class="gallery-item">
                                            <img src="/images/photos/gallery2.jpg" alt="image">
                                            <a class="icon" href="#">
                                                <i class="icofont-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col mt-10">
                                        <div class="gallery-item">
                                            <img src="/images/photos/gallery3.jpg" alt="image">
                                            <a class="icon" href="#">
                                                <i class="icofont-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col mt-10">
                                        <div class="gallery-item">
                                            <img src="/images/photos/gallery4.jpg" alt="image">
                                            <a class="icon" href="#">
                                                <i class="icofont-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col mt-10">
                                        <div class="gallery-item">
                                            <img src="/images/photos/gallery5.jpg" alt="image">
                                            <a class="icon" href="#">
                                                <i class="icofont-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col mt-10">
                                        <div class="gallery-item">
                                            <img src="/images/photos/gallery6.jpg" alt="image">
                                            <a class="icon" href="#">
                                                <i class="icofont-instagram"></i>
                                            </a>
                                        </div>
                                    </div>-->
                                    <component src="//widget.tagembed.com/embed.min.js" :is="'script'"></component>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-40">
                        <div class="widget-item menu-wrap-two-column">
                            <h4 class="widget-title line-style">Links Rápidos</h4>
                            <div class="widget-menu-wrap">
                                <div class="row">
                                    <div class="col-6">
                                        <ul class="nav-menu nav">
                                            <nuxt-link to="/">Inicio</nuxt-link>
                                            <nuxt-link to="/sobre">Sobre nós</nuxt-link>
                                            <nuxt-link to="/obreiros">Obreiros</nuxt-link>
                                            <nuxt-link to="/dizimos-e-ofertas">Dízimos e Ofertas</nuxt-link>
                                        </ul>
                                    </div>
                                    <div class="col-6">
                                        <ul class="nav-menu nav align-right">
                                            <nuxt-link to="/contato">Contato</nuxt-link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <div class="widget-copyright text-center">
                                <p>&copy; 2024 <span><a href="https://governor.ltd/" target="_blank">governor.ltd</a></span>. Feito com <i class="icofont-heart-alt"></i> em <a href="#">Curitiba</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
            </div>
        </div>
        <component src="https://vlibras.gov.br/app/vlibras-plugin.js" :is="'script'"></component>
    </footer>
</template>

<script>
    export default {
        mounted() {
            new window.VLibras.Widget('https://vlibras.gov.br/app');
        }
    };
</script>