<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> Edit client info</slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <form>
            <div class="form-group">
              <label for="formGroupExampleInput">Firstname :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="nom"
                v-model="postClient.firstname"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Lastname :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="description"
                v-model="postClient.lastname"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Email :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="prix"
                v-model="postClient.email"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Orders :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="quantite"
                v-model="postClient.orders"
              />
            </div>
            <button
              type="submit"
              class="btn btn-outline-primary"
              @click="this.clientStore.editClient(idClient)"
            >
              Edit
            </button>
          </form>
        </section>

        <footer class="modal-footer">
          <button
            type="button"
            class="btn-green"
            @click="close"
            aria-label="Close modal"
          >
            Close Modal
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapStores, mapState } from "pinia";
import { useClient } from "@/store/useClient";
export default {
  name: "useClientModal",
  data() {
    return {};
  },
  methods: {
    close() {
      //make this.post none
      this.clientStore.postClient = "";
      this.$emit("close");
    },
  },
  computed: {
    ...mapStores(useClient),
    ...mapState(useClient, ["postClient"]),
    ...mapState(useClient, ["idClient"]),
  },
};
</script>

<style scoped>
/* Css for the form */
.form-group {
  margin: 1em;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-control {
  width: 20rem;
  height: 2rem;
}
/* Css for the modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 70%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 20px;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
