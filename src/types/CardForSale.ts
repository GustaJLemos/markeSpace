import { ProductCategoryType } from "./ProductCategory"

export type CardForSaleType = {
  id: string,
  title: string,
  price: string,
  category: ProductCategoryType
}