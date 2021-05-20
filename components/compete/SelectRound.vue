<template>
  <v-select
    :items="this.rounds"
    :menu-props="{ bottom: true, offsetY: true }"
    :label="roundName"
    :placeholder="$t('compete.select')"
    @change="roundChanged"
  />
</template>

<script>
export default {
  methods: {
    roundChanged(e) {
        this.$emit('change',e);
    },
  },
  props: {
    rounds: {
      type: Array,
    },
  },
};
</script>
