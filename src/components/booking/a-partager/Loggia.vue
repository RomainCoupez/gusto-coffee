<template>
  <div class="booking">
    <section id="header" class="d-flex border-top-hr">
      <div class="container pdt-block">
        <div class="row">
          <div class="col-7">
            <h1 class="pt-5 text-left font-weight-bold">La Loggia</h1>
            <div class="col-3 p-0">
              <img class="" src="../../../assets/img/espaces-travail.jpeg" alt="La Loggia">
            </div>
            <h3 class="pt-5 text-left font-weight-bold">Description</h3>
            <p class="text-left ">La loggia est notre pièce principale. Elle est composée de 120 places de travail et elle a été agencée de sorte à ce que chaque worker ait une zone de confort optimale. Cette espace à partager à gare du nord est le lieu idéal pour rencontre d'autre coworker et partager des expériences et peut-être créer des synergies business !</p>
          </div>
          <div class="col-5 pt-5">
            <form class="encadrement p-3">
              <p class="text-grey"><strong>5€ par heure</strong></p>
              <div class="row">
                <div class="form-label-group col-md-6 text-left">
                  <label for="cardEmail"><strong>Arrivée</strong></label>
                  <input type="email" class="form-control form-control-flush" id="cardEmail" placeholder="jj/mm/aaaa hh:mm">
                </div>
                <div class="form-label-group col-md-6 mb-md-4 text-left">
                  <label for="cardPassword"><strong>Départ</strong></label>
                  <input type="password" class="form-control form-control-flush" id="cardPassword" placeholder="jj/mm/aaaa hh:mm">
                </div>
                <div class="form-label-group col-md-6 text-left">
                  <label for="numberHours"><strong>Nombre d'heures</strong></label>
                  <button class="btn btn-sm btn-outline-success" type="button">+</button>
                  <p>5 x 3 heures</p>
                  <hr>
                  <p><strong>Total</strong></p>
                </div>
                <div class="mt-6 col-md-12 pt-4">
                  <button class="btn btn-block btn-orange lift" type="submit">
                    Je réserve
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Loggia",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
