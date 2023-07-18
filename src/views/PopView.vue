<template>
    <div id="PopView">
        <h1>Pop</h1>
        <div class="container">
            <div class="row">
                <div v-for="vinilo in musica.pop" :key="vinilo.id" class="col-md-4">
                    <div class="card" style="width: 50%;">                    
                        <div class="card-body">
                            <h5 class="card-title">{{vinilo.artist}}</h5>
                            <img v-bind:src="vinilo.image" class="card-img-top" >
                            <p class="card-text">{{vinilo.album}}</p>    
                        </div>
                    </div>
                 
                </div>        
            </div>
        </div>
    </div>

</template>
<script>
import { mapState } from 'vuex';

export default{
    name:'PopView',
    data: function(){
        return{

        }
    },
    methods:{
       
    },
    computed:{
        ...mapState(['musica']),
    },
    watch:{

    }

}
</script>
<style scoped>
#PopView{
  
}
img{
    width: 40%;
}
.card{
    margin-bottom: 20px;

}
</style>