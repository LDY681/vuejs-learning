<template>
    <div>
        <!--slot will pass down the data that's inside the template
         from the parent and render it in child component

            <appQuote>  //the template
                <h2>The Quote</h2>  //what slot will render
                <p>A wonderful Quote</p> //what slot will render
            </appQuote>

            slot only takes the styling of the child component, but everything besides,
            parent does the changes, e.g. {{quoteTitle}}
        -->
        <div class='title'>
            <slot name='title'></slot>  
            <!-- THe text between slot are default text when no content is assigned, 
            if assigned, the content will get overwritten -->
            <span sytle='color: #ccc'><slot name='subtitle'>The Subtitle</slot></span>
        </div>
        <hr>
        <div>
            <slot></slot>  
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div {
        border: 1px solid #cccccc;
        box-shadow: 1px 1px 2px black;
        padding: 20px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color: red; 
    }
    
    .title {
        font-style: italic;
    }
</style>
