import axios from 'axios'
import { env } from 'process'

export const api = axios.create({
  baseURL: env.DATABASE_URL,
})
