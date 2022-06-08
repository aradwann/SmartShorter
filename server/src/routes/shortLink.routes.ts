import { Router } from 'express'
import { createShortLink, getShortLinks } from '../controllers/shortLink.controller'
import validateResource from '../middleware/resourceValidation.middleware'
import shortLinkSchema from '../schemas/shortLink.schema'

const router = Router()

router
  .route('/')
  .post(validateResource(shortLinkSchema), createShortLink)
  .get(getShortLinks)

export default router
