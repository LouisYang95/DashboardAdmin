<template>
  <h1>Categories</h1>
  <br />

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product</th>
        <th scope="col">Variant</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total Price</th>
        <th scope="col">Client</th>
      </tr>
    </thead>
    <tbody
      v-for="order in elements"
      :key="order.id"
      @dblclick="this.mainStore.delete(element, order.id)"
    >
      <!-- there our function to delete product is activate on double click -->
      <tr>
        <th scope="row">
          {{ order.id }}
        </th>
        <td>
          {{ order.products[0].product_id }}
        </td>
        <td>
          {{ order.products[0].variant }}
        </td>
        <td>
          {{ order.products[0].quantity }}
        </td>
        <td>
          {{ order.total_price }}
        </td>
        <td>
          {{ order.client_id }}
        </td>
        <td>
          <button
            class="btn btn-outline-primary"
            @click="
              this.modalStore.showModal();
              this.mainStore.selectProduct(order.id);
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
  name: "OrdersBoard",
  components: {
    UseModal,
  },
  data() {
    return {
      element: "orders",
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
h1 {
  text-align: center;
}
</style>
