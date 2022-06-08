import crypto from 'crypto'
import { NextFunction, Request, Response } from 'express'
import HttpException from '../exceptions/HttpException'

import ShortLink from '../models/shortLink.model'

export async function createShortLink (req: Request, res: Response, next:NextFunction) {
  if (!req.body.slug) {
    req.body.slug = crypto.randomBytes(5).toString('hex')
  }
  if (req.body.slug) {
    const shortLink = await ShortLink.findOne({ slug: req.body.slug })
    if (shortLink) {
      const err = new HttpException(400, 'slug must be unique')
      next(err)
    }
  }
  try {
    const newShortLink = await ShortLink.create(req.body)
    res.status(201)
    res.json(newShortLink)
  } catch (error) {
    next(error)
  }
}

export async function getShortLinks (req: Request, res:Response, next:NextFunction) {
  try {
    const shortLinks = await ShortLink.find()
    res.status(200)
    res.json(shortLinks)
  } catch (error) {
    next(error)
  }
}
