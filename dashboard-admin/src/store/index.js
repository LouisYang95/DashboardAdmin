import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    post : {},
    data : {},
  }),
  getters: {},
  
  actions: {
    async AddProducts() {
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
    }
}
});
