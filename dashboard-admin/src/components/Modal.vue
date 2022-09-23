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
          <slot name="header"> Edit le produit </slot>
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
              <label for="formGroupExampleInput">Nom :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="nom"
                v-model="post.name"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Description :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="description"
                v-model="post.description"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Prix :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="prix"
                v-model="post.price"
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Quantité :</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="quantite"
                v-model="post.stock"
              />
            </div>
            <button
              type="submit"
              class="btn btn-outline-primary"
              @click="this.mainStore.editProduct(id)"
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
import { useProduct } from "@/store/index";
export default {
  name: "useModal",
  data(){
    return{
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  computed: {
    ...mapStores(useProduct),
    ...mapState(useProduct, ["post"]),
    ...mapState(useProduct, ["id"]),
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
