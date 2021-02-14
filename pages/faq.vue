<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <template>
        <h1 id='schedule' class="text-center">{{ $t("live.title") }}</h1>
        <p class="text-justify">L'intero svolgimento dell'Italian Open Online 2021 sarà accompagnato da una diretta streaming su Twitch. Giochi a tema e non, interviste e due pomeriggi in compagnia vi attendono!</p>
      </template>
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
    title: "F.A.Q."
  }
}
</script>
