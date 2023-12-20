<template>
    <div class="main-container">
        <Header />
        <OffCanvasMobileMenu />
        <Breadcrumb items="Sobre Nós" title="Sobre Nós" />
        <AboutTwo />
        <TeamOne />
        <!--<FunFactOne />-->
        <TestimonialOne />
        <div class="tagembed-container" style=" width:100%;height:100%;overflow: auto;"><div class="tagembed-socialwall" data-wall-id="29813" view-url="https://widget.tagembed.com/29813"></div></div>
        <Footer />
    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            AboutTwo: () => import('@/components/AboutTwo'),
            TeamOne: () => import('@/components/TeamOne'),
            //FunFactOne: () => import('@/components/FunFactOne'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            Footer: () => import('@/components/Footer'),
        },
    };
</script>


