<template>
  <nav>
    <div class="container" id="banner">
      <p id="tituloOpen">Open Music</p>
    </div><br>
    <router-link to="/pop"><button class="botones"> PoP </button></router-link>|
    <router-link to="/rock"><button class="botones"> Rock </button></router-link> |
    <router-link to="/rap"><button class="botones"> Rap </button></router-link> |
    <router-link to="/about"><button class="botones">About</button></router-link>|
  
  </nav>
  <new-album-component></new-album-component>
  <router-view/>
</template>
<script>
import NewAlbumComponent from './components/NewAlbumComponent.vue';
export default{
  name:'App',
  data:function(){
    return{

    }
  },
  components:{
    NewAlbumComponent,
  },
  methods:{

  },
  computed:{

  },
  watch:{
    
  },
  created(){
    let url = 'musica.json';
    fetch(url)
      .then(respuesta=>respuesta.json())
      .then(objetoJson =>{
        console.log(objetoJson);
        this.$store.state.musica = objetoJson;
      })
      .catch(error=>{
        console.log('ERROR: ',error);
      });
  },
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.botones{
  background-color: rgb(109, 199, 14);
  width: 15%;
  color: white;
  border-radius: 5px;
  border: none;
}
#banner{
  border: solid 2px grey;
  height: 100px;
}
#tituloOpen{
  background-color: grey;
  margin-top: 20px;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
