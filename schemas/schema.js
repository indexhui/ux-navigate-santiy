// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import website from './website' // import the file you just made
import portfolio from './portfolio'
import author from './author'
import industry from './industry'
import colorStyle from './colorStyle'
import tagWebsite from './tagWebsite'
import tag from './tag'
import book from './book'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    website,
    author,
    portfolio,
    colorStyle,
    tagWebsite,
    industry, // add the document type to this array
    tag,
    book,
  ]),
})
