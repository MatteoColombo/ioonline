<template>
  <v-dialog v-model="isVisible" hide-overlay persistent width="300" app>
    <v-card color="primary" dark>
      <v-card-text align="center">
        <h3>{{ $t("compete.standby") }}</h3>
        <img src="loading.gif" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
img{
    width:100%;
}
</style>

<script>
export default{
    props:{
        isVisible:{
            type: Boolean
        }
    }
}
</script>
