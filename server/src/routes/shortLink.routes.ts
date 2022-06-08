import { Router } from 'express'
import { createShortLink, getShortLinks } from '../controllers/shortLink.controller'

const router = Router()

router
  .route('/')
  .post(createShortLink)
  .get(getShortLinks)

export default router
