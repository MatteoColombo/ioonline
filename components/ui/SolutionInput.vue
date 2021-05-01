<template>
  <v-row class="solutioninput">
    <v-col
      cols="12"
      md="12"
    >
      <div
        class="contenteditable-container"
      >
        <div 
          ref="solutionContentEditableOverlay"
          class="contenteditable-overlay">
        </div>
        <div
          ref="solutionContentEditable"
          class="contenteditable"
          contenteditable="true"
          @keyup="validateAndSubmit($event)"
        >
        </div>
      </div>
      <!--
      <v-textarea
        outlined
        v-model="textareaValue"
        :label="label"
        @keyup="validateAndSubmit()"
        hide-details
        :append-icon="isInvalid ? 'mdi-alert-circle' : null"
      ></v-textarea>
      -->
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
    validateAndSubmit($event) {
      const innerText = this.$refs.solutionContentEditable.textContent;
      this.textareaValue = innerText;
      const {
        isValid, isTooLong, invalidElements, invalidMoves
      } = validateSolution(this.textareaValue);
      this.solutionValidationErrors = invalidElements;
      this.isSolutionTooLong = isTooLong;
      if (isValid) {
        this.$emit('input', this.textareaValue);
        this.$refs.solutionContentEditableOverlay.innerHTML = this.textareaValue;
      }
      else {
        this.$emit('input', null);
        let overlayValue = innerText;
        for (let invalidMove of invalidMoves) {
          const regex = new RegExp(`(^| )${invalidMove}( |$)`, "gm")
          overlayValue = overlayValue.replaceAll(regex, `$1<span class="highlighted">${invalidMove}</span>$2`);
          this.$refs.solutionContentEditableOverlay.innerHTML = overlayValue;
        }
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
  .solutioninput {
    margin-bottom: 20px;
  }
</style>

<style>
  .highlighted {
    background: rgba(230, 86, 9, 0.5) !important;
  }

  .contenteditable-container {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 70px;
    border: 1px solid white;
  }

  .contenteditable-overlay, .contenteditable {
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>