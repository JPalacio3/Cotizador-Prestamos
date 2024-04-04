<script setup>
import { ref, computed, watch } from 'vue';

import Header from './components/Header.vue';
import Button from './components/Button.vue';
import { calcularTotalPagar } from './helpers'

const cantidad = ref( 10000 );
const meses = ref( 12 );
const total = ref( calcularTotalPagar( cantidad.value, meses.value ) );
const MIN = 500;
const MAX = 20000;
const STEP = 500;

const formatearDinero = ( valor ) => {
    const formatter = new Intl.NumberFormat( 'en-US', {
        style: 'currency',
        currency: 'USD'
    } );
    return formatter.format( valor );
};

watch( [ cantidad, meses ], () => {
    total.value = calcularTotalPagar( cantidad.value, meses.value );
} );



const handleChangeDecrementor = () => {
    if ( cantidad.value <= MIN ) {
        cantidad.value = MIN;
        return;
    } else {
        cantidad.value = cantidad.value - STEP;
    }
}

const handleChangeIncrementor = () => {
    if ( cantidad.value >= MAX ) {
        cantidad.value = MAX;
        return;
    } else {
        cantidad.value = cantidad.value + STEP;
    }
}
</script>

<template>
    <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header />

        <div class="flex justify-between mt-10">
            <Button :operador="'-'" @fn="handleChangeDecrementor" />
            <Button :operador="'+'" @fn="handleChangeIncrementor" />
        </div>

        <div class="my-5">
            <input type="range" class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600 " :min="MIN" :max="MAX"
                :step="STEP" v-model.number="cantidad" />

            <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">{{ formatearDinero(cantidad) }}</p>

            <h2 class="text-2xl font-extrabold text-gray-500 text-center">
                Elige un <span class="text-indigo-600">Plazo</span> a Pagar
            </h2>

            <select name="" id=""
                class="w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500 mt-7"
                :value="meses" v-model.number="meses">
                <option value="#" selected disabled class="text-gray-400"> Seleccione</option>
                <option value="6"> 6 Meses</option>
                <option value="12"> 12 Meses</option>
                <option value="24"> 24 Meses</option>
            </select>
        </div>

        <div class="my-5 space-y-3 bg-gray-50 p-5">
            <h2 class="text-2xl font-extrabold text-gray-500 text-center">
                Resumen <span class="text-indigo-600">De Pagos</span>
            </h2>
            <p class="text-xl text-gray-500 text-center font-bold"><span class="text-indigo-600">{{ meses }}</span>
                Meses</p>
            <p class="text-xl text-gray-500 text-center font-bold">Total a pagar: <span
                    class="text-indigo-600">{{ formatearDinero(total) }}</span></p>
            <p class="text-xl text-gray-500 text-center font-bold">Mensuales</p>


        </div>
    </div>
</template>
