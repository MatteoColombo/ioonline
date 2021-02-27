<template>
  <div class="formcontainer" align="center">
    <div v-if="!regClosed">
      <h2 style="margin-bottom: 20px">
        {{ $t("register.regformopen.title") }}
      </h2>
      <p>
        {{ $t("register.regformopen.desc") }}
      </p>
    </div>
    <div v-else>
      <h2 style="margin-bottom: 20px">
        {{ $t("register.regformclosed.title") }}
      </h2>
      <p>
        {{ $t("register.regformclosed.desc") }}
      </p>
    </div>

    <v-row align="center" class="wrap">
      <v-col class="d-none d-md-block">
        <v-btn-toggle v-model="events" multiple color="primary">
          <v-btn value="333" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-333</v-icon>
          </v-btn>
          <v-btn value="222" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-222</v-icon>
          </v-btn>
          <v-btn value="444" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-444</v-icon>
          </v-btn>
          <v-btn value="333bf" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-333bf</v-icon>
          </v-btn>
          <v-btn value="333fm" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-333fm</v-icon>
          </v-btn>
          <v-btn value="sq1" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-sq1</v-icon>
          </v-btn>
          <v-btn value="clock" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-clock</v-icon>
          </v-btn>
          <v-btn value="pyram" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-pyram</v-icon>
          </v-btn>
          <v-btn value="skewb" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-skewb</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>

      <v-col cols="12" class="d-block d-md-none">
        <div>
          <v-btn-toggle v-model="events" multiple color="primary">
            <v-btn value="333" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-333</v-icon>
            </v-btn>
            <v-btn value="222" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-222</v-icon>
            </v-btn>
            <v-btn value="444" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-444</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
        <div>
          <v-btn-toggle v-model="events" multiple color="primary">
            <v-btn value="333bf" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-333bf</v-icon>
            </v-btn>
            <v-btn value="333fm" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-333fm</v-icon>
            </v-btn>
            <v-btn value="sq1" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-sq1</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
        <div>
          <v-btn-toggle v-model="events" multiple color="primary">
            <v-btn value="clock" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-clock</v-icon>
            </v-btn>
            <v-btn value="pyram" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-pyram</v-icon>
            </v-btn>
            <v-btn value="skewb" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-skewb</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
      </v-col>

      <v-col cols="12">
        <v-row v-if="isRegistered && !regClosed">
          <v-col
            :align="$vuetify.breakpoint.smAndDown ? 'center' : 'end'"
            cols="12"
            md="6"
          >
            <v-btn
              color="secondary"
              width="200px"
              :block="$vuetify.breakpoint.xsOnly"
              large
              @click="saveEvents()"
            >
              {{ $t("register.update") }}
            </v-btn>
          </v-col>
          <v-col
            :align="$vuetify.breakpoint.smAndDown ? 'center' : 'start'"
            cols="12"
            md="6"
          >
            <v-btn
              color="red"
              width="200px"
              :block="$vuetify.breakpoint.xsOnly"
              large
              @click="deleteRegistration()"
            >
              {{ $t("register.delete") }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-else-if="!regClosed">
          <v-col align="center">
            <v-btn
              color="primary"
              large
              @click="saveEvents()"
              width="200px"
              :block="$vuetify.breakpoint.xsOnly"
            >
              {{ $t("register.register") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" app>
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
          {{ $t("register.close") }}
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
      isRegistered: false,
      snackbar: false,
      message: "",
    };
  },
  props: {
    regClosed: {
      type: Boolean,
    },
  },
  async fetch() {
    this.events = await this.$axios.$get("/api/register");
    this.isRegistered = this.events.length > 0;
  },
  methods: {
    async saveEvents() {
      if (this.isRegistered) {
        this.events = await this.$axios.$put("/api/register", {
          events: this.events,
        });
        this.message = this.$t("register.regupdated");
        this.snackbar = true;
      } else {
        if (this.events.length > 0) {
          this.events = await this.$axios.$post("/api/register", {
            events: this.events,
          });
          this.message = this.$t("register.regdone");
          this.snackbar = true;
        }
      }
      this.isRegistered = this.events.length > 0;
    },
    async deleteRegistration() {
      this.events = await this.$axios.$delete("/api/register");
      this.message = this.$t("register.regdel");
      this.snackbar = true;
      this.isRegistered = this.events.length > 0;
    },
  },
};
</script>

<style>
.formcontainer {
  padding: 50px;
  align-content: center;
  margin-left: 0 auto;
  border-radius: 8px;
}

.wrap {
  width: fit-content;
}

.disable-events {
  pointer-events: none;
}
</style>