<template>
    <div>
    {{msg}}
    start 
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                msg:'start'
            }
        },
        mounted:function(){
            console.log("i'm mounted");
        }
    }
</script>

<style>
   div{
    font-size: .16rem;
   }
</style>