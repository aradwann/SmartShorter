import crypto from 'crypto'
import { NextFunction, Request, Response } from 'express'
import HttpException from '../exceptions/HttpException'

import ShortLink from '../models/shortLink.model'

export async function createShortLink (req: Request, res: Response, next:NextFunction) {
  if (!req.body.slug) {
    req.body.slug = crypto.randomBytes(5).toString('hex')
  } else {
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

export async function updateShortLink (req: Request, res: Response, next:NextFunction) {
  const paramSlug = req.params.slug
  const bodySlug = req.body.slug

  if (bodySlug && (bodySlug !== paramSlug)) {
    const err = new HttpException(400, 'slug cannot be updated')
    next(err)
  }

  const shortLink = await ShortLink.findOne({ slug: paramSlug })
  if (!shortLink) {
    const err = new HttpException(404, 'short link not found')
    next(err)
  }

  try {
    const newShortLink = await ShortLink.updateOne(req.body)
    res.status(200)
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
