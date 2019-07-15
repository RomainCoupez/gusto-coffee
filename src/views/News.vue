<template>
  <div class="news">
    <h1>{{ info }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'News',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://gustocoffee-1b9e4.firebaseapp.com/api/v1/contacts')
      .then(response => (this.info = response))
  }
}
</script>
