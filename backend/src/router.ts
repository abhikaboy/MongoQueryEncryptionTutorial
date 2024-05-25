import express from 'express'
import helloWorldRoutes from './helloWorld/helloWordHandlers'
import authRoutes from './auth/authHandler'

const router = express.Router()

// this is a global route
router.get('/health', function(req, res) {
  res.sendStatus(200)
})

router.use('/helloWorld', helloWorldRoutes) // use routes from hello world component
router.use('/auth', authRoutes) // use routes from hello world component

export default router
