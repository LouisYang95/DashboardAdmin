
import { defineStore } from "pinia";

export const useProduct = defineStore("main", {
  state: () => ({
    post : {},
    data : {},
  }),
  getters: {},
  
  actions: {
    async addProducts() {
      const resquest = new Request(
        "http://localhost:3000/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify(this.post)
      }
      );
      const res = await fetch(resquest);
      const data = await res.json();
      this.data = data;
      console.log (data);
    },
    async deleteProduct(id){
      await fetch(`http://localhost:3000/products/${id}`, { method: 'DELETE' });
      console.log('WORKED')
    }
}
});
