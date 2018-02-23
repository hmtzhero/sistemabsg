<template>
    <v-toolbar dark dense :app="true">
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-icon class="ml-3">fa-youtube</v-icon>
        </v-toolbar-title>
        <v-layout row align-center style="max-width: 650px">
            <v-text-field
                    placeholder="Search..."
                    single-line
                    append-icon="search"
                    :append-icon-cb="() => {}"
                    class="white--text"
                    hide-details
            ></v-text-field>
        </v-layout>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return {
                drawer: true,
            }
        }
    }
</script>