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
    return next(err)
  }

  try {
    await ShortLink.findOneAndUpdate({ slug: paramSlug }, req.body)
    res.status(200)
    return res.json(paramSlug)
  } catch (error) {
    return next(error)
  }
}

export async function getShortLinks (req: Request, res:Response, next:NextFunction) {
  try {
    const shortLinks = await ShortLink.find()
    res.status(200)
    return res.json(shortLinks)
  } catch (error) {
    return next(error)
  }
}

export async function handleRedirection (req: Request, res:Response, next:NextFunction) {
  const paramSlug = req.params.slug
  const isAndroid = !!req.get('User-Agent')?.match(/Android/)
  const isIos = !!req.get('User-Agent')?.match(/iPad/)

  const shortLink = await ShortLink.findOne({ slug: paramSlug })
  console.log(paramSlug)
  console.log(isAndroid)
  console.log(isIos)
  console.log(JSON.stringify(shortLink))

  if (shortLink) {
    if (isAndroid && shortLink.android.primary) {
      return res.redirect(shortLink.android.primary)
    } else if (isIos && shortLink.ios.primary) {
      return res.redirect(shortLink.ios.primary)
    } else {
      return res.redirect(shortLink.web)
    }
  } else {
    const err = new HttpException(404, 'short link not found')
    return next(err)
  }
}
