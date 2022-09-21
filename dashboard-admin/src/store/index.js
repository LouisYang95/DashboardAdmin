import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      users: [1,2,3],
    };
  },
  getters: {},
  actions: {
  },
});
