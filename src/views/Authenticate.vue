<template>
  <div class="">
    <h1>Authenticate</h1>
    <Login></Login>
    <Register></Register>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
export default {
  components: {
    Login,
    Register
  }
};
</script>

<style lang="css" scoped></style>
