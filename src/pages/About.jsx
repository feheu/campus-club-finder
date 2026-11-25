export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
          About the Project
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About Campus Club Finder
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Campus Club Finder is a web application designed to help
          university students discover student organizations, explore
          their activities, and join clubs that match their interests.
        </p>

        <p className="mt-6 leading-8 text-zinc-400">
          The application provides an easy way for students to browse
          clubs, view club information, discover upcoming events, and
          save their memberships directly in their browser.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Technology Stack</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: 'Vite',
              description: 'Development server and build tool.',
            },
            {
              name: 'React',
              description: 'Component-based UI development.',
            },
            {
              name: 'React Router',
              description: 'Navigation between application pages.',
            },
            {
              name: 'Tailwind CSS',
              description: 'Utility-based responsive styling.',
            },
          ].map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-6"
            >
              <h3 className="text-lg font-bold text-indigo-400">
                {tech.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-white/10 bg-zinc-900 p-6">
        <h2 className="text-xl font-bold">Data Storage</h2>

        <p className="mt-4 leading-7 text-zinc-400">
          Campus Club Finder does not use a backend server or database.
          Club membership information is stored locally in the
          browser using localStorage.
        </p>
      </section>
    </main>
  )
}
