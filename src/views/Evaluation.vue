<template>
  <div>
    <a class="text">Z 11 otázok sa vám správne podarilo zodpovedať {{correctAnswers}}</a>
    <router-link class="buttonT" to="/tutorial">Tutoriál</router-link>
    <router-link class="buttonQ" to="/question/1">Kvíz</router-link>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },

  methods: {

  },

  computed: {
    correctAnswers() {
      return this.$store.state.correctAnswers
    },
  }
};
</script>

<style lang="css">
.middle, .text, .buttonQ, .buttonT{
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 30px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
  left: 50%;
  border-radius: 5%;
}

.text {
    width: 50%;
    top: 45%;
    left: 30%;
}

.buttonT {
    top: 60%;
    left: 40%;
    width: 150px;
    text-align: center;
    background: lightseagreen;
}
.buttonQ {
    top: 60%;
    left: 55%;
    width: 150px;
    text-align: center;
    background: lightseagreen;
}
</style>