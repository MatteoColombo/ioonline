<template>
  <div class="regcontainer">
    <h2>{{ $t('register.howtoregister') }}</h2>
    <div class="instructions">
      <ul>
        <li v-for="item in $t('register.regsteps')" :key='item' v-html="item" class="text-justify"/>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.regcontainer {
  margin-top: 20px;
  margin-bottom: 20px;
}

.instructions{
    text-align: left;
    width: fit-content
}

a{
    text-decoration: none;
}
</style>