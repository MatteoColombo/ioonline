<template>
    <div align="center" class="timer-container">
      <table>
        <tbody>
          <tr
            class="timer"
            :class="{
              'timer-lg': $vuetify.breakpoint.mdAndUp,
              'timer-md': $vuetify.breakpoint.mdOnly,
              'timer-sm': $vuetify.breakpoint.smOnly,
              'timer-xs': $vuetify.breakpoint.xsOnly,
            }"
          >
            <td>{{ days | two_digits }}</td>
            <td>{{ hours | two_digits }}</td>
            <td>{{ minutes | two_digits }}</td>
            <td>{{ seconds | two_digits }}</td>
          </tr>
          <tr
            class="timer-desc"
            :class="{
              'timer-desc-lg': $vuetify.breakpoint.mdAndUp,
              'timer-desc-md': $vuetify.breakpoint.mdOnly,
              'timer-desc-sm': $vuetify.breakpoint.smOnly,
              'timer-desc-xs': $vuetify.breakpoint.xsOnly,
            }"
          >
            <td>{{ $t("register.days") }}</td>
            <td>{{ $t("register.hours") }}</td>
            <td>{{ $t("register.minutes") }}</td>
            <td>{{ $t("register.seconds") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  mounted() {
    window.setInterval(() => {
      this.now = Math.floor(new Date().getTime() / 1000);
    }, 1000);
  },
  props: ['dateInMilliseconds'],
  data() {
    return {
      now: Math.floor(new Date().getTime() / 1000),
    };
  },
  computed: {
    seconds() {
      return Math.floor((this.dateInMilliseconds - this.now) % 60);
    },
    minutes() {
      return Math.floor((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.floor((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.floor((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    },
  },
  filters: {
    two_digits(value) {
      if (value < 0) {
        return "00";
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    },
  },
};
</script>

<style scoped>
.timer-lg td {
  font-size: 96px;
  border: 8px solid #00aa82;
  padding: 0 10px;
  font-weight: 700;
}

.timer-md td {
  font-size: 72px;
  border: 8px solid #00aa82;
  padding: 0 10px;
  font-weight: 700;
}

.timer-sm td {
  font-size: 40px;
  border: 6px solid #00aa82;
  padding: 0 7px;
  font-weight: 700;
}

.timer-xs td {
  font-size: 32px;
  border: 8px solid #00aa82;
  padding: 0 10px;
  font-weight: 700;
}

.timer-desc-lg {
  text-align: right;
  font-size: 22px;
}

.timer-desc-md {
  text-align: right;
  font-size: 20px;
}

.timer-desc-sm {
  text-align: right;
  font-size: 16px;
}

.timer-desc-xs {
  text-align: right;
  font-size: 15px;
}

.timer-desc {
  margin-top: 50px;
}

.timer-container {
  margin-top: 20px;
}
</style>

<style>
.v-card__text,
.v-card__subtitle,
.v-card__title {
  word-break: normal !important;
}
</style>