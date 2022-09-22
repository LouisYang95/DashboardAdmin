import { defineStore } from 'pinia';
// import users from "C:/Users/tropt/Documents/GitHub/DashboardAdmin/mock-api-dashboard/db.json"

export const useStore = defineStore('products', {
    state: () => ({
            products: [], // props which will store our data from API
    }),
    getters: {},
    actions: {
        // our function to get every products from API
        async getProducts() {
            try {
                const res = await fetch("http://localhost:3000/products");
                const data = await res.json();
                this.products = data;
                console.log("Connect");
                console.log(this.products);
            }
            catch (e) {
                console.error(e);
            }
        },
    },
});