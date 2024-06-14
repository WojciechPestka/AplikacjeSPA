<template>
    <div>
        <h2>Dodaj osobę</h2>
        <form @submit.prevent="addPerson">
            <input v-model="firstName" placeholder="Imię" />
            <input v-model="lastName" placeholder="Nazwisko" />
            <button type="submit">Dodaj</button>
        </form>
        <ul>
            <li v-for="person in people" :key="person.id">
                {{ person.firstName }} {{ person.lastName }}
            </li>
        </ul>
        <p>Liczba osób: {{ personCount }}</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const firstName = ref('');
const lastName = ref('');
const people = ref([]);

const addPerson = () => {
    if (firstName.value && lastName.value) {
        people.value.push({
            id: Date.now(),
            firstName: firstName.value,
            lastName: lastName.value
        });
        firstName.value = '';
        lastName.value = '';
    }
};

const personCount = computed(() => people.value.length);
</script>

<style scoped>
input {
    margin-right: 5px;
}

button {
    margin-top: 5px;
}

ul {
    margin-top: 10px;
    list-style-type: none;
}

p {
    margin-top: 10px;
}
</style>