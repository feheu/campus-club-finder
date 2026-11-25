import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { clubs } from '../data/clubs'

export default function ClubDetail() {
  const { clubId } = useParams()

  const club = clubs.find((item) => item.id === clubId)

  const [joinedClubs, setJoinedClubs] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('joinedClubs')) || []
    } catch {
      return []
    }
  })

  if (!club) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-3xl font-bold">Club Not Found</h1>
        <p className="mt-4 text-zinc-400">
          We couldn't find the club you're looking for.
        </p>
        <Link
          to="/clubs"
          className="mt-6 inline-block rounded-xl bg-indigo-500 px-6 py-3 font-semibold"
        >
          Back to Clubs
        </Link>
      </main>
    )
  }

  const isJoined = joinedClubs.includes(club.id)

  function handleJoin() {
    if (isJoined) return

    const updatedJoinedClubs = [...joinedClubs, club.id]

    setJoinedClubs(updatedJoinedClubs)
    localStorage.setItem(
      'joinedClubs',
      JSON.stringify(updatedJoinedClubs)
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <Link
        to="/clubs"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
      >
        ← Back to Clubs
      </Link>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
        <div className="h-64 sm:h-96">
          <img
            src={club.image}
            alt={club.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                Student Organization
              </p>

              <h1 className="text-4xl font-bold tracking-tight">
                {club.name}
              </h1>

              <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
                {club.description}
              </p>
            </div>

            <button
              onClick={handleJoin}
              disabled={isJoined}
              className={`shrink-0 rounded-xl px-6 py-3 font-semibold transition ${
                isJoined
                  ? 'cursor-not-allowed border border-green-500/30 bg-green-500/10 text-green-400'
                  : 'bg-indigo-500 text-white hover:bg-indigo-400'
              }`}
            >
              {isJoined ? '✓ You have joined this club!' : 'Join Club'}
            </button>
          </div>

          <section className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">
              Upcoming Events
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {club.events.map((event, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-zinc-950 p-5"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-400">
                    Upcoming Event
                  </div>

                  <h3 className="text-lg font-semibold">
                    {event.name}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    📅 {event.date}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
