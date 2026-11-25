# Campus Club Finder – Application Documentation

## 1. Introduction

Campus Club Finder is a single-page web application designed to help university students discover, explore, and join student clubs. The application provides information about clubs, their descriptions, and upcoming events.

The application was developed using Vite, React, React Router, and Tailwind CSS. Club membership data is stored locally using the browser's localStorage.

## 2. Project Setup

The application was created using Vite with the React JavaScript template.

### Technologies Used
- Vite – Development server and build tool.
- React – UI development using functional components and Hooks.
- React Router – Navigation between pages.
- Tailwind CSS – Responsive styling.
- localStorage – Persistent club membership storage.

### Installation and Execution

1. Install Node.js.
2. Create the project using Vite.
3. Install the required dependencies.
4. Run the development server using `npm run dev`.
5. Open the application in a browser.

## 3. Application Pages and Features

### 3.1 Home Page

The Home page introduces the Campus Club Finder application and provides a welcome message, a hero section, and a button that navigates users to the Club List page.

**Screenshot:** Insert Home page screenshot here.

### 3.2 Club List Page

The Club List page displays all five predefined student clubs as cards.

Features:
- Displays all five clubs.
- Sorting clubs alphabetically from A–Z.
- Sorting clubs alphabetically from Z–A.
- Toggle between Grid View and List View.
- View Details navigation to the respective Club Detail page.

**Screenshot:** Insert Club List Grid View screenshot here.

**Screenshot:** Insert Club List List View screenshot here.

**Screenshot:** Insert sorting A–Z screenshot here.

**Screenshot:** Insert sorting Z–A screenshot here.

### 3.3 Club Detail Page

The Club Detail page displays detailed information about a selected club.

Features:
- Club name.
- Club image.
- Full club description.
- Upcoming events.
- Join Club button.

When a user joins a club, the application saves the club ID in localStorage. The button then changes to indicate that the user has joined the club.

**Screenshot:** Insert Club Detail screenshot here.

**Screenshot:** Insert Joined Club screenshot here.

### 3.4 Club Membership Persistence

Club membership data is stored in localStorage. This allows the joined status to remain available when the user refreshes or revisits the club page in the same browser.

**Screenshot:** Insert screenshot showing joined status after refreshing here.

### 3.5 About Page

The About page explains the purpose of the application, the technologies used, and how the application stores its data.

**Screenshot:** Insert About page screenshot here.

### 3.6 Not Found Page (404)

The application provides a friendly Not Found page when users navigate to an invalid URL. The page includes a button that allows users to return to the Home page.

**Screenshot:** Insert 404 page screenshot here.

## 4. Responsive Design

The application is designed to support mobile, tablet, and desktop screen sizes. The layout adapts to different screen widths, including the club cards, navigation, and page content.

**Screenshot:** Insert mobile responsive screenshot here.

## 5. Data Storage

The application does not use a backend server or external database.

Club information is predefined in a separate data file, while joined club IDs are stored in the browser's localStorage.

Example of stored data:

`["robotics", "music"]`

## 6. Conclusion

Campus Club Finder provides a simple and responsive platform for students to explore student organizations, learn about their activities, and join clubs. The application implements React functional components, Hooks, routing, sorting, view toggling, and persistent browser storage.