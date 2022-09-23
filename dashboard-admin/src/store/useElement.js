import { defineStore } from 'pinia';
// import users from "C:/Users/tropt/Documents/GitHub/DashboardAdmin/mock-api-dashboard/db.json"

export const useStore = defineStore('elements', {
    state: () => ({
            elements: [], // props which will store our data from API
    }),
    getters: {},
    actions: {
        // our function to get every elements from API
        async getElement(index) {
            try {
                const res = await fetch(`http://localhost:3000/${index}`);
                const data = await res.json();
                this.elements = data;
                console.log("Connect");
                console.log(this.elements);
            }
            catch (e) {
                console.error(e);
            }
        },
    },
});