import type { ReactNode } from "react";
import Navbar from "./Navbar";

type childrenProps = {
  children: ReactNode;
}

export default function Layout({ children }: childrenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Navbar */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
