<template>
  <v-row justify="center" align="center">
    <v-col cols="12" lg="6">
      <v-timeline dense>
        <v-timeline-item
          v-for="item in $t('register.steps').slice(startAt)"
          :key="item.hour"
          fill-dot
          v-bind="item"
        >
          <v-card class="elevation-2">
            <v-card-title align="justify">
              {{ item.event }}
            </v-card-title>
            <v-card-subtitle align="start">{{ item.date }}</v-card-subtitle>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<style>
.v-card__text,
.v-card__subtitle,
.v-card__title {
  word-break: normal !important;
}
</style>

<script>
export default {
    props:{
        startAt: {
            type: Number
        }
    }
}
</script>