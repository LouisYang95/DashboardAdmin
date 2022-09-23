import { defineStore } from "pinia";
// defining our pinia store
export const useClient = defineStore("client", {
  state: () => ({
    // like a data/props in vuejs
    postClient: {},
    data: {},
    idClient: {},
  }),
  getters: {}, // it's like computed property in vuejs

  actions: {
    // it's our methods in vuejs
    async editClient(id) {
      // edit product by selected product
      console.log(this.postClient);
      await fetch(`http://localhost:3000/clients/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.postClient),
      });
      console.log("PUT");
    },
    async selectClient(id) {
      await fetch(`http://localhost:3000/clients/${id}`, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          this.postClient = data;
          this.idClient = data.id;
          console.log(this.idClient);
        });
    },
  },
});
