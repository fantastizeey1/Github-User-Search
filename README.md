# GitHub User Search Application

This is a React application that allows users to search for GitHub profiles by username. It displays detailed user information including repositories, followers, and other profile details. The app supports light and dark themes.

## Features

- **GitHub User Search**: Search for any GitHub user by entering their username.
- **User Details Display**: View detailed information such as the user's name, bio, repositories, followers, and more.
- **Error Handling**: Displays appropriate error messages for invalid or non-existent usernames.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS.
- **Hover States**: Interactive elements like buttons and inputs have hover effects for better user experience.
- **System Theme Detection**: The app uses the user's system preferences (via `prefers-color-scheme`) to automatically apply the correct theme.

## Technology Stack

- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: For styling and responsive design.
- **Lucide React**: For icons.

## File Structure

```
src/
├── components/
│   ├── Header.tsx          // Header component with theme toggle
│   ├── SearchBar.tsx       // Search input and submit button
│   ├── UserCard.tsx        // Displays user details
│   ├── InfoItem.tsx        // Helper component for displaying user info
│   ├── Stat.tsx            // Component for displaying user stats
├── hooks/
│   ├── useDarkMode.ts      // Custom hook for dark mode handling
├── utils/
│   ├── searchUser.ts       // Utility function for API calls
│   ├── formatDate.ts       // Utility function for formatting dates
├── App.tsx                 // Entry point of the application
├── index.css               // Global styles
├── index.tsx               // Main render file
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fantastizeey1/Github-User-Search.git
   cd Github-User-Search
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at the URL provided by Vite (e.g., `http://localhost:5173`).

## Usage

1. Enter a GitHub username in the search bar.
2. Click the "Search" button or press `Enter`.
3. View the user's profile details if found, or see an error message if the user doesn't exist.
4. Toggle between light and dark modes using the switch in the header.
5. The app will automatically apply the theme based on your system preferences (light or dark mode).

## Components

### `Header`

- Displays the app title.
- Provides a toggle switch for light and dark mode.

### `SearchBar`

- Accepts the username input.
- Includes a search button with a loading state.

### `UserCard`

- Displays the fetched user data, such as:
  - Avatar
  - Name
  - Bio
  - Location
  - Repositories
  - Followers and following counts

### `InfoItem`

- A reusable component for displaying individual user details like location, company, or blog.

### `Stat`

- Displays user statistics such as repository count, followers, and following in a styled format.

## Custom Hooks

### `useDarkMode`

- Handles the state and functionality of the light/dark theme toggle.
- Saves the user's theme preference in local storage.
- Automatically applies the theme based on the user's system preferences.

## API Integration

The app uses the GitHub Users API to fetch user data. Replace the API utility (`searchUser.ts`) with your API logic if needed.

**Example API Call in `searchUser.ts`:**

```ts
export const searchGitHubUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  return response.json();
};
```

## Styling

- Tailwind CSS is used for styling.
- Light and dark themes are managed using conditional class names.
- The app automatically applies the user's system theme preference via the `prefers-color-scheme` media query.

## Deployment

1. Build the app:

   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider (e.g., Netlify, Vercel, GitHub Pages).

## Future Enhancements

- Add debouncing to the search input to prevent excessive API calls.
- Display additional user details like starred repositories.
- Improve accessibility by enhancing keyboard navigation and adding ARIA roles.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

Enjoy searching GitHub profiles! 😊
