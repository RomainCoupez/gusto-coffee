<template>
  <div class="">
    <h1>Register</h1>
    <form>
      <input type="text" name="email" placeholder="Email" v-model="email" />
      <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
      />
      <button type="button" name="button" @click="signUp()">
        Je m'inscris
      </button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            this.$router.replace("/login");
            alert("your account has been created");
          },
          function(err) {
            alert("Ooops... " + err.message);
          }
        );
    }
  }
};
</script>

<style lang="css" scoped></style>
