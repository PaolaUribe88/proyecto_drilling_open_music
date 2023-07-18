<template>
    <div id="RockView">
        <h1>Rock</h1>
     
        <div class="container">
            <div class="row">
                <div v-for="vinilo in musica.rock" :key="vinilo.id" class="col-md-4">
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
    name:'RockView',
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
#RockView{

    color: black;
}
img{
    width: 40%;
}
.card{
    margin-bottom: 20px;

}
</style>