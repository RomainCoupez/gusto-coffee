<template lang="html">

  <div class="navbar-container ">
    <nav class="navbar navbar-expand-lg navbar-white" data-overlay="" data-sticky="top">
      <div class="container">
        <a class="navbar-brand fade-page" href="/">
          <img class="w-50" src="../assets/img/logo.jpg" alt="Logo Gusto-Coffee">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div class="collapse navbar-collapse justify-content-end">
          <div class="py-2 py-lg-0">
            <ul class="navbar-nav snip1555">
              <li class="nav-item">
                <router-link to="/about-us" class="nav-link">Qui sommes nous</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/concept" class="nav-link">Concept</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link to="/news" class="nav-link">Actualités</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link to="/booking" class="nav-link">Réserver une salle</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link to="/log" class="nav-link">Se connecter</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link to="/register" class="nav-link">S'inscrire</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
