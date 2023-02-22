<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="card">
                    <input v-model="email" type="text" placeholder="email">
                    <input v-model="password" type="password" placeholder="password">
                    <button @click="login" type="button" class="btn btn-success">Войти</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useUserStore} from "../../store/userStore";
export default {
    name: "Login",
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            axios.get('/sanctum/csrf-cookie')
            .then(resp=>{
                axios.post('/login ', {
                    email: this.email,
                    password: this.password
                })
                .then(resp=>{
                    useUserStore().isActive = true
                    this.$router.push('/users')
                })
            })
        }
    }
}
</script>

<style scoped>
.card{
    padding: 20px;
}
</style>
