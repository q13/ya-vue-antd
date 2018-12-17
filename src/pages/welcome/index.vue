<template>
  <div class="welcome-body">
    The vue Implementation transform antd components interfaces on runtime
  </div>
</template>

<script>
export default {
  created() {
    console.log('Welcome created!');
  }
}
</script>

<style scoped>
.welcome-body {
  animation: 1s rainbow;
}
@keyframes rainbow {
  0% { background: #c00; }
  50% { background: orange; }
  100% { background: yellowgreen; }
}
</style>
