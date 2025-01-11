import OpenAI from 'openai';
import { OPEN_AI_API_KEY  } from './constants';

export const openai = new OpenAI({
  apiKey: OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});