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

      const sanitanizedEntries = entries.items.map((item, index) => {
        const itemCategories = item.fields.category.map((category) => {
          const { fields } = category;
          return { ...fields };
        });
        const image = item.fields.mainImage.fields.file.url;
        return {
          id: index,
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

  const getPost = async (id) => {
    try {
      const entries = await client.getEntries({
        content_type: "blogPost",
        select: "fields",
      });

      const filteredEntries = entries.items.filter((item, index) => {
        return parseInt(index) === parseInt(id);
      });

      const sanitanizedEntries = filteredEntries.map((item) => {
        const image = item.fields.mainImage.fields.file.url;
        return {
          ...item.fields,
          image,
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
