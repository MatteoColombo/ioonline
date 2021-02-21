<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <v-img aspect-ratio="3.0788" src="/wip.svg"></v-img>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("compete.title"),
    };
  },
};
</script>