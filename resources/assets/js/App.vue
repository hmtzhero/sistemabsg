<template>
    <v-app id="inspire">
        <toolbar></toolbar>
        <sidebar></sidebar>
        <v-content>
            <v-container  fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Sidebar  from './components/sidebar.vue'
    import Toolbar  from './components/toolbar.vue'
    import Ejemplo  from './components/example.vue'
    export default {
        components : {Sidebar, Toolbar, Ejemplo},
        props: {
            source: String
        },
        data: () => ({
        mini : true,
        items: [
            { icon: 'trending_up', text: 'Most Popular' },
            { icon: 'subscriptions', text: 'Subscriptions' },
            { icon: 'history', text: 'History' },
            { icon: 'featured_play_list', text: 'Playlists' },
            { icon: 'watch_later', text: 'Watch Later' }
        ],
        items2: [
            { picture: 28, text: 'Joseph' },
            { picture: 38, text: 'Apple' },
            { picture: 48, text: 'Xbox Ahoy' },
            { picture: 58, text: 'Nokia' },
            { picture: 78, text: 'MKBHD' }
        ]
    })

    }
</script>

<style>
    .input-group__details:after {
        background-color: rgba(255, 255, 255, 0.32) !important;
    }
</style>