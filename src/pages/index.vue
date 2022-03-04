<template>
    This is index vue
    <RouterLink to="/about">about.vue</RouterLink>
</template>

<route lang="json4">
{
    name:'Debasish',
    meta:{
        type:'Description',
        description:'This is mainly index.vue'
    },
    props:false
}
</route>
<script lang="ts" setup>
import {RouterLink} from 'vue-router'
</script>
