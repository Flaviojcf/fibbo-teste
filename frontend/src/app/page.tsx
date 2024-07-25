'use client'
import {
  DashBoardPage,
  DashBoardPageHeader,
  DashBoardPageHeaderTitle,
  DashBoardPageMain,
} from '@/components/dashboard/page'
import { ProductDataTable } from './_components/product-data-table'
import { getProducts } from './actions'
import { useEffect, useState } from 'react'
import { Loading } from './_components/loading'
import { Product } from './interfaces'

export default function Home() {
  const [product, setProduct] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function getProduct() {
    try {
      const response = await getProducts()
      setProduct(response)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <DashBoardPage className="max-lg:h-full">
      <DashBoardPageHeader className="max-h-[49px] max-lg:justify-center">
        <DashBoardPageHeaderTitle className="dark:text-white">
          Produtos
        </DashBoardPageHeaderTitle>
      </DashBoardPageHeader>
      <DashBoardPageMain>
        {isLoading ? <Loading /> : <ProductDataTable data={product} />}
      </DashBoardPageMain>
    </DashBoardPage>
  )
}
