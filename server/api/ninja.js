export default defineEventHandler(async (event) => {
    // query params
    const { name } = getQuery(event);

    // post data
    const { age } = await readBody(event);

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=eJdPhICJUDBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2');

    return {
        message: `Hello there, ${name} - ${age} years old`,
        data: data
    };
});