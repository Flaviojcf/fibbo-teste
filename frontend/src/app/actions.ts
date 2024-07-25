'use server'

import { api } from '@/api/api'
import axios from 'axios'

interface ErrorResponse {
  title: string
  status: number
  errors: { message: string }[]
}
interface CreateProductFormData {
  name: string
  description: string
  price: number
}

interface UpdateProductFormData {
  name: string
  description: string
  price: number
}

export async function getProducts() {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (err) {
    if (axios.isAxiosError(err) && err.response && err.response.data) {
      const errorResponse: ErrorResponse = err.response.data
      console.error(errorResponse.errors[0].message)
      return errorResponse
    } else {
      throw err
    }
  }
}

export async function createProduct(data: CreateProductFormData) {
  try {
    const response = await api.post('/product', data)
    return response.data
  } catch (err) {
    if (axios.isAxiosError(err) && err.response && err.response.data) {
      const errorResponse: ErrorResponse = err.response.data
      console.error(errorResponse.errors[0].message)
      return errorResponse
    } else {
      throw err
    }
  }
}

export async function deleteProduct(Id: string) {
  try {
    await api.delete(`/product/${Id}`)

    return getProducts()
  } catch (err) {
    if (axios.isAxiosError(err) && err.response && err.response.data) {
      const errorResponse: ErrorResponse = err.response.data
      console.error(errorResponse.errors[0].message)
      return errorResponse
    } else {
      throw err
    }
  }
}

export async function updateProduct(Id: string, data: UpdateProductFormData) {
  try {
    await api.put(`/product/${Id}`, data)

    return getProducts()
  } catch (err) {
    if (axios.isAxiosError(err) && err.response && err.response.data) {
      const errorResponse: ErrorResponse = err.response.data
      console.error(errorResponse.errors[0].message)
      return errorResponse
    } else {
      throw err
    }
  }
}
