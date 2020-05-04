<template lang="html">
  <div id="favourite_countries">
    <h2>Bucket List</h2>
    <ul>
      <li v-bind:class="{visited: country.visited}" v-for="country in bucketList">{{country.name}} <img class="small-flag" :src="country.flag"/>
      <p v-if="country.visited">Visited</p>
     <button v-if="!(country.visited)" v-on:click="updateList(country)">Visit!</button></li>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import BucketService from '@/services/BucketService.js'

export default {
  name: 'bucket-list',
  props: ['bucketList'],
  methods: {
    updateList(country){
      const updatedCountry = {
        name: country.name,
        flag: country.flag,
        visited: true
      }
      BucketService.updateCountry(country._id, updatedCountry)
      .then(country => eventBus.$emit('country-updated', country))

    }
  }
}
</script>

<style lang="css" scoped>
  .visited {
    background-color: yellow;
  }
</style>
