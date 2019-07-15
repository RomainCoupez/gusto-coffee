<template>
  <!-- Footer -->
  <footer class="page-footer font-small stylish-color-dark pt-4">
    <div class="container-fluid text-center text-md-left">
      <div class="row">
        <div class="col-md-3 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">LOGO GUSTOCOFFEE</h5>
          <p>10 rue des lilas, 94000 Créteil</p>
          <p>hello@gustocoffee.com</p>
        </div>

        <hr class="clearfix w-100 d-md-none">

        <div class="col-md-3 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">INFORMATIONS LÉGALES</h5>

          <ul class="list-unstyled">
            <li>
              <router-link to="/" class="nav-link">Accessibilité</router-link>
            </li>
            <li>
              <router-link to="/" class="nav-link">Mentions légales</router-link>
            </li>
            <li>
              <router-link to="/" class="nav-link">Données personelles</router-link>
            </li>
          </ul>
        </div>

        <hr class="clearfix w-100 d-md-none">

        <div class="col-md-3 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">EN SAVOIR PLUS</h5>
          <ul class="list-unstyled">
            <li>
              <router-link to="/" class="nav-link">FAQ</router-link>
            </li>
            <li>
              <router-link to="/" class="nav-link">Nous contacter</router-link>
            </li>
            <li>
              <router-link to="/" class="nav-link">Recrutement</router-link>
            </li>
          </ul>
        </div>

        <hr class="clearfix w-100 d-md-none">

        <div class="col-md-3 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">MENU</h5>

          <ul class="list-unstyled">
            <li>
              <router-link to="/about-us" class="nav-link">Qui sommes-nous ?</router-link>
            </li>
            <li>
              <router-link to="/concept" class="nav-link">Concept</router-link>
            </li>
            <li>
              <router-link to="/news" class="nav-link">Actualités</router-link>
            </li>
            <li>
              <router-link to="/booking" class="nav-link">Réserver une salle</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr>

    <ul class="list-unstyled list-inline text-center py-2">
      <li class="list-inline-item">
        <h5 class="mb-1">Register for free</h5>
      </li>
      <li class="list-inline-item">
        <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
      </li>
    </ul>

    <hr>

    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fab fa-facebook-f"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fab fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fab fa-google-plus-g"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <i class="fab fa-dribbble"> </i>
        </a>
      </li>
    </ul>

    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
    </div>
  </footer>
</template>
