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

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            people: []
        };
    },
    methods: {
        addPerson() {
            if (this.firstName && this.lastName) {
                this.people.push({
                    id: Date.now(),
                    firstName: this.firstName,
                    lastName: this.lastName
                });
                this.firstName = '';
                this.lastName = '';
            }
        }
    },
    computed: {
        personCount() {
            return this.people.length;
        }
    }
};
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