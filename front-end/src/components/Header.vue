<template>
  <div class="head">
    <h2>{{msg}}</h2>
      Search: <input type="text" @input="onInput">

      <button @click="sendAjax">Send</button>
   
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
    
    msg: String,
  },
  methods: {
    onInput(event) {
        
      var value = event.target.value;
      this.$store.commit('getName', value);
    },
    
    sendAjax() {
      
      this.$store.dispatch('asyncSetName');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.head {
  height:200px;
  border: 1px solid blue;
  
}
</style>