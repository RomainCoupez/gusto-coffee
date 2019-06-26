<template>
  <div class="home">
    <div id="full-image-home" class="bkg-homepage">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <div class="card shadow-light-lg lift lift-lg mt-md-5">
              <!-- Body -->
              <div class="card-body">
                <h1>Réserver le meilleur espace de travail</h1>
                <p>Espaces partagé ou bureau privé, profitez d'un environnement de travail dédiés à la productivité</p>

                <!-- Form -->
                <form>
                  <div class="row">
                    <div class="form-label-group col-md-6">
                      <label for="cardEmail"><strong>Arrivée</strong></label>
                      <input type="email" class="form-control form-control-flush" id="cardEmail" placeholder="jj/mm/aaaa hh:mm">
                    </div>
                    <div class="form-label-group col-md-6 mb-md-4">
                      <label for="cardPassword"><strong>Départ</strong></label>
                      <input type="password" class="form-control form-control-flush" id="cardPassword" placeholder="jj/mm/aaaa hh:mm">
                    </div>
                    <div class="mt-6 col-md-12">
                      <button class="btn btn-block btn-orange lift" type="submit">
                        Rechercher
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="marketing" class="d-flex bkg-white">
      <div class="row justify-content-center padding w-100">
        <div class="col text-left">
          <p><img src="../assets/img/marketing-boost.svg" alt="Boostez votre productivité"/></p>
          <h3 class="line-up">Boostez votre productivité</h3>
          <p class="text-muted mb-6 mb-md-0">Une ambiance studieuse et décontracté boostera votre productivité au quotidien</p>
        </div>
        <div class="col text-left">
          <p><img src="../assets/img/marketing-synergie.svg" alt="Synergie business"/></p>
          <h3 class="line-up">Synergie business</h3>
          <p class="text-muted">Échangez, s'enrichir, créer des synergies. Voilà ce qui vous attend chez Gusto Coffee</p>
        </div>
        <div class="col text-left">
          <p><img src="../assets/img/marketing-economie.svg" alt="Économie"/></p>
          <h3 class="line-up">Économie</h3>
          <p class="text-muted">Profitez d'espaces professionnels sans supporter les coûts d'un bureau classique</p>
        </div>
      </div>
    </section>

    <section id="presentation" class="d-flex">
      <div class="row featurette justify-content-center m-auto">
        <div class="col-md-3">
          <img src="../assets/img/presentation.jpeg" class="img-fluid"/>
        </div>
        <div class="col-md-5 align-self-center padding">
          <h2 class="featurette-heading">Réserver le <span class="text-orange">meilleur</span> espace de travail</h2>
          <p class="lead">L'espace a le pouvoir de transformer une entreprise: il permet de libérer le potentiel des individus et des organisations. La conception intentionelle, l'accueil chaleureux et les solutions flexibles permettent à votre équipe de travailler de la meilleure façon.</p>
          <a href="">En savoir plus</a>
        </div>
      </div>
    </section>

    <section id="concept" class="d-flex bkg-white">
      <div class="row px-0 justify-content-center m-auto">
        <div class="col-md-3">
          <div class="card mb-4 shadow-sm">
            <img class="img-fluid" src="../assets/img/espaces-travail.jpeg"  alt="">
            <div class="card-body">
              <h3 class="line-up">Espace de travail partagé</h3>
              <p class="card-text">Abonnement à un poste de travail avec accès à des salles de conférence et des équipements Premium.</p>
              <a href="">En savoir plus...</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card mb-4 shadow-sm">
            <img class="img-fluid" src="../assets/img/espaces-bureaux.jpeg"  alt="">
            <div class="card-body">
              <h3 class="line-up">Bureaux privés</h3>
              <p class="card-text">Des espaces personnalisés conçus spécialement pour votre prochain siège au bureau satellite.</p>
              <a href="">En savoir plus...</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card mb-4 shadow-sm">
            <img class="img-fluid" src="../assets/img/cafeteria.jpeg" alt="">
            <div class="card-body">
              <h3 class="line-up">Caféteria</h3>
              <p class="card-text">Profitez d'un espace de détente icroyable pour déconnectez du monde du travail et savourer un café onctueux.</p>
              <a href="">En savoir plus...</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="partenaires" class="py-6 py-md-8 border-bottom">
      <div class="container padding">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-2 mb-4 mb-md-0">
            <div class="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
              <img class="w-100" src="../assets/img/mairie-de-paris.png" alt="">
            </div>
          </div>
          <div class="col-md-2 mb-4 mb-md-0">
            <div class="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
              <img src="../assets/img/le-grand-paris.png" alt="">
            </div>
          </div>
          <div class="col-md-2 mb-4 mb-md-0">
            <div class="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
              <img src="../assets/img/les-echos-paris.png" alt="">
            </div>
          </div>
          <div class="col-md-2 mb-4 mb-md-0">
            <div class="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
              <img src="../assets/img/bpi-france.png" alt="">
            </div>
          </div>
          <div class="col-md-2 mb-4 mb-md-0">
            <div class="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim">
              <img src="../assets/img/la-french-tech.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
