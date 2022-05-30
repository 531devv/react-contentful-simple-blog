import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "y0pcq4bx31f2",
    accessToken: "4RYsvPDo36si31T0D-4l9mwETEaPF0_y255znm9vumc",
    host: "preview.contentful.com",
  });

  const getPosts = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "blogPost",
        select: "fields",
      });

      const sanitanizedEntries = entries.items.map((item, index) => {
        const image = item.fields.mainImage.fields.file.url;
        return {
          id: index,
          ...item.fields,
          image,
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

      const sanitanizedEntries = entries.items.filter((item, index) => {
        return parseInt(index) === parseInt(id);
      });

      const postData = sanitanizedEntries.map((item) => {
        const image = item.fields.mainImage.fields.file.url;
        return {
          ...item.fields,
          image,
        };
      });
      return postData;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getPosts, getPost };
};

export default useContentful;
