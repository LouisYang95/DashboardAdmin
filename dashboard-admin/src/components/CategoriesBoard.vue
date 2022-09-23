<template>
  <h1>Categories</h1>
  <br />

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
      </tr>
    </thead>
    <tbody
      v-for="category in elements"
      :key="category.id"
      @dblclick="this.mainStore.delete(element, category.id)"
    >
      <!-- there our function to delete product is activate on double click -->
      <tr>
        <th scope="row">
          {{ category.id }}
        </th>
        <td>{{ category.title }}</td>
        <td>
          {{ category.description }}
        </td>
        <td>
          <button
            class="btn btn-outline-primary"
            @click="
              this.modalStore.showModal();
              this.mainStore.selectProduct(category.id);
            "
          >
            Edit
          </button>
          <UseModal
            v-show="isModalVisible"
            @close="this.modalStore.showModal()"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useStore } from "@/store/useElement";
import { mapStores, mapState } from "pinia";
import { useProduct } from "@/store/index";
import UseModal from "./Modal.vue";
import { useModal } from "@/store/useModal.js";
export default {
  name: "CategoriesDashboard",
  components: {
    UseModal,
  },
  data() {
    return {
      element: "categories",
    };
  },
  beforeMount() {
    // beforeMount function permit the call before the component is mounted
    this.elementsStore.getElement(this.element); // call the function getProducts in users.js store with the computed property store
  },
  computed: {
    //create a computed property that returns the id given + store -> there elementsStore
    ...mapStores(useStore),
    // create a computed named 'products' containing the state : state.products in users.js store
    ...mapState(useStore, ["elements"]),
    // create a computed property which returns the id given + store -> there mainStore
    ...mapStores(useProduct),
    ...mapState(useProduct, ["id"]),
    // create a computed property which returns the id given + store -> there modalStore
    ...mapStores(useModal),
    // create a computed named 'isModalVisible' containing the state : state.isModalVisible in users.js store
    ...mapState(useModal, ["isModalVisible"]),
  },
};
</script>

<style>
.table.table-striped {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.product-container {
  background-color: lightgrey;
  border-radius: 30px;
  width: 300px;
  padding: 100px;
  margin: 20px;
}
h1{
    text-align: center;
}
</style>
