<template>
  <section class="container">
    <table class="table table-striped">
      <thead>
        <th>Id</th>
        <th>Nom</th>
        <th>Categorie</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories" :key="index">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
          <td>
            <button class="btn btn-outline-primary" @click="setCategory(category)">Edit</button>
            <button class="btn btn-outline-danger" @click="deleteCategory(category)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <article class="row justify-content-center mb-md-4">
      <div class="col-6">
        <form @submit.prevent="addCategory()">
          <h2>Add a new category</h2>
          <input
            type="hidden"
            v-model="id"
          />
          <input
            v-model="name"
            placeholder="Name"
            required
            class="form-control"
          />
          <input
            v-model="description"
            placeholder="Description"
            required
            class="form-control"
          />
          <div v-if="id">
            <input type="submit" value="Update category" class="btn btn-primary" />
          </div>
          <div v-else>
            <input type="submit" value="Add category" class="btn btn-primary" />
          </div>
        </form>
      </div>
    </article>
  </section>
</template>

<script>
import { db } from "@/db";
export default {
  data() {
    return {
      id: "",
      name: "",
      description: "",
      categories: []
    };
  },
  methods: {
    addCategory() {
      if(!this.id) {
        db.collection("categories")
          .add({
            name: this.name,
            description: this.description
          })
          .then(docRef => console.log("Document written with ID: ", docRef.id))
          .catch(err => console.log(err));
      }
      else {
        this.updateCategory(this.id)
      }
      this.id = ''
      this.name = ''
      this.description = ''
    },
    updateCategory(id) {
      db.collection("categories").doc(this.id).update({
        name: this.name,
        description: this.description
      })
      .then(function(docRef) {
        console.log("Updated document with ID: ", this.id);
      })
      .catch(function(error) {
        console.error("Error updating document: ", error);
      });
    },
    deleteCategory(category) {
      db.collection("categories").doc(category.id).delete()
    },
    setCategory(category) {
      this.id = category.id
      this.name = category.name
      this.description = category.description
    }
  },
  firestore: {
    categories: db.collection("categories")
  }
};
</script>

<style lang="css" scoped></style>
