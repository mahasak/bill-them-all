<template>
  <div id="app">
    <h1>{{title}}</h1>
  </div>
  <div class="bill-items">
    <div v-for="item in items">
    {{item.name}} {{item.price}}
    </div>
    <ul>
      <li ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: "Bill-Them-All",
      msg: 'Welcome to Bill-ThemAll'
      items: [
        {
          name: "Item 1",
          price: 100.00
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
