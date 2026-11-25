import { Link } from 'react-router'

export default function ClubCard({ club, view }) {
  const isGrid = view === 'grid'

  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition duration-300 hover:border-indigo-500/40 hover:-translate-y-1 ${
        isGrid ? '' : 'flex flex-col sm:flex-row'
      }`}
    >
      <div
        className={`overflow-hidden ${
          isGrid ? 'h-52' : 'h-52 sm:h-auto sm:w-72 sm:shrink-0'
        }`}
      >
        <img
          src={club.image}
          alt={club.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3 className="mb-2 text-xl font-bold">{club.name}</h3>
          <p className="text-sm leading-6 text-zinc-400">
            {club.shortDescription}
          </p>
        </div>

        <Link
          to={`/clubs/${club.id}`}
          className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-indigo-400 transition hover:text-indigo-300"
        >
          View Details
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
