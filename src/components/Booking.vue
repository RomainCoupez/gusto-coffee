<template>
  <div class="booking">
    <div id="semi-image-concept" class="bkg-concept d-flex ">
      <div class="container m-auto">
        <div class="row">
          <h1 class="m-auto kingSize">Réserver une salle</h1>
        </div>
      </div>
    </div>

    <section id="header" class="d-flex border-top-hr">
      <div class="container pdt-block">
        <h2 class="">Réserver un espace de Coworking à Paris, Gare du nord</h2>
        <p>Profitez d'espaces de travail agréables en plein coeur de Paris proche des grandes lignes et des métros. L'espace de coworking Gusto-Coffee Paris gare du nord se fera un plaisir de vous accueillir.</p>
      </div>
    </section>

    <section class="nos-salles">
      <div class="container-fluid">
        <div>
          <h3 class="font-weight-bold">Salle à partager </h3>
          <div class="row">
            <div class="col-3">
              <router-link to="/booking/a-partager/loggia" class="nav-link">
              <div class="card mb-4 shadow-sm">
                <img src="../assets/img/espaces-travail.jpeg"  alt="">
                <div class="card-body">
                  <h3 class="line-up">La loggia - <strong>5€ / heure</strong></h3>
                  <div class="d-flex">
                    <p class="text-grey">A partager</p>
                    <p class="text-grey">120 places</p>
                  </div>
                </div>
              </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="">
            <h3 class="font-weight-bold">Bureau à Privatiser </h3>
            <div class="row">
              <div class="col-3">
                <div class="card mb-4 shadow-sm">
                  <img src="../assets/img/espaces-travail.jpeg"  alt="">
                  <div class="card-body">
                    <h3 class="line-up">San Tiago - <strong>25€ / heure</strong></h3>
                    <div class="d-flex">
                      <p class="text-grey">Privatisable</p>
                      <p class="text-grey">4 places</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card mb-4 shadow-sm">
                  <img src="../assets/img/espaces-travail.jpeg"  alt="">
                  <div class="card-body">
                    <h3 class="line-up">Le Hublot - <strong>25€ / heure</strong></h3>
                    <div class="d-flex">
                      <p class="text-grey">Privatisable</p>
                      <p class="text-grey">4 places</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card mb-4 shadow-sm">
                  <img src="../assets/img/espaces-travail.jpeg"  alt="">
                  <div class="card-body">
                    <h3 class="line-up">Cocon - <strong>20€ / heure</strong></h3>
                    <div class="d-flex">
                      <p class="text-grey">Privatisable</p>
                      <p class="text-grey">4 places</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card mb-4 shadow-sm">
                  <img src="../assets/img/espaces-travail.jpeg"  alt="">
                  <div class="card-body">
                    <h3 class="line-up">La Hutte - <strong>20€ / heure</strong></h3>
                    <div class="d-flex">
                      <p class="text-grey">Privatisable</p>
                      <p class="text-grey">4 places</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <div class="card mb-4 shadow-sm">
                  <img src="../assets/img/espaces-travail.jpeg"  alt="">
                  <div class="card-body">
                    <h3 class="line-up">La formidable - <strong>30€ / heure</strong></h3>
                    <div class="d-flex">
                      <p class="text-grey">Privatisable</p>
                      <p class="text-grey">6 places</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card mb-4 shadow-sm">
                  <img src="../assets/img/espaces-travail.jpeg"  alt="">
                  <div class="card-body">
                    <h3 class="line-up">Eden - <strong>30€ / heure</strong></h3>
                    <div class="d-flex">
                      <p class="text-grey">Privatisable</p>
                      <p class="text-grey">6 places</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card mb-4 shadow-sm">
                  <img src="../assets/img/espaces-travail.jpeg"  alt="">
                  <div class="card-body">
                    <h3 class="line-up">Saloon - <strong>30€ / heure</strong></h3>
                    <div class="d-flex">
                      <p class="text-grey">Privatisable</p>
                      <p class="text-grey">6 places</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card mb-4 shadow-sm">
                  <img src="../assets/img/espaces-travail.jpeg"  alt="">
                  <div class="card-body">
                    <h3 class="line-up">Le comptoir - <strong>30€ / heure</strong></h3>
                    <div class="d-flex">
                      <p class="text-grey">Privatisable</p>
                      <p class="text-grey">6 places</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
var Shuffle = window.Shuffle;
  export default {

  name: 'Booking',
  methods: {

      privatisable() {
          window.shuffleInstance = new Shuffle(document.querySelector('.my-shuffle-container'), {
                itemSelector: '.js-item',
                speed: 1000,
                isCentered: true,
                staggerAmount: 100,
                  staggerAmountMax: 550,
                  columnWidth: 10,
              });
          shuffleInstance.filter('privatisable');
      }
  }
};
</script>



<style scoped>

</style>
