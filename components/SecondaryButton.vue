<template>
  <v-btn
    width="100%"
    height="70px"
    elevation="2"
    x-large
    :to="sendTo"
    color="secondary"
    class="black--text"
  >
  {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    sendTo: {
      type: String,
    }
  },
};
</script>