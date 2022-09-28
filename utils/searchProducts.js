import Fuse from "fuse.js";

export const searchProducts = ({ products, query }) => {
  // console.log("products in search", products);
  // console.log("query in search", query);
  const options = {
    relevanceThreshold: 0.5,
    keys: ["content.title"],
  };

  // let searchItems = new Fuse(products, options)
  //   .search(String(query))
  //   .filter((result) => typeof result.item !== "undefined")
  //   .map((result) => result.item);

  // console.log("returned search items", searchItems);
  return new Fuse(products, options)
    .search(String(query))
    .filter((result) => typeof result.item !== "undefined")
    .map((result) => result.item);
};
