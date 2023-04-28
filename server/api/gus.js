export default defineEventHandler(async (event) => {
  //   const { name } = getQuery(event);
  //   const { age } = await readBody(event);
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=bptDdMXBjYwT7Ct06pjUL20FyEK3S3nveEmTnLOm"
  );
  return data;
});
