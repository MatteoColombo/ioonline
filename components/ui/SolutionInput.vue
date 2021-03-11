<template>
  <v-row class="solutioninput">
    <v-col
      cols="12"
      md="12"
    >
      <v-textarea
        outlined
        v-model="textareaValue"
        :label="label"
        @keyup="validateAndSubmit()"
        hide-details
        :append-icon="isInvalid ? 'mdi-alert-circle' : null"
      ></v-textarea>
    </v-col>
    <v-col
      cols="12"
      md="12"
      v-if="isInvalid"
    >
      <small v-if="isSolutionTooLong">
        {{ $t("core.validation.solutionTooLong") }}
      </small>
      <small :key="errorDetail.index" v-for="errorDetail in solutionValidationErrors">
        "{{errorDetail.move}}" {{ $t("core.validation.invalidSolutionMove") }} <br />
      </small>
    </v-col>
  </v-row>
</template>

<script>
import { validateSolution } from '@/core';

export default {
  data() {
    return {
      textareaValue: '',
      solutionValidationErrors: [],
      isSolutionTooLong: false
    }
  },
  props: [
    'label',
    'value'
  ],
  mounted() {
    if (this.value) {
      this.textareaValue = this.value;
    }
  },
  methods: {
    validateAndSubmit() {
      const {
        isValid, isTooLong, invalidElements
      } = validateSolution(this.textareaValue);
      this.solutionValidationErrors = invalidElements;
      this.isSolutionTooLong = isTooLong;
      if (isValid) {
        this.$emit('input', this.textareaValue);
      }
      else {
        this.$emit('input', null);
      }
    }
  },
  computed: {
    isInvalid: function() {
      return this.textareaValue && this.textareaValue.length > 0 &&
      (this.solutionValidationErrors.length > 0 || this.isSolutionTooLong);
    }
  }
}
</script>

<style scoped>
.solutioninput{
  margin-bottom: 20px;
}
</style>