import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-8xl font-black text-indigo-400">404</p>

        <h1 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-4 text-zinc-400">
          Looks like this page doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}
