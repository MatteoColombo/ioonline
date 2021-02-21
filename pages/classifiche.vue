<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 id="schedule" class="text-center">{{ $t("results.title") }}</h1>
        <p class="text-center">{{ $t("results.desc") }}</p>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("results.title"),
    };
  },
};
</script>