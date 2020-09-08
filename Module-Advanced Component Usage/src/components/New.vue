<template>
    <div>
        <h3>New Quote</h3>
        <button @click='counter++'>Increase!</button>
        <p> {{ counter }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },

    //Watch the behavior to learn lifecycle hooks of dynamic loaded component 
    destroyed(){
        console.log('Destroyed');
    },
    deactivated() {
          console.log('deactivated');
    },
    activated() {
          console.log('activated');
    },
}
</script>

<style>
</style>
