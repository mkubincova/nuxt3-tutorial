<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, sed rem veniam ullam in a! Dolore debitis
            inventore tenetur facere.</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
    layout: 'products'
});
</script>

<style lang="scss" scoped></style>