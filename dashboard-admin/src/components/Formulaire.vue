<template>
    <form>
        <div class="form-group">
            <label for="formGroupExampleInput">Nom</label>
            <input type="text" class="form-control" id="nom" placeholder="Nom">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Description</label>
            <input type="text" class="form-control" id="description" placeholder="Description">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Prix</label>
            <input type="text" class="form-control" id="prix" placeholder="Prix">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Quantité</label>
            <input type="text" class="form-control" id="quantite" placeholder="Quantité">
        </div>
    </form>
</template>

<script>
    export default {
        name: 'taskFormulaire',
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