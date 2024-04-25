<template>
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut ullam cumque repudiandae laudantium dolore
            quisquam, illum quasi quia corrupti voluptates veritatis alias quos rem voluptatum error sapiente aliquid?
            Nesciunt!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut ullam cumque repudiandae laudantium dolore
            quisquam, illum quasi quia corrupti voluptates veritatis alias quos rem voluptatum error sapiente aliquid?
            Nesciunt!</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
// const { data } = await useFetch('/api/ninja?name=Mario');

// const { data } = await useFetch('/api/ninja?name=Mario', {
//     method: 'post',
//     body: { age: 30 }
// });

const { data } = await useFetch('/api/users/5');
console.log(data);
</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>