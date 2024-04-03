<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';

const cantidad = ref( 10000 );
const MIN = 0;
const MAX = 20000;
const STEP = 500;

</script>

<template>

    <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header />

        <div class="my-5">
            <input type="range" class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600 " :min="MIN" :max="MAX"
                :step="STEP" v-model.number="cantidad" />
            <p>$ {{ cantidad }}</p>




        </div>
    </div>

</template>
