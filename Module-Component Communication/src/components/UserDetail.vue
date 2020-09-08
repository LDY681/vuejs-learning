<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{ myName }}</p>
        <p>Switch Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName"> Reset Name w/ Custom Event</button>
        <button @click="resetFn()"> Reset Name w/ Callback</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
    export default {
        props:  {
            myName: {
                type: String,
                //required: true,
                //default: 'Max'
            }, //data validation to make sure myName can only be str and is required
            resetFn: Function,
            userAge: Number
        },
        //props:  [myName] props as an array without data validation
        methods: {
            switchName(){
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                this.myName = 'Max'; //Keep in mind we only change myName in child, name in parent isn't changed
                this.$emit('nameWasReset', this.myName);   //emit a custom event to parent
            }
        },
        created() {
            //register the listener at creation stage
            eventBus.$on('ageWasEdited', (age) =>{
              this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
