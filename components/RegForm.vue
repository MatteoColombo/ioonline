<template>
  <div class="formcontainer" align="center">
    <h2 style="margin-bottom: 20px">
      Seleziona gli eventi per cui vuoi registrarti
    </h2>
    <p>
      Puoi modificare la tua registrazione fino alle 23:59 (GMT+1) dell'11 Marzo
    </p>

    <v-row align="center" spacing="10px">
      <v-col xs="12">
        <v-btn-toggle v-model="toggle_exclusive" multiple color="primary">
          <v-btn value="333">
            <v-icon>cubing-icon event-333</v-icon>
          </v-btn>
          <v-btn value="222">
            <v-icon>cubing-icon event-222</v-icon>
          </v-btn>
          <v-btn value="444">
            <v-icon>cubing-icon event-444</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>

      <v-col xs="12">
        <v-btn-toggle v-model="toggle_exclusive" multiple color="primary">
          <v-btn value="333">
            <v-icon>cubing-icon event-333</v-icon>
          </v-btn>
          <v-btn value="222">
            <v-icon>cubing-icon event-222</v-icon>
          </v-btn>
          <v-btn value="444">
            <v-icon>cubing-icon event-444</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col xs="12">
        <v-btn-toggle v-model="toggle_exclusive" multiple color="primary">
          <v-btn value="333">
            <v-icon>cubing-icon event-333</v-icon>
          </v-btn>
          <v-btn value="222">
            <v-icon>cubing-icon event-222</v-icon>
          </v-btn>
          <v-btn value="444">
            <v-icon>cubing-icon event-444</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col xs="12"> <v-btn color="primary" large>Invia</v-btn></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle_exclusive: [],
    };
  },
};
</script>

<style>
.formcontainer {
  padding: 50px;
  width: fit-content;
  align-content: center;
  margin-left: 0 auto;
  margin-top: 20px;
  border: 8px solid #00aa82;
  border-radius: 8px;
}
</style>