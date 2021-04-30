<template>
    <header class="search__header">
        <div>
            <i class="fas fa-bars" @click="openSidenav()"></i>
            <input class="search__header__search"
                @change="getResults()"
                v-model="searchQuery"
                type="text"
                placeholder="Buscar"
            >
        </div>
        <div>
            <i class="search__header__icon fas fa-user-alt"></i>
            <span class="regular-white-16">Erika M.</span>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data () {
        return {
            searchQuery: ""
        }
    },
    methods: {
        getResults () {
            this.$http.get('search?q='+this.searchQuery).then((response)=>{
                this.$store.dispatch("getResults", response.data.data)
            }).catch(error =>{
                console.log(error);
            });
        },
        openSidenav () {
            const sidenav = document.getElementsByClassName("sidenav")[0]
            sidenav.classList.remove("sidenav--hidden")
        }
    }
}
</script>