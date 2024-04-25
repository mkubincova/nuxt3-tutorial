export default defineEventHandler(async (event) => {

    const { id } = event.context.params; // route parameter
    const { dummyUrl } = useRuntimeConfig(); // environment variable

    const data = await $fetch(`${dummyUrl}/users/${id}`);

    return data;
});