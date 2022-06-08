import mongoose, { Schema } from 'mongoose'

interface IMobileLink {
  primary: string;
  fallback: string;
}

const mobileLinkSchema = new Schema<IMobileLink>({
  primary: { type: String },
  fallback: { type: String }

})

// 1. Create an interface representing a document in MongoDB.
interface IShortLink {
  slug: string;
  ios: IMobileLink;
  android:IMobileLink;
  web: string
}

// 2. Create a Schema corresponding to the document interface.
const ShortLinkSchema = new Schema<IShortLink>({
  slug: { type: String, unique: true },
  ios: mobileLinkSchema,
  android: mobileLinkSchema,
  web: { type: String, required: true }

}, { timestamps: true })

const ShortLink = mongoose.model('ShortLink', ShortLinkSchema)

export default ShortLink
