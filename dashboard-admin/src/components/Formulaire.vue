<template>
    <div>
    <form @submit.prevent="this.mainStore.addProducts()">
        <div class="form-group">
            <label for="formGroupExampleInput">Nom</label>
            <input type="text" class="form-control" id="nom" placeholder="Nom" v-model="post.name">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Description</label>
            <input type="text" class="form-control" id="description" placeholder="Description" v-model="post.description">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Prix</label>
            <input type="text" class="form-control" id="prix" placeholder="Prix" v-model="post.price">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Quantité</label>
            <input type="text" class="form-control" id="quantite" placeholder="Quantité" v-model="post.stock">
        </div>
        <button type="submit" >Create</button>
    </form>
</div>
</template>

<script>
    import { useProduct } from "@/store/index";
    import { mapStores, mapState} from "pinia";

    export default {
        name: 'taskFormulaire',
        computed: {
    //create a computed property that returns the id(given in the store) + Store -> there mainStore
    ...mapStores(useProduct),
    // create 2 computed named 'data' and 'post' containing the state : state.data and state.post in index.js store
    ...mapState(useProduct, ["data"]),
    ...mapState(useProduct, ["post"]),
    ...mapState(useProduct, ["changed"]),
    ...mapState(useProduct, ['id'])

  }
    } 
</script>

<style scoped>
    .form-group {
        columns: 0;
        height: 100px;
    }

    .form-control {
        width: 20rem;
        height: 2rem;
    }

</style>