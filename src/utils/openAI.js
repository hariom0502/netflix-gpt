import OpenAI from 'openai';
import {OpenAI_Key} from "./constants"

const openai = new OpenAI({
  apiKey: OpenAI_Key ,
  dangerouslyAllowBrowser: true
  // defaults to process.env["OPENAI_API_KEY"]
});

export default  openai