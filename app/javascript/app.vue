<template>
  <div>
    <p>message: {{ person.message }}</p>
    <p>age: {{ person.age }}</p>
    
    <v-calendar is-dark />
  </div>
</template>

<script>
export default {
  props: ["person"],

  data: function () {
    return {
      
    }
  },
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
