import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_TOKEN,
    host: process.env.REACT_APP_CONTENTFUL_HOST,
  });

  const getPosts = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "blogPost",
        select: "fields",
      });

      const sanitanizedEntries = entries.items.map((item) => {
        const itemCategories = item.fields.category.map((category) => {
          const { fields } = category;
          return { ...fields };
        });
        const image = item.fields.mainImage.fields.file.url;
        return {
          ...item.fields,
          image,
          categories: itemCategories,
        };
      });

      return sanitanizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  const getPost = async (slug) => {
    try {
      const entry = await client.getEntries({
        content_type: "blogPost",
        "fields.slug[in]": slug,
        select: "fields",
        limit: 1,
      });

      const sanitanizedEntries = entry.items.map((item) => {
        const itemCategories = item.fields.category.map((category) => {
          const { fields } = category;
          return { ...fields };
        });
        const image = item.fields.mainImage.fields.file.url;
        return {
          ...item.fields,
          image,
          categories: itemCategories,
        };
      });

      return sanitanizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getPosts, getPost };
};

export default useContentful;
