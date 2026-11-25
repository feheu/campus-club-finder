import { useState } from 'react'
import { clubs } from '../data/clubs'
import ClubCard from '../components/ClubCard'

export default function Clubs() {
  const [sortOrder, setSortOrder] = useState('asc')
  const [view, setView] = useState('grid')

  const sortedClubs = [...clubs].sort((a, b) => {
    const comparison = a.name.localeCompare(b.name)
    return sortOrder === 'asc' ? comparison : -comparison
  })

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <header className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
          Campus Community
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Explore Clubs
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Discover communities, activities, and opportunities to make
          your university experience more exciting.
        </p>
      </header>

      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-zinc-400">
          Showing <span className="font-semibold text-white">{clubs.length}</span> clubs
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="sort" className="text-sm text-zinc-400">
            Sort:
          </label>

          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 text-sm outline-none focus:border-indigo-500"
          >
            <option value="asc">Name A-Z</option>
            <option value="desc">Name Z-A</option>
          </select>

          <div className="flex rounded-xl border border-white/10 bg-zinc-900 p-1">
            <button
              onClick={() => setView('grid')}
              aria-pressed={view === 'grid'}
              className={`rounded-lg px-4 py-2 text-sm ${
                view === 'grid'
                  ? 'bg-indigo-500 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Grid
            </button>

            <button
              onClick={() => setView('list')}
              aria-pressed={view === 'list'}
              className={`rounded-lg px-4 py-2 text-sm ${
                view === 'list'
                  ? 'bg-indigo-500 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <section
        className={
          view === 'grid'
            ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
            : 'flex flex-col gap-6'
        }
      >
        {sortedClubs.map((club) => (
          <ClubCard key={club.id} club={club} view={view} />
        ))}
      </section>
    </main>
  )
}
