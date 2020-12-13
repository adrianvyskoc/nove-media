<template>
  <div class="row">
    <div class="col-lg-6">
      <iframe src="https://www.google.com/"></iframe>
    </div>
    <div class="col-lg-6">
      <button class="btn btn-success btn-lg mr-3" @click="onOptionSelect(true)">Pravda</button>
      <button class="btn btn-danger btn-lg" @click="onOptionSelect(false)">Nepravda</button>

      <p v-if="answerSelected" class="fw-bold fs-3">
        Odpovedali ste 
        <span :class="{ 'text-success': correct, 'text-danger': !success }">{{ correct ? 'správne' : 'nesprávne' }}.</span>
      </p>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  
  async mounted() {
    this.question = (await axios.get(`mocks/${this.$route.params.id}.json`)).data
  },

  data() {
    return {
      question: null,
      correct: null
    }
  },

  methods: {
    onOptionSelect(trustworthy) {
      this.correct = trustworthy === this.question.trustworthy
    }
  },

  computed: {
    answerSelected() {
      return typeof this.correct === 'boolean'
    }
  }

}
</script>