<template>
  <div class="foot">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot {
  border: 1px solid red;
  width:100%;
  height: 500px;
}
</style>