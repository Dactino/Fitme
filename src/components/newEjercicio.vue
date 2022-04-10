<template>
  <form @submit.prevent="addEjercicio" @keypress.enter="submit">
    Nombre Ejercicio:
    <input type="text" v-model="newEjercicio.nombre" />
    Repeticiones Ejercicio:
    <input type="text" v-model="newEjercicio.repeticiones" />
    Nombre categoria:
    <input type="text" v-model="newEjercicio.categoria" />
    <!-- This example requires Tailwind CSS v2.0+ -->
<button type="button" class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Enviar</button>
  </form>
</template>

<script>
import { ref, push, onValue } from "firebase/database";
import db from "../bd/bd_config.js";
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
      categoriasRef: ref(db, "Categorias_ejercicios"),
    };
  },
  methods: {
    addEjercicio() {
      this.newEjercicio.imagen = this.newEjercicio.nombre + ".jpg";
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
      onValue(
        this.categoriasRef,
        (categorias) => {
          categorias.forEach((categoria) => {
            if (this.newEjercicio.categoria == categoria.val().nombre) {
              this.newEjercicio.categoria = categoria.key;
              this.addEjercicio();
            }
          });
        },
        {
          onlyOnce: true,
        }
      );
    },
  },
};
</script>

<style>
</style>