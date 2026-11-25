import { Link } from 'react-router'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Discover your campus community
          </div>

          <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
            Find your people.
            <span className="block text-indigo-400">
              Find your passion.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Discover student clubs, explore new interests, meet like-minded
            people, and make your university experience unforgettable.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/clubs"
              className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
            >
              Explore Clubs →
            </Link>

            <Link
              to="/about"
              className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-zinc-300 transition hover:bg-white/5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 pb-20 sm:grid-cols-3">
        {[
          {
            icon: '🎯',
            title: 'Explore Interests',
            description: 'Find activities that match your interests and passions.',
          },
          {
            icon: '🤝',
            title: 'Meet People',
            description: 'Connect with students who share similar interests.',
          },
          {
            icon: '🚀',
            title: 'Grow Together',
            description: 'Learn new skills and create unforgettable experiences.',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-6"
          >
            <div className="mb-4 text-3xl">{item.icon}</div>
            <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
            <p className="text-sm leading-6 text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}
