import { defineStore } from "pinia";
// defining our pinia store
export const useCategory = defineStore("category", {
  state: () => ({
    // like a data/props in vuejs
    postCategory: {},
    data: {},
    idCategory: {},
  }),
  getters: {}, // it's like computed property in vuejs

  actions: {
    // it's our methods in vuejs
    async editCategory(id) {
      // edit product by selected product
      console.log(this.post);
      await fetch(`http://localhost:3000/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.postCategory),
      });
      console.log("PUT");
    },
    async selectCategory(id) {
      await fetch(`http://localhost:3000/categories/${id}`, { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          this.postCategory = data;
          this.idCategory = data.id;
          console.log(this.idCategory);
        });
    },
  },
});
