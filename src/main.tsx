import App from "@/App"
import { AppProvider } from "@/AppProvider"
import { Fallback } from "@/Fallback"
import { RootUnAuthRouter } from "@/routes"
import "bulma/css/bulma.min.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { ErrorBoundary } from "react-error-boundary"
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom"
import "./index.scss"

const routes: RouteObject[] = [...RootUnAuthRouter]
const router = createBrowserRouter(routes, {})
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <ErrorBoundary
        FallbackComponent={Fallback}
        onReset={(details) => {
          console.log("ErrorBoundary", details)
        }}
      >
        <App>
          <RouterProvider router={router} />
        </App>
      </ErrorBoundary>
    </AppProvider>
  </React.StrictMode>,
)
