<script>
    import Hills0 from './Hills0.svelte';
    import Hedge from './Hedge.svelte';
</script>

<style>
    .scene {
        height: 400px;
        position: relative;  

        border-radius: 5px;     
        overflow: hidden;   
    }

    .back {
        height: 100%;        
    }

    .sky {        
      background: rgb(133,186,226);
      background: linear-gradient(180deg, rgba(133,186,226,1) 0%, rgba(220, 234, 247, 1.00) 100%);
      height: 80%;      
    }
    
    .grass {
      background: #858929;
      background: linear-gradient(0deg, #858929 0%, #A9AF34 100%);
      height: 20%;
    }

  .hills0 {
    height: 400px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;    
  }
    .hedge {
        /* background-color: yellow; */
    /* height: 400px; */
    width: 100%;
    position: absolute;
    bottom: 16%;
    left: 0;    
  }
</style>

<div class="scene">
    <div class="back">
        <div class="sky"></div>
        <div class="grass"></div>  
    </div>
    <div class="hills0">
        <Hills0 />    
    </div>
    <div class="hedge">
        <Hedge />
    </div>
</div>