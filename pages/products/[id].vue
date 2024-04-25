<template>
    <div>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
    layout: 'products'
});

// fetch products
const { data: product } = await useFetch('https://fakestoreapi.com/products/' + id);
</script>

<style lang="scss" scoped></style>