import { QueryParams } from 'airtable/lib/query_params'
import { Records } from 'airtable/lib/records'

const Airtable = require('airtable')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })

const base = airtable.base(process.env.AIRTABLE_BASE_ID)

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records: Records<any>) => {
  return records.map((record) => minifyRecord(record))
}

// gets the data we want and puts it into variables
const minifyRecord = (record: { id: string; fields: any }) => {
  return {
    id: record.id,
    fields: record.fields,
  }
}

async function getTable(table: string, params?: QueryParams<any>) {
  const records = await base(table).select(params).all()
  return getMinifiedRecords(records)
}

async function getAllPosts() {
  const records = await base('Blog')
    .select({
      filterByFormula: `OR({status} = "Published", {status} = "Draft")`,
    })
    .all()

  return getMinifiedRecords(records)
}

async function getAllNewsletters() {
  const records = await base('Newsletter')
    .select({
      filterByFormula: `{status} = "Published"`,
    })
    .all()

  return getMinifiedRecords(records)
}

async function getAllNewsletterPaths() {
  const newsletter = await getAllNewsletters()

  return newsletter.map((nl) => {
    return {
      params: {
        id: nl.id,
        slug: nl.fields.Slug,
      },
    }
  })
}

async function getAllPostsPaths() {
  const posts = await getAllPosts()

  return posts.map((post) => {
    return {
      params: {
        id: post.id,
        slug: post.fields.slug,
      },
    }
  })
}

async function getNewsletterData(slug: any) {
  const records = await base('Newsletter')
    .select({
      maxRecords: 1,
      filterByFormula: `{Slug} = "${slug}"`,
    })
    .all()

  return {
    newsletter: getMinifiedRecords(records),
  }
}

async function getPostData(slug: any) {
  const records = await base('Blog')
    .select({
      maxRecords: 1,
      filterByFormula: `{slug} = "${slug}"`,
    })
    .all()

  return {
    post: getMinifiedRecords(records),
  }
}

export {
  getTable,
  getAllPosts,
  getPostData,
  getAllPostsPaths,
  getNewsletterData,
  getAllNewsletterPaths,
  getAllNewsletters,
}
