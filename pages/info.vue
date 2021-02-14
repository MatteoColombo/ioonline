<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <v-img
      width="500"
      src="/edo.jpg"></v-img>
      <p class="text-justify">
          Edoardo Annesso è un eroe nazionale.
          Nato da una cigogna, ha partiroto il suo primo figlio all'età di 14 mesi (1 anno e 2 mesi per le mammine pancine).
      </p>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  head:{
    title: "Home"
  }
}
</script>
