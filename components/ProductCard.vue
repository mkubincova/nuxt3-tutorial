<template>
    <div class="card text-center pb-5">
        <img :src="product.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`" class="btn">View details</NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style lang="scss" scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>