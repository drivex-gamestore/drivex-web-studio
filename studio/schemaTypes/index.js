// Document & Component Schemas
import siteSettings from './siteSettings'
import Footer from './components/Footer'
import linkField from './linkField'

// Object Schemas
import availability from './object/availability'
import asciiArtFields from './object/asciiArtFields'
import link from './object/link'
import richText from './object/richText'

export const schemaTypes = [
  // Document types
  siteSettings,
  Footer,
  linkField,

  // Object types
  availability,
  asciiArtFields,
  link,
  richText,
]
