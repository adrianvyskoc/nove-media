<template>
  <div class="row">
    <div class="col-lg-7 web">
      <iframe :srcdoc="html"></iframe>
    </div>
    <div class="container col-lg-5 p-5">

      <div class="text-muted text-end mb-4">
        Počet správnych odpovedí: <strong>{{ correctAnswers }} / {{ questionCount }}</strong>
      </div>

      <div class="fw-bold fs-1">{{ this.id }}. ukážka</div>
      <div class="fw-bold fs-2">Považujete túto stránku za dôveryhodnú?</div>

      <div class="mb-5 fs-5 text-muted">
        V prípade problémov so zobrazením ukážky, kliknite prosím na nasledujúci
        <a target="_blank" :href="question?.url">odkaz</a>.
        Ukážka bude zobrazená v novom okne.
      </div>

      <div class="d-flex justify-content-between mb-5">
        <button 
          class="btn btn-outline-success flex-grow-1"
          :class="{ 'active': buttonClicked === true }"
          :disabled="buttonClicked === false"
          @click="onOptionSelect(true)"
        >Áno</button>
        <button 
          class="btn btn-outline-danger flex-grow-1"
          :class="{ 'active': buttonClicked === false }"
          :disabled="buttonClicked === true"
          @click="onOptionSelect(false)"
        >Nie</button>
      </div>

      <p v-if="answerSelected" class="fw-bold fs-3">
        Odpovedali ste 
        <span :class="{ 'text-success': correct, 'text-danger': !correct }">{{ correct ? 'správne' : 'nesprávne' }}.</span>
      </p>

      <template v-if="answerSelected">
        <h3>Tento web je {{ question.trustworthy ? 'dôveryhodný' : 'nedôveryhodný' }} z nasledujúcich dôvodov:</h3>

        <ul class="list-unstyled">
          <li v-for="(reason, i) in question.reason" :key="i">{{ reason }}</li>
        </ul>
      </template>

      <button 
        v-if="canGoNext"
        class="btn btn-primary btn-lg flex-grow-1 float-end" 
        :disabled="!answerSelected"
        @click="onNext"
      >Prejsť na ďalšiu stránku</button>
      <div v-if="!canGoNext" class="fw-bold fs-2 mt-5">
         <router-link class="btn btn-primary btn-lg flex-grow-1 float-end" to="/evaluation">Vyhodnoťenie</router-link>
        Ďakujeme, toto je posledná ukážka.</div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  
  async mounted() {
    this._loadQuestion()
  },

  data() {
    return {
      question: null,
      correct: null,
      html: ''
    }
  },

  methods: {
    onOptionSelect(trustworthy) {
      if (this.answerSelected)
        return

      this.correct = trustworthy === this.question.trustworthy
      this.buttonClicked = trustworthy

      if (this.correct)
        this.$store.commit('incrementCorrectAnswers')
    },

    async onNext() {
      this.qeustion = null
      this.correct = null
      this.html = ''
      this.buttonClicked = null
      await this.$router.push({ name: 'Question', params: { id: Number(this.id) + 1 } })
      await this._loadQuestion()
    },

    async _loadQuestion() {
      this.question = (await axios.get(`mocks/data.json`)).data[this.id - 1]
      console.log(this.question)
      const html = (await axios.get('https://cors-anywhere.herokuapp.com/' + this.question.url)).data
      this.html = 'data:text/html;charset=utf-8,' + html
    }
  },

  computed: {
    correctAnswers() {
      return this.$store.state.correctAnswers
    },

    questionCount() {
      return this.$store.state.questionCount
    },

    answerSelected() {
      return typeof this.correct === 'boolean'
    },

    canGoNext() {
      return this.$store.state.questionCount > this.id
    },

    id() {
      return Number(this.$route.params.id)
    }
  }

}
</script>

<style lang="sass">
  iframe
    height: 100%

  .web
    height: 100vh
    *
      width: 100%

  .btn.btn-outline-success
    margin-right: 10px
</style>