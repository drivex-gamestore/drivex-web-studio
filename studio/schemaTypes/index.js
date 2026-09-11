import siteSettings from './siteSettings'
import Footer from './components/Footer'
import linkField from './linkField'

// Object Schemas
import availability from './objects/availability'
import link from './objects/link'
import richText from './objects/richText'
import customImage from './objects/customImage'

export const schemaTypes = [
  // Document types
  siteSettings,
  Footer,
  linkField,

  // Object types
  availability,
  link,
  richText,
  customImage,
]
