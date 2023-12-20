<template>
    <component
        src="https://apis.google.com/js/api.js"
        :is="'script'"
    ></component>
    <section class="blog-area blog-default-area">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-lg-6 m-auto">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h5 class="subtitle line-theme-color">Próximos Eventos</h5>
                        <h2 class="title title-style">Eventos programados para a semana <img class="img-shape" src="/images/shape/3.png" alt="Image-Givest"></h2>
                    </div>
                </div>
            </div>
            <div class="row mtn-150" data-aos="fade-up" data-aos-duration="1000">
                <div v-if="!events.length" class="ph-item">
					<div class="ph-col-12">
						<div class="ph-row">
						    <div class="ph-col-2 big"></div>
							    <div class="ph-col-2 big"></div>
								<div class="ph-col-2 big"></div>
								<div class="ph-col-2 big"></div>
								<div class="ph-col-2 big"></div>
							<div class="ph-col-2 big"></div>
						</div>
				    </div>
				</div>
                <div class="col-md-6 col-lg-4 mt-150" v-for="(event, index) in events" :key="index">
                    <div class="post-item">
                        <div class="thumb">
                            <nuxt-link :to="event.htmlLink" target="_blank">
                                <img v-if="isBirthday(event.summary)" src="/images/blog/birthday.jpg" alt="Event Placeholder">
                                <img v-else-if="isWEDNESDAY(event.summary)" src="/images/blog/vitoria.jpg" alt="Event Placeholder">
                                <img v-else-if="isEBD(event.summary)" src="/images/blog/ebd.jpg" alt="Event Placeholder">
                                <img v-else src="/images/blog/event.jpg" alt="Event Placeholder">
                            </nuxt-link>
                            <div class="meta-date">
                                <nuxt-link target="_blank" :to="event.htmlLink"><span>{{ day(event.start) }}</span> {{ month(event.start) }}</nuxt-link>
                            </div>
                            <div class="shape-line"></div>
                        </div>
                        <div class="content">
                            <div class="inner-content">
                                <div class="meta">
                                    <nuxt-link :to="event.htmlLink" target="_blank" v-if="isBirthday(event.summary)" class="post-category">ANIVERSÁRIO</nuxt-link>
                                    <nuxt-link :to="event.htmlLink" target="_blank" v-else class="post-category">PADRÃO</nuxt-link>
                                    <div class="post-share">
                                        <button class="icon-share">
                                            <img src="/images/icons/share-line-gradient.png" alt="Icon">
                                        </button>
                                        <!--
                                        <ul>
                                            <li v-for="(social, index) in blog.socials" :key="index">
                                                <a :href="social.url" :class="social.addColorClass">
                                                    <i :class="social.icon"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        -->
                                    </div>
                                </div>
                                <h4 class="title">
                                    <!--<nuxt-link to="/blog-details">{{ blog.title }}</nuxt-link>-->
                                    <nuxt-link :to="event.htmlLink" target="_blank">{{ event.summary }}</nuxt-link>
                                </h4>
                                <p>{{ day(event.start, true) }} {{ hour(event.start) }} ~ {{ hour(event.end) }}</p>
                            </div>
                            <div class="post-footer">
                                <nuxt-link :to="event.htmlLink" target="_blank" class="btn-theme btn-border-gradient btn-size-xs">
                                    <span>Detalhes <img class="icon icon-img" src="/images/icons/arrow-line-right-gradient.png" alt="Icon"></span>
                                </nuxt-link>
                                <nuxt-link :to="event.htmlLink" target="_blank" class="post-author">por: AD Cruzeiro</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@import 'https://unpkg.com/placeholder-loading/dist/css/placeholder-loading.min.css';
</style>

<script>
    const CALENDAR_ID = 'fre5ucaaln9051daf1f4u0ufi4@group.calendar.google.com';
    const API_KEY = 'AIzaSyAB4g1J9mp7hJUb6566DJmuho4dy7fpsQ8';
    const TIME_ZONE = 'America/Sao_Paulo';

    export default {
        mounted() {
            if (window.api == null) {
                this.api = window.gapi;
            }
            // Loads the JavaScript client library and invokes `start` afterwards.
            this.api.load('client', this.setCalendarData);
        },
        methods: {
            day(timestamp, text=false) {
				let date = new Date(timestamp?.dateTime ? timestamp?.dateTime : timestamp?.date);
				if (text) {
					return date.toLocaleString('default', { weekday: 'long' });
				}
				return date.toLocaleString('default', { day: '2-digit' });
			},
            month(timestamp) {
				let date = new Date(timestamp?.dateTime ? timestamp?.dateTime : timestamp?.date);
				return date.toLocaleString('default', { month: 'short' });
			},
            hour(timestamp) {
				let date = new Date(timestamp?.dateTime ? timestamp?.dateTime : timestamp?.date);
				let value = date.toLocaleString('default', { hour: '2-digit' , hour12: true, minute: '2-digit' });
				return value;
			},
            truncateString(str, num) {
				if (str.length > num) {
					return str.slice(0, num) + "...";
				} else {
					return str;
				}
			},
            isBirthday(title) {
                return title.toLowerCase().includes('aniversário');
            },
            isWEDNESDAY(title) {
                return title.toLowerCase().includes('vitória');
            },
            isEBD(title) {
                return title.toLowerCase().includes('escola bíblica');
            },
            setCalendarData() {
                var ref = this;
                ref.api.client.init({
                    'apiKey': API_KEY,
                    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                }).then(function () {
                    return ref.api.client.calendar.events.list({
                        'calendarId': CALENDAR_ID,
                        'timeZone': TIME_ZONE,
                        'singleEvents': true,
                        'timeMin': (new Date()).toISOString(), //gathers only events not happened yet
                        'maxResults': 6,
                        'orderBy': 'startTime'
                    }).then(function (response) {
                        if (response.result.items) {
                            ref.events = response.result.items;
                        }
                    }, function (reason) {
                        console.log('Error: ' + reason.result.error.message);
                    });
                })
            }
        },
        data() {
            return {
                events: []
            }
        },
    };
</script>
