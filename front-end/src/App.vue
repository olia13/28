<template>
  <div id="app">
    

    <Header msg="Header"/>
    <Contacts msg="Contacts"/>
    <Messages msg="Messages"/>
    <Footer msg="Footer"/>

     
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Contacts from './components/Contacts.vue'
import Messages from './components/Messages.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
   
  
  components: {
    Header: Header,
    Contacts: Contacts,
    Messages: Messages,
    Footer: Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>