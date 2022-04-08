// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import spaceImport from 'contentful-import';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const exportFile = require('./export.json');

const [CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN] = process.argv.slice(2);

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_MANAGEMENT_TOKEN) {
  throw new Error(
    [
      'Parameters missing...',
      'Please run the setup command as follows',
      'CONTENTFUL_SPACE_ID=XXX CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-XXX npm run setup',
    ].join('\n')
  );
}

spaceImport({
  spaceId: CONTENTFUL_SPACE_ID,
  managementToken: CONTENTFUL_MANAGEMENT_TOKEN,
  content: exportFile,
})
  .then(() => console.log('The content model of your space is set up!'))
  .catch((e: any) => console.error(e));
