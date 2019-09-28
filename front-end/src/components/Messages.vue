<template>
  <div class="mas">
    <h2>{{ msg }}</h2>
    <h3>{{messages}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Messages',
  props: {
    msg: String,
  },
  computed: {
    messages() {
      
      return this.$store.state.name
    },
  
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mas {
  border: 1px solid red;
  width: 50%;
  height: 400px;
  box-sizing: border-box;
  
}
</style>