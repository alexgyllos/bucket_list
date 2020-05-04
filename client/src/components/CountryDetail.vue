<template lang="html">
  <div id="selected_country">
    <h2> {{selectedCountry.name}} </h2>
    <img class="lrg-flag" :src="selectedCountry.flag" />

</div>
</template>

<script>
export default {
  name: 'country-detail',
  props: ['selectedCountry']
}
</script>

<style lang="css" scoped>

.lrg-flag {
  height: 100px
}

</style>
