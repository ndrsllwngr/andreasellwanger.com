import path from 'path'
import { promises as fs } from 'fs'
import yaml from 'js-yaml'

export async function getSocialData() {
  try {
    //Find the absolute path of the json directory
    const dir = path.join(process.cwd(), 'data')
    //Read the yml data file social.yml
    const fileContents = await fs.readFile(dir + '/social.yml', 'utf8')
    const socialData = yaml.load(fileContents)
    return socialData
  } catch (e) {
    console.log(e)
    return null
  }
}
