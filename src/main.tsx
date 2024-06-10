import App from "@/App"
import { AppProvider } from "@/AppProvider"
import { Fallback } from "@/Fallback"
import "@/index.scss"
import { RootAuthRouter, RootUnAuthRouter } from "@/routes"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { ErrorBoundary } from "react-error-boundary"
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const routes: RouteObject[] = [...RootUnAuthRouter, ...RootAuthRouter]
const router = createBrowserRouter(routes, {})
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
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
  </StrictMode>,
)
