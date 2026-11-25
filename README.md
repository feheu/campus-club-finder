
# Campus Club Finder

A responsive single-page web application that helps university students discover, explore, and join student clubs.

## Tech Stack

- Vite
- React
- React Router v7
- Tailwind CSS v4
- localStorage

## Features

- Browse 5 predefined student clubs.
- View club details and upcoming events.
- Join clubs.
- Persist club memberships using localStorage.
- Sort clubs alphabetically (A-Z and Z-A).
- Toggle between Grid View and List View.
- Responsive layout for mobile, tablet, and desktop.
- Navigation with active route highlighting.
- 404 Not Found page.

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd campus-club-finder
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/clubs` | Club List |
| `/clubs/:clubId` | Club Detail |
| `/about` | About |
| `*` | 404 Not Found |

## Storage

The application uses browser localStorage to store joined club IDs.

No backend or authentication is required.

## Development

Built as a single-page application using React functional components and Hooks.
