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
          <v-btn value="555" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-555</v-icon>
          </v-btn>
          <v-btn value="666" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-666</v-icon>
          </v-btn>
          <v-btn value="333fm" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-333fm</v-icon>
          </v-btn>
          <v-btn value="333oh" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-333oh</v-icon>
          </v-btn>
          <v-btn value="minx" :class="{ 'disable-events': regClosed }">
            <v-icon>cubing-icon event-minx</v-icon>
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
            <v-btn value="555" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-555</v-icon>
            </v-btn>
            <v-btn value="666" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-666</v-icon>
            </v-btn>
            <v-btn value="333fm" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-333fm</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
        <div>
          <v-btn-toggle v-model="events" multiple color="primary">
            <v-btn value="333oh" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-333oh</v-icon>
            </v-btn>
            <v-btn value="minx" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-minx</v-icon>
            </v-btn>
            <v-btn value="skewb" :class="{ 'disable-events': regClosed }">
              <v-icon>cubing-icon event-skewb</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
      </v-col>
      <v-col cols="12" md="8" offset-md="2">
        <v-alert
          :value="success"
          color="green"
          type="success"
          outlined
          prominent
          text>
          <v-row align="center" no-gutters>
            <v-col class="grow">
              {{ message }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="shrink">
              <v-btn
                color="info"
                @click="success=false">
                Okay
              </v-btn>
            </v-col>
          </v-row>
         </v-alert>
        <v-alert
          :value="error"
          color="red"
          type="error"
          outlined
          text
          prominent>
          <v-row align="center" no-gutters>
            <v-col class="grow">
              {{ $t("register.regerror") }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="shrink">
              <v-btn
                color="info"
                @click="error=false">
                Okay
              </v-btn>
            </v-col>
          </v-row>
          </v-alert>
      </v-col>
      <v-col cols="12">
        <v-row v-if="isRegistered && !regClosed">
          <v-col
            :align="$vuetify.breakpoint.smAndDown ? 'center' : 'end'"
            cols="12"
            md="6"
          >
            <v-btn
              color="primary"
              width="200px"
              class="black--text"
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
              color="secondary"
              width="200px"
              class="black--text"
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
              class="black--text"
              :block="$vuetify.breakpoint.xsOnly"
            >
              {{ $t("register.register") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [],
      isRegistered: false,
      success: false,
      error: false,
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
      this.success = false;
      this.error = false;
      try {
        if (this.isRegistered) {
          this.events = await this.$axios.$put("/api/register", {
            events: this.events,
          });
          this.message = this.$t("register.regupdated");
          this.success = true;
        } else {
          if (this.events.length > 0) {
            this.events = await this.$axios.$post("/api/register", {
              events: this.events,
            });
            this.message = this.$t("register.regdone");
            this.success = true;
          }
        }
        this.isRegistered = this.events.length > 0;
      } catch (e) {}
    },
    async deleteRegistration() {
      try {
        this.success = false;
        this.error = false;
        this.events = await this.$axios.$delete("/api/register");
        this.message = this.$t("register.regdel");
        this.success = true;
        this.isRegistered = this.events.length > 0;
      } catch (e) {
        this.success = false;
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.pink-active,
.v-btn--active {
  background-color: #ec95b9 !important;
}
</style>

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