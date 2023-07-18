<template>
    <div id="NewAlbumComponent">
        <h3> Nuevo Album</h3><br>
        <hr>
        <div class="container">
            <form>
                <label for="txtArtista">Artista :</label>
                <input type="text" id="txtArtista" v-model="formulario.artist">
                <label for="txtAlbum">Album :</label>
                <input type="text" id="txtAlbum" v-model="formulario.album"><br><br>
                <label for="txtImagen">Imagen :</label>
                <input type="text" id="txtImagen" v-model="formulario.image">

                <label for="txtGenero">Genero :</label>
                <select name="genero" id="txtGenero" v-on:change="asignarGenero">
                    <option value="rock">Rock </option>
                    <option value="pop">Pop </option>
                    <option value="rap">Rap </option>
                </select><br><br>
                <input type="button" id="btnAgregar" v-on:click="enviarDatos" value="Agregar Album">
            </form>
            <hr>
        </div>
    </div>
</template>
<script>
export default{
    name:'NewAlbumComponent',
    data: function(){
        return{
            formulario:{
                artist:'',
                category:'rock',
                album:'',
                image:'',
            }

        }
    },
    methods:{
        asignarGenero: function(){
            let laSeleccion = document.getElementById('txtGenero').value;
            this.formulario.category = laSeleccion;
        },
        enviarDatos: function(){
            let data = {...this.formulario};
            this.$store.commit('ADD_MUSIC', data);
            console.log(data);
        }
    },
    computed:{

    },
    watch:{

    }
}
</script>
<style scoped>
input{
    border-radius: 2px;
}
</style>