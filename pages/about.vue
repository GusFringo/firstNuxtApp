<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio rerum nam minus blanditiis at
      enim nihil tempore deleniti placeat consequuntur.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio rerum nam minus blanditiis at
      enim nihil tempore deleniti placeat consequuntur.
    </p>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<script setup>
  const { data } = await useFetch("/api/currency/EUR");
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }
</style>
