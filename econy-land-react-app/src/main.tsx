import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './root.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
