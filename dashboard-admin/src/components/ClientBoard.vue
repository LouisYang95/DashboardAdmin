<template>
  <br />

  <div class="container">
    
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Orders</th>
      </tr>
    </thead>
    <tbody v-for="client in elements" :key="client.id">
      <!-- there our function to delete product is activate on double click -->
      <tr>
        <th scope="row">
          {{ client.id }}
        </th>
        <td>{{ client.firstname }}</td>
        <td>{{ client.lastname }}</td>
        <td>
          {{ client.email }}
        </td>
        <td>
          {{ client.orders }}
        </td>
        <td>
          <button
            class="btn btn-outline-primary"
            @click="
              this.modalStore.showModal();
              this.clientStore.selectClient(client.id);
            "
          >
            Edit
          </button>
          <UseClientModal
            v-show="isModalVisible"
            @close="this.modalStore.showModal()"
          />
        </td>
        <td>
          <button
            class="btn btn-outline-danger"
            @click="this.mainStore.delete(element, client.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <router-link exact to="/clients/add" class="btn btn-outline-success">
    <strong class="text">Add client</strong>
  </router-link>
</div>
</template>

<script>
import { useStore } from "@/store/useElement";
import { mapStores, mapState } from "pinia";
import { useClient } from "@/store/useClient";
import { useModal } from "@/store/useModal.js";
import { useProduct } from "@/store/index.js";
import UseClientModal from "./modalComponent/ClientModal.vue";
export default {
  name: "ClientDashboard",
  components: {
    UseClientModal,
  },
  data() {
    return {
      element: "clients",
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
    ...mapStores(useClient),
    ...mapState(useClient, ["postClient"]),
    ...mapState(useClient, ["idClient"]),

    ...mapStores(useProduct),
    // create a computed property which returns the id given + store -> there modalStore
    ...mapStores(useModal),
    // create a computed named 'isModalVisible' containing the state : state.isModalVisible in users.js store
    ...mapState(useModal, ["isModalVisible"]),
  },
};
</script>

<style>
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
  text-align: center;
}

</style>
