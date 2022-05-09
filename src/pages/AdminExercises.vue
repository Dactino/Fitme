<template>
  <TheContinueAlert
    v-if="checkOperation !== false"
    messageTitle="Eliminar ejercicio"
    @cancelOperation="cancelOp"
    @continueOperation="
      deleteExercise(checkOperation);
      alert[0] = true;
      alert[1] = true;
      checkOperation = false;
    "
  />
  <TheHeader />
  <div class="space-y-8">
    <div class="flex flex-wrap gap-8 p-8">
      <div
        v-for="exercise in exercises"
        :key="exercise.id"
        class="py-8 space-y-4"
      >
        <div v-if="exercise.id != 'Descanso'">
          <AExercise class="flex" :exercise="exercise" />
          <VButton @click="checkOp(exercise.id)">Eliminar</VButton>
        </div>
      </div>
    </div>
    <AdminExerciseForm @addExercise="addExercise" :categories="categories" />
  </div>
  <TheSuccessAlert
    v-if="alert[0]"
    @close="
      alert[0] = false;
      alert[1] = false;
    "
    :text="
      !alert[1] ? 'Ejercicio creado con éxito' : 'Ejercicio eliminado con éxito'
    "
  />
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { adminId } from "@/bd/auth";
import {
  auth,
  createExercise,
  getExerciseCategories,
  getExercises,
  deleteExercise,
} from "@/bd/bd.js";
import AExercise from "@/components/AExercise.vue";
import TheHeader from "@/components/TheHeader.vue";
import VButton from "@/components/VButton.vue";
import AdminExerciseForm from "@/components/AdminExerciseForm.vue";
import TheSuccessAlert from "@/components/TheSuccessAlert.vue";
import TheContinueAlert from "@/components/TheContinueAlert.vue";

auth.onAuthStateChanged(function (us) {
  if (us.uid != adminId) {
    useRouter().push("/404");
  }
});

const alert = ref([false]);

const checkOperation = ref(false);

function checkOp(id) {
  checkOperation.value = id;
  console.log(checkOperation);
}

function cancelOp() {
  checkOperation.value = false;
}

const categories = getExerciseCategories();

const exercises = getExercises();

function addExercise(newExercise) {
  if (createExercise(newExercise)) {
    alert.value[0] = true;
  }
}
</script>
