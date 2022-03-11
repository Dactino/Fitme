<template>
  <form @submit.prevent="buscarCategoria" @keypress.enter="submit">
    Nombre Ejercicio:
    <input type="text" v-model="newEjercicio.nombre" />
    Repeticiones Ejercicio:
    <input type="text" v-model="newEjercicio.repeticiones" />
    Nombre categoria:
    <input
      type="text"
      v-model="newEjercicio.categoria"
    />
    <input type="submit" value="Enviar" />
  </form>
</template>

<script>
import { ref, push, get } from "firebase/database";
import db from "./bd/bd_config.js";

export default {
  name: "newEjercicio",

  data() {
    return {
      newEjercicio: {
        nombre: "",
        repeticiones: "",
        categoria: "",
        imagen: "",
      },
      categoriasRef: get(ref(db, "Categorias_ejercicios")),
    };
  },
  methods: {
    addEjercicio() {
      this.newEjercicio.imagen = this.newEjercicio.nombre + ".jpg"

      //con set() se eliminan las anteriores entradas, mientras que con update se modifican, y con push se añaden
      push(ref(db, "Ejercicios"), {
        nombre: this.newEjercicio.nombre,
        repeticiones: this.newEjercicio.repeticiones,
        categoria: this.newEjercicio.categoria,
        imagen: this.newEjercicio.imagen,
      });
      this.newEjercicio.nombre = "";
    },

    //Con la siguiente función se intenta conseguir el id de la categoría cuyo nombre coincida con el proporcionado
    buscarCategoria() {
      this.categoriasRef
        .then((categorias) => {
          if (categorias.exists()) {
            console.log(categorias.val());
            categorias.val().forEach((categoria) => {
            if (categoria.nombre == this.newEjercicio.categoria) {
              this.newEjercicio.categoria = categoria.key;
              return;
            }
          });
          //this.addEjercicio();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
</style>