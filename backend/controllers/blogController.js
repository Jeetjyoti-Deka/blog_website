import blogs from "../data/blogs.js";

const getAllBlogs = (req, res) => {
  res.json(blogs);
};
const getSingleBlog = (req, res) => {
  res.send("Get Single Blogs");
};
const createBlog = (req, res) => {
  res.send("Create Blog");
};
const updateBlog = (req, res) => {
  res.send("Update Blog");
};
const deleteBlog = (req, res) => {
  res.send("Delete Blog");
};

export { getAllBlogs, getSingleBlog, createBlog, updateBlog, deleteBlog };
