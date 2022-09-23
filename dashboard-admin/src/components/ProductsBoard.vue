<template>
  <br />
  <!-- board -->

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">#</th>
        <th scope="col">#</th>
      </tr>
    </thead>
    <tbody v-for="product in elements" :key="product.id">
      <!-- there our function to delete product is activate on double click -->
      <tr>
        <th scope="row">
          {{ product.id }}
        </th>
        <td>{{ product.name }}</td>
        <td>
          {{ product.description }}
        </td>
        <td>{{ product.price }} euro</td>

        <td>
          <p v-if="product.stock === 10">
            Quantité maximale {{ product.stock }}
          </p>
          <p v-else-if="product.stock >= 5">
            presque stock {{ product.stock }}
          </p>
          <p v-else>Hors stock {{ product.stock }}</p>
        </td>
        <td>
          <button
            class="btn btn-outline-primary"
            @click="
              this.modalStore.showModal();
              this.mainStore.selectProduct(product.id);
            "
          >
            Edit
          </button>
          <UseProductModal
            v-show="isModalVisible"
            @close="this.modalStore.showModal()"
          />
        </td>
        <td>
          <button
            class="btn btn-outline-danger"
            @click="this.mainStore.delete(element, product.id)"
          >
            Delete
          </button>
        </td>
        <td>
          <button>
            <router-link exact to="/products/add" class="btn btn-outline-success">
              <strong class="text">Add Products</strong>
            </router-link>
          </button>
        </td>
        <td>
          <input
            type="checkbox"
            @click="this.mainStore.selectProduct(product.id)"
          />
          <button
            @click="this.mainStore.addToCart(product.id)"
            class="btn btn-outline-secondary"
          >
            add to cart
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import our store
import { useStore } from "@/store/useElement";
import { mapStores, mapState } from "pinia";
import { useProduct } from "@/store/index";
import UseProductModal from "./modalComponent/ProductModal.vue";
import { useModal } from "@/store/useModal.js";

export default {
  name: "UserDashboard",
  data() {
    return {
      element: "products",
    };
  },
  components: { UseProductModal },
  methods: {},
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
    ...mapState(useProduct, ["changed"]),
    ...mapState(useProduct, ["id"]),
    // create a computed property which returns the id given + store -> there modalStore
    ...mapStores(useModal),
    // create a computed named 'isModalVisible' containing the state : state.isModalVisible in users.js store
    ...mapState(useModal, ["isModalVisible"]),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Reem+Kufi+Ink&display=swap");

li {
  list-style: none;
  text-align: left;
  font-size: 20px;
}

ul {
  margin: 0;
  padding: 0;
}

.table.table-striped {
  width: 100%;
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
  font-family: "Reem Kufi Ink", sans-serif;
}
</style>
