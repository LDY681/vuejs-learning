<template>
    <li
            class="list-group-item"
            style="cursor: pointer"
            @click="serverSelected">
        Server #{{ myServer.id }}
    </li>
</template>

<script>
    import { serverBus } from '../../main';

    export default {
        props: ['myServer'],
        methods: {
            serverSelected() {
                serverBus.$emit('serverSelected', this.myServer);
            }
        }
    }
</script>

<style>

</style>
