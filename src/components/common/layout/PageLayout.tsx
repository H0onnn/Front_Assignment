import { ReactNode } from "react"
import { Header } from "./Header"

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="container mx-auto py-4 overflow-hidden">{children}</main>
    </div>
  )
}
