import Router from 'express';
import PostController from './PostController';

const router = Router()

router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)

router.get('/posts/nuxt', PostController.getNuxt)
router.get('/posts/perekrestok', PostController.getPerekrestok)
router.get('/posts/landing', PostController.getLanding)
router.get('/posts/mebel', PostController.getMebel)
router.get('/posts/mebelbest', PostController.getMebelbest)

router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router;