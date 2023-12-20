<template>
    <ul class="main-menu nav">
        <li>
            <nuxt-link to="/">Inicio</nuxt-link>
        </li>
        <li class="has-submenu">
            <nuxt-link to="/sobre">+AD Cruzeiro</nuxt-link>
            <ul class="submenu-nav">
                <li>
                    <nuxt-link to="/sobre">Sobre nós</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/dizimos-e-ofertas">Dízimos e Ofertas</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/obreiros">Obreiros</nuxt-link>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/contato">Contato</nuxt-link>
        </li>
        <!--<li class="has-submenu">
            <nuxt-link to="/">Páginas de Exemplo</nuxt-link>
            <ul class="submenu-nav">
                <li>
                    <nuxt-link to="/causes">Causes</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/causes-details">Causes Details</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog">Blog</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/blog-details">Blog Details</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/event-details">Event Details</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/volunteer">Volunteer</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/donation">Donation</nuxt-link>
                </li>
            </ul>
        </li>-->
    </ul>
</template>