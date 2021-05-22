<template>
  <div>
    <div>
      <h2>{{ $t("compete.instr") }}</h2>
    </div>
    <div v-if="round === '333fm_r1'">
      <ul>
        <li
          class="text-justify instructions"
          v-for="(item, index) of $t('compete.fmc')"
          :key="'instr' + index"
          v-html="item"
        ></li>
      </ul>
    </div>
    <div v-else-if="round != null">
      <ul>
        <li
          class="text-justify instructions"
          v-for="(item, index) of $t('compete.instructions')"
          :key="'instr' + index"
          v-html="item"
        ></li>
      </ul>
    </div>
    <div v-else>
      {{ $t("compete.order") }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    round: {
      type: String,
    },
  },
};
</script>
