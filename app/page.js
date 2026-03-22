'use client'

import { useState, useEffect } from 'react'
import { getShelves } from '@/services/api'
import Header from '@/components/Header'
import CategoryTabs from '@/components/CategoryTabs'
import ShelfRenderer from '@/components/ShelfRenderer'

function LoadingSkeleton() {
  return (
    <div className="px-4 py-4 space-y-6">
      <div className="w-full h-[300px] bg-zinc-800 rounded-lg animate-pulse" />
      <div>
        <div className="h-4 w-40 bg-zinc-800 rounded animate-pulse mb-3" />
        <div className="flex gap-3">
          <div className="min-w-[160px] h-[140px] bg-zinc-800 rounded-lg animate-pulse" />
          <div className="min-w-[160px] h-[140px] bg-zinc-800 rounded-lg animate-pulse" />
          <div className="min-w-[160px] h-[140px] bg-zinc-800 rounded-lg animate-pulse" />
        </div>
      </div>
      <div>
        <div className="h-4 w-40 bg-zinc-800 rounded animate-pulse mb-3" />
        <div className="grid grid-cols-2 gap-3">
          <div className="h-[160px] bg-zinc-800 rounded-lg animate-pulse" />
          <div className="h-[160px] bg-zinc-800 rounded-lg animate-pulse" />
          <div className="h-[160px] bg-zinc-800 rounded-lg animate-pulse" />
          <div className="h-[160px] bg-zinc-800 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [activePage, setActivePage] = useState(1)
  const [shelves, setShelves] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getShelves(activePage)
      .then(data => setShelves(data))
      .finally(() => setLoading(false))
  }, [activePage])

  return (
    // Projeto desenvolvido com foco em mobile-first
    // Para melhor experiência, acesse pelo celular ou use o modo responsivo do navegador
    <main className="w-full min-h-screen bg-black">
      <div className="max-w-md mx-auto">
        <Header />
        <CategoryTabs activePage={activePage} onSelect={setActivePage} />

        {loading ? (
          <LoadingSkeleton />
        ) : shelves.length === 0 ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-zinc-500 text-sm">Aguarde, conectando à API...</p>
          </div>
        ) : (
          <div className="pb-10">
            {shelves.map(shelf => (
              <ShelfRenderer key={shelf.id} shelf={shelf} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}