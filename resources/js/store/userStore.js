import {defineStore} from "pinia";

export const useUserStore = defineStore('userstore', {
    state: () => ({
        isActive: false
    })
})
