<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link class="navbar-brand" to="/">Navbar</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login" v-if="!isActive">Логин</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/users" v-if="isActive" >Клиенты</router-link>
                    </li>
                </ul>
               <button
                   @click.prevent="logout"
                   type="button"
                   class="btn btn-danger"
                   v-if="isActive"
               >Выход</button>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</template>

<script>
import {useUserStore} from "../../store/userStore";
export default {
    name: "main",
    data(){
        return{
            isActive: null
        }
    },
    methods: {
        logout(){
            axios.post('/logout')
            .then(res=>{
                useUserStore().isActive = false
                this.$router.push('/login')
            })
        }
    },
    mounted() {
        this.isActive = useUserStore().isActive
        console.log(this.$store)
    },
    updated() {
        this.isActive = useUserStore().isActive
    }
}

</script>

<style scoped>
nav{
    background: #fff;
}
</style>
