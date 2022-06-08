
import { object, string } from 'yup'

export default object({
  body: object({
    slug: string(),
    web: string().url().required(),
    android: object({ primary: string().url(), fallback: string().url() }),
    ios: object({ primary: string().url(), fallback: string().url() })

  })
})
