<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card p-3 mb-3" v-for="user in users">
                    <h3>{{user['name']}}</h3>
                    <h3>{{user['email']}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Users",
    data(){
        return{
            users: []
        }
    },
    mounted() {
        axios.get('/api/users')
        .then(resp=>{
           this.users = resp.data
        })
    }
}
</script>

<style scoped>

</style>
