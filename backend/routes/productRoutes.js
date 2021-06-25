import express from 'express'
const router = express.Router()
import {
  getProducts,
 getProductById,
} from '../controllers/productController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts)
// router.route('/:id/reviews').post(createProductReview)
// router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  // .delete(deleteProduct)
  // .put(updateProduct)

export default router