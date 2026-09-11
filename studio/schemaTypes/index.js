import siteSettings from './siteSettings'
import Footer from './components/Footer'
import linkField from './linkField'

import availability from './objects/availability'
import link from './objects/link'
import richText from './objects/richText'
import customImage from './objects/customImage'

import homePage from "./components/homePage";
import heroSection from "./documents/heroSection";
import cardsSection from "./documents/cardsSection";
import featuredWorkSection from "./documents/featuredWorkSection";
import animatedListSection from "./documents/animatedListSection";
import indexedGridSection from "./documents/indexedGridSection";
import accordionSection from "./documents/accordionSection";
import contentBlockSection from "./documents/contentBlockSection";


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
   
  // home page
  homePage,
  heroSection,
  cardsSection,
  featuredWorkSection,
  animatedListSection,
  indexedGridSection,
  accordionSection,
  contentBlockSection,
]
