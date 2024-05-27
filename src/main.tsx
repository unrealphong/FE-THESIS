import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom"
import { AppProvider } from "./AppProvider.tsx"
import { UnAuthRouter } from "./routes/root-router.tsx"
import { store } from "./store/store.ts"
import { Provider } from "react-redux"
const routes: RouteObject[] = [...UnAuthRouter]
const router = createBrowserRouter(routes, {})
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App>
          <RouterProvider router={router} />
        </App>
      </AppProvider>
    </Provider>
  </React.StrictMode>,
)
