const router = require('express').Router();
const sequelize = require('../../config/connection');
const Blog = require('../../models/Blog');

// GET all blog posts 
router.get('/', async (req, res) => {

  const blogData = await Blog.findAll({});
  console.log(blogData);

  const blogs = blogData.map((blog) => blog.get({plain:true}));

  return res.render('all', { blogs: blogs});
  
});


//Need to figure out how I link the ability to create, update, delete to only specific user's posts!!!!!!!!!!!!


// CREATE a new blog post
router.post('/', (req, res) => {
  Blog.create(req.body)
  .then((newBlog) => {
    res.json(newBlog);
  })
  .catch((err) => {
    res.json(err);
  })
});


// UPDATE a blog post 
router.put('/:id', (req, res) => {
  Blog.update({
    title: req.body.title,
    content: req.body.content
  },
  {
    where: {
      id: req.params.id,
    }
  }
  )
  .then((updatedBlog) => {
    res.json(updatedBlog);
  })
  .catch((err) => res.json(err));
});


// DELETE a blog post
router.delete('/:id', (req, res) => {
  Blog.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then((deletedBlog) => {
    res.json(deletedBlog)
  })
  .catch((err) => res.json(err));
});


module.exports = router;
