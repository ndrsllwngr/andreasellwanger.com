import Airtable from 'airtable';
import { QueryParams } from 'airtable/lib/query_params';
import { Records } from 'airtable/lib/records';

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });
const base = airtable.base(process.env.AIRTABLE_BASE_ID as string);

const getMinifiedRecords = (records: Records<never>) => {
  return records.map((record) => minifyRecord(record));
};

const minifyRecord = (record: { id: string; fields: never }) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

async function getTable(table: string, params?: QueryParams<never>) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const records = await base(table).select(params).all();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return getMinifiedRecords(records);
}

async function getAllPosts() {
  const records = await base('Blog')
    .select({
      filterByFormula: `OR({status} = "Published", {status} = "Draft")`,
    })
    .all();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return getMinifiedRecords(records);
}

async function getAllNewsletters() {
  const records = await base('Newsletter')
    .select({
      filterByFormula: `{status} = "Published"`,
    })
    .all();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return getMinifiedRecords(records);
}

async function getAllNewsletterPaths() {
  const newsletter = await getAllNewsletters();

  return newsletter.map((nl) => {
    return {
      params: {
        id: nl.id,
        slug: nl.fields['Slug'],
      },
    };
  });
}

export { getTable, getAllPosts, getAllNewsletterPaths, getAllNewsletters };
