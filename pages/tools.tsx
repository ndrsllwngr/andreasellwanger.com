import { useEffect } from 'react'

import { getTable } from '@/lib/airtable'

const Tools = ({ tools }: { tools: Array<Tool> }) => {
  useEffect(() => {
    console.log({ tools })
  }, [tools])

  return (
    <div className={'text-white'}>
      {tools.map((tool: any) => (
        <div key={tool.id}>{tool.fields.Name}</div>
      ))}
    </div>
  )
}

type Tool = {
  id: string
  fields: {
    Description: string
    ID: number
    Link: string
    Name: string
    Platform: Array<string>
  }
}

export async function getStaticProps() {
  const tools: Array<Tool> = await getTable('Tools')

  return {
    props: {
      tools,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 600, // In seconds
  }
}

export default Tools
