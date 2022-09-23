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
          <slot name="header"> Edit orders </slot>
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
              <!-- <label for="formGroupExampleInput">Product ID :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="nom"
                v-model="postCommand.products{}.product_id"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Quantity :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="description"
                v-model="postCommand.products"
              /> -->
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Status :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="prix"
                v-model="postCommand.status"
              />
            </div>
            <div>
                <label for="formGroupExampleInput2">Total Price :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="prix"
                v-model="postCommand.total_price"
              />
            </div>
            <div>
                <label for="formGroupExampleInput2">Customer ID :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="prix"
                v-model="postCommand.client_id"
              />
            </div>
            <button
              type="submit"
              class="btn btn-outline-primary"
              @click="this.commandStore.editCommand(idCommand)"
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
import { useCommand } from "@/store/useCommand";
export default {
  name: "useCommandModal",
  data() {
    return {

    };
  },
  methods: {
    close() {
      //make this.post none
      this.commandStore.postCommand = "";
      this.$emit("close");
    },
  },
  computed: {
    ...mapStores(useCommand),
    ...mapState(useCommand, ["postCommand"]),
    ...mapState(useCommand, ["idCommand"]),
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
