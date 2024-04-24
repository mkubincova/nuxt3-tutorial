<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Nuxt tutorial</NuxtLink>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>

                </ul>
            </nav>
        </header>

        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut ullam cumque repudiandae laudantium dolore
            quisquam, illum quasi quia corrupti voluptates veritatis alias quos rem voluptatum error sapiente aliquid?
            Nesciunt!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut ullam cumque repudiandae laudantium dolore
            quisquam, illum quasi quia corrupti voluptates veritatis alias quos rem voluptatum error sapiente aliquid?
            Nesciunt!</p>
    </div>
</template>

<script setup>

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