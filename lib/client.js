import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "0csqyoyn",
    dataset: 'production',
    apiVersion: "2022-08-23",
    useCdn:true,
    token:
    "sk7rJ8H3AyJu23P8rBaKPnub8deO5Ensew9nfqhsNjnKCKETj8X7sTdKIiNyG6sgjRlFvFmPbrTFmBDhS8Z7eHN1VJJaj4v7Fjwnzdb8wb7jqGHOpN3WlBkVqfsoA1jlWo1EJF2um7yQQTfJwXROtyT3YfTjDHkC8hteKtcb5xnbSYvKttZq"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
