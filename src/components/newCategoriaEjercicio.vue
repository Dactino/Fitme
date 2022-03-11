<template>
  <form @submit.prevent="addCategoria" @keypress.enter="submit">
    Nombre categoria:
    <input type="text" v-model="newCategoria.nombre" />
    <input type="submit" value="Enviar" />
  </form>
</template>

<script>
import { ref, push } from "firebase/database";
import db from "./bd/bd_config.js"

export default {
  name: "newCategoriaEjercicio",

  data() {
    return {
      newCategoria: {
        nombre: "",
      },
    };
  },
  methods: {
    addCategoria() {
      //con set() se eliminan las anteriores entradas, mientras que con update se modifican, y con push se añaden
      push(ref(db, "Categorias_ejercicios"), {
        nombre: this.newCategoria.nombre,
      });
      this.newCategoria.nombre = ""
    },
  },
};
</script>

<style>
</style>