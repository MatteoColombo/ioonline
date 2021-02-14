<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 id="schedule" class="text-center">{{ title }}</h1>
        <p class="text-center">{{ desc }}</p>
      </template>
    </v-col>
  </v-row>
</template>

<script>
const registrations = [
  {
    id: "333",
    name: "3x3x3",
    registered: false,
  },
  {
    id: "333bf",
    name: "3BLD",
    registered: false,
  },
  {
    id: "333fm",
    name: "FMC",
    registered: false,
  },
  {
    id: "222",
    name: "2x2x2",
    registered: false,
  },
  {
    id: "444",
    name: "4x4x4",
    registered: false,
  },
  {
    id: "",
    name: "3x3x3",
    registered: false,
  },
  {
    id: "333",
    name: "3x3x3",
    registered: false,
  },
  {
    id: "333",
    name: "3x3x3",
    registered: false
  },
  {
    id: "333",
    name: "3x3x3",
    registered: false
  },
];
export default {
  head() {
    return {
      title: this.$t("register.title"),
    };
  },
  data() {
    return {
      title: this.$t("register.title"),
      desc: this.$t("register.desc"),
    };
  },
};
</script>