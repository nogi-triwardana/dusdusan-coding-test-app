import { configureStore } from '@reduxjs/toolkit'
import { homeSlice } from './slice/home/home.slice'
import { bannerSlice } from './slice/banners'
import { productSlice } from './slice/products'
import { articleSlice } from './slice/articles'

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