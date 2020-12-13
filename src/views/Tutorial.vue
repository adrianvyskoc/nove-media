<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">Previous</a>
    <a class="next" @click="next" href="#">Next</a>
    <a class="middle" >{{currentIndex + 1}}</a>
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


   async next() {
     this.$router.push({ name: 'Tutorial'});
      if (this.currentIndex >= 4) {
        await this.$router.push({ name: 'Question', params: { id: 0} })
        this.currentIndex = 0;
      } else this.currentIndex += 1;

      
    },

    prev() {
      this.currentIndex -= 1;
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

.prev, .next {
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

.middle {
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
  right: 50%;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>