<template>
  <div class="cont">
    <h2>{{msg}}</h2>  
  
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  props:{
    msg: String,
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cont {
  border: 1px solid red;
  width: 50%;
  height: 400px;
  float: right;
  box-sizing: border-box;
}
</style>