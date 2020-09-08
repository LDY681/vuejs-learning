<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'
    export default {
        props: ['userAge'], 
        methods: {
            editAge() {
                this.userAge = 30;
                //Apporach 1, event emitted to parent, then parent to child userdetails
                //this.$emit('ageWasEdited', this.userAge);

                //Apporach 3 use global eventBus
                //eventBus.$emit('ageWasEdited', this.userAge);
                
                eventBus.changeAge(this.userAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
