import { configureStore } from '@reduxjs/toolkit'
import { homeSlice } from './slices/home'
import { bannerSlice } from './slices/banners'
import { productSlice } from './slices/products'
import { articleSlice } from './slices/articles'

export const makeStore = () => {
  return configureStore({
    reducer: {
      home: homeSlice.reducer,
      banner: bannerSlice.reducer,
      product: productSlice.reducer,
      article: articleSlice.reducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']