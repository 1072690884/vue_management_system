<template>
  <div class="about">
    <h1 @click="routerFn">This is an about page</h1>
  </div>
</template>
<script>
export default {
  methods: {
    routerFn: function() {
      console.log("ssss");
      console.log(this.$router);
      this.$router.push({ path: "/", query: { s: 123456 } });
    }
  }
};
</script>
