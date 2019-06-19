<template>
  <div>
    {{ categories }}
    <table>
      <thead>
        <th>Nom</th>
        <th>Categorie</th>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories" :key="index">
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
        </tr>
      </tbody>
    </table>

  <!-- <form @submit="addCategory(name, image, description)">
    <h2>Add a new category</h2>
    <input v-model="image" placeholder="Comic Image URL" class="input" required>
    <input v-model="name" placeholder="Name" required>
    <input v-model="description" placeholder="Description" required>
    <button type="submit" class="button">Add New Comic</button>
  </form> -->
  </div>
</template>

<script>
import { db } from '@/db'
export default {
  data () {
    return {
      categories: []
    }
  },
  firestore: {
    categories: db.collection('categories')
  }
}
</script>

<style lang="css" scoped>
</style>
