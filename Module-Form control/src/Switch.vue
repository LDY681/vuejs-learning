<template>

<!-- 
    v-model basically has two features:
    bind value and react to input event
    so v-model="dataSwitch" means
        :value="dataSwitch"
        @input="dataSwitch = $event.target.value" 
    thus to create a custom form control,
    we need not only v-model to bind a variable, 
    but also event handler to emit input changes
-->

    <div>
        <div
                id="on"
                @click="switched(true)"
                :class="{active: value}">On</div>
        <div
                id="off"
                @click="switched(false)"
                :class="{active: !value}">Off</div>
    </div>
</template>

<script>
    export default {
        props: ['value'],   //:value ="dataSwitch" in parent
        methods: {
            switched(isOn){
                this.$emit('input', isOn);
            }
        },
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: lightgreen;
    }

    #off:hover, #off.active {
        background-color: lightcoral;
    }
</style>