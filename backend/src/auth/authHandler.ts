import { Router, Request, Response } from 'express'

const router = Router()

// path is /auth/register
router.get('/register', (req, res) => {
  console.log(req.body)
})

// path is /auth/login
router.get('/login', (req, res) => {})

// path is /auth
router.get('/', (req, res) => res.status(200).json({ message: 'Auth route' }))

export default router
