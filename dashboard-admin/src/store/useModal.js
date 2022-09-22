import { defineStore } from "pinia";

export const useModal = defineStore("modal", {
  state: () => ({
    isModalVisible: false,
  }),
  actions: {
    showModal() {
      if (this.isModalVisible === false) {
        this.isModalVisible = true;
        this.show = false;
        document.querySelector("body").classList.remove("overflow-hidden");
        console.log("Modal is visible");
      } else {
        this.isModalVisible = false;
        this.show = true;
        console.log("o");
        document.querySelector("body").classList.add("overflow-hidden");
        console.log("Modal is not visible");
      }
    },
  },
});
