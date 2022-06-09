import { Router } from 'express'
import { createShortLink, getShortLinks, updateShortLink, handleRedirection } from '../controllers/shortLink.controller'
import validateResource from '../middleware/resourceValidation.middleware'
import shortLinkSchema from '../schemas/shortLink.schema'

const router = Router()

router
  .route('/')
  .post(validateResource(shortLinkSchema), createShortLink)
  .get(getShortLinks)

router
  .route('/:slug')
  .put(updateShortLink)
  .get(handleRedirection)

export default router
