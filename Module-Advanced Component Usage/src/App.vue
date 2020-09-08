<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="componentSelected = 'appQuote'">Quote</button>
                <button @click="componentSelected = 'appAuthor'">Author</button>
                <button @click="componentSelected = 'appNew'">New</button>
                <hr>

                <!-- dynamic loaded component 
                    component get switched out will be destroyed and recreated when being selected agains
                    we can use keep-alive to keep component alive
                -->
                <keep-alive>
                    <component :is="componentSelected">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                
                <!-- slot usage, check quote.vue -->
               <!-- <appQuote>
                    <h2 slot='title'>{{quoteTitle}}</h2>
                    <p slot='content'>A wonderful Quote</p>
               </appQuote> -->
               
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import New from './components/New.vue'
    export default {
        data(){
            return {
                quoteTitle: 'The Quote',
                componentSelected: 'appQuote'
            };
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New,
        }
    }
</script>

<style>
</style>
