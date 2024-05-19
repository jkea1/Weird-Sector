import express from 'express'
import * as postController from '../controller/post.js'

const router = express.Router()

// default = /posts
// GET /posts
// GET /posts?category=:category
router.get('/', postController.getPosts)

// GET /posts/:id
router.get('/:id', postController.getPost)

// POST /posts
router.post('/', postController.createPost)

// PUT /posts/:id
router.put('/:id', postController.updatePost)

// DELETE /posts/:id
router.delete('/:id', postController.deletePost)

export default router
