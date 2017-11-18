var express = require('express');
var router = express.Router();
var BlogPost = require("blogpost");

// consts
// ------

const title = 'My Awesome Blorg!!!!!1!11!!1!.!';

// routes
// ------

router.get('/', home)
router.get("/posts/new", newPost);
router.post("/posts/new", createPost);
router.get("/posts/:id", viewPost);

// route handlers
// --------------

function home(req, res, next) {
  BlogPost.find((err, posts) => {
    if (err) { return next(err); }

    res.render('index', { 
      title,
      posts
    });
  });
};

function newPost(req, res, next){
  res.render("posts/create", {
    title
  });
}

function createPost(req, res, next){
  var post = new BlogPost(req.body);
  post.save((err) => {
    if (err) { return next(err); }
    res.redirect(`/posts/${post.id}`);
  });
}

function viewPost(req, res, next){
  var postId = req.params.id;
  BlogPost.findById(postId, (err, post) => {
    if (err) { return next(err); }
    if (!post){ 
      var notFound = new Error("Blorg Poast Not Found!");
      notFound.status = 400;
      return next(notFound);
    }

    res.render("posts/view", {
      title,
      post
    });
  });
}

// export
// ------

module.exports = router;
