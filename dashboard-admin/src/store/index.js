
import { defineStore } from "pinia";
// defining our pinia store
export const useProduct = defineStore("main", {
  state: () => ({ // like a data/props in vuejs
    post : {},
    data : {},
  }),
  getters: {}, // it's like computed property in vuejs
  
  actions: { // it's our methods in vuejs
    async addProducts() {
      // Adding item to our json API 
      const resquest = new Request(
        "http://localhost:3000/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post)
      }
      );
      const res = await fetch(resquest); 
      const data = await res.json();
      this.data = data;
      console.log (data);
    },
    async deleteProduct(id){
      // deleting products thanks to id 
      await fetch(`http://localhost:3000/products/${id}`, { method: 'DELETE' });
      window.location.reload();
      console.log('WORKED')
    }
}
});
