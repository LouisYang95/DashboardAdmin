import { defineStore } from "pinia";
// defining our pinia store
export const useProduct = defineStore("main", {
  state: () => ({
    // like a data/props in vuejs
    post: {},
    data: {},
    changed: {},
    id: {},
  }),
  getters: {}, // it's like computed property in vuejs

  actions: {
    // it's our methods in vuejs
    async addProducts() {
      // Adding item to our json API
      const resquest = new Request("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      });
      const res = await fetch(resquest);
      const data = await res.json();
      this.data = data;
      this.post = "";
      console.log(data);
    },
    async deleteProduct(id) {
      // deleting products thanks to id
      await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
      window.location.reload();
      console.log("WORKED");
    },
    async editProduct(id) {
      // edit product by selected product
      console.log(this.post);
      await fetch(`http://localhost:3000/products/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
      console.log("PUT");
    },
    async selectProduct(id) {
      await fetch(`http://localhost:3000/products/${id}`, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          this.post = data;
          this.id = data.id;
          console.log(this.id);
        });
    },
  },
});
