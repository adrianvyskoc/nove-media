<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a v-if="currentIndex !== 0" class="prev" @click="prev" href="#">Previous</a>
    <a v-if="currentIndex !== 4" class="next" @click="next" href="#">Next</a>
    <router-link v-if="currentIndex === 4" class="quiz" to="/question/1">Quiz</router-link>
    <a  class="middle" >{{currentIndex + 1}}</a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      images: [
        "pics/tutorial1.png",
        "pics/tutorial2.png",
        "pics/tutorial3.png",
        "pics/tutorial4.png",
        "pics/tutorial5.png"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  methods: {


    next() {
      this.currentIndex += 1;
    },

    prev() {
      this.currentIndex -= 1;
    },

    async quiz() {
      this.$router.push({ name: 'Question', params: { id: 0} })
    }
  },

  computed: {
    currentImg() {
      return this.images[this.currentIndex];
    }
  }
};
</script>

<style lang="css">
  img {
  height:800px;
  width:100%
}

.prev, .next, .quiz {
  cursor: pointer;
  position: absolute;
  top: 80%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.middle{
  position: absolute;
  top: 80%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
  left: 50%;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.quiz {
  right: 0;
}

.quiz:hover {
  background-color: black;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>