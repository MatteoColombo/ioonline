<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-img
      width="500"
      src="/404.png"></v-img>
      {{$t('welcome')}}
    </v-col>
  </v-row>
</template>

<script>
export default {
  head:{
    title: "Home"
  }
}
</script>
