<template>
  <div class="">
    <h1>Login</h1>
    <form>
      <input type="text" name="email" placeholder="Email" v-model="email" />
      <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
      />
      <button type="button" name="button" @click="login()">Je m'inscris</button>
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
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          this.$router.replace('/category')
          alert('your account has been created')
        },
        function (err) {
          alert('Ooops... ' + err.message)
        }
      )
    },
    googleSocialLogin() {
      const provider = new Firebase.auth.GoogleAuthProvider();

      Firebase.auth().signInWithPopup(provider).then((result) => {
        this.$router.replace('home');
      }).catch((err) => {
        alert('Oops. ' + err.message)
      });
    },
    facebookSocialLogin() {
      const provider = new Firebase.auth.FacebookAuthProvider();

      Firebase.auth().signInWithPopup(provider).then((result) =>{
        this.$router.replace('home');
      }).catch((err) => {
        alert('Oops. ' + err.message)
      });
    }
  }
};
</script>

<style lang="css" scoped></style>
