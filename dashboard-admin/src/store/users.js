import { defineStore } from 'pinia';
// import users from "C:/Users/tropt/Documents/GitHub/DashboardAdmin/mock-api-dashboard/db.json"

export const useUsersStore = defineStore('users', {
    state: () => ({
            users: [1,2,3],
    }),
    getters: {},
    actions: {
    },
});