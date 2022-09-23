import { defineStore } from "pinia";
// defining our pinia store
export const useCommand = defineStore("command", {
  state: () => ({
    // like a data/props in vuejs
    postCommand: {},
    data: {},
    idCommand: {},
  }),
  getters: {}, // it's like computed property in vuejs

  actions: {
    // it's our methods in vuejs
    async editCommand(id) {
      // edit product by selected product
      console.log(this.post);
      await fetch(`http://localhost:3000/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.postCommand),
      });
      console.log("PUT");
    },
    async selectCommand(id) {
      await fetch(`http://localhost:3000/orders/${id}`, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          this.postCommand = data;
          this.idCommand = data.id;
          console.log(this.idCommand);
        });
    },
  },
});
