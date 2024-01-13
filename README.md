<!-- @format -->

# Netflix-GPT Project

## Overview

Netflix-GPT is a cutting-edge web application that merges Netflix's movie streaming service with GPT's advanced recommendation algorithms. This project offers a responsive user interface and integrates with Firebase and TMDB API for robust authentication and movie data access.

## Getting Started

- Run npx create-react-app netflix-gpt
- Configure TailwindCSS for styling(for create React app).

1. **Initialize Project:**

   - Setup React project.
   - Configure TailwindCSS for styling.
   - Implement routing using `react-router-dom`.

2. **Develop Core Components:**

   - Create a Header component.
   - Develop Login and Sign Up forms with validation.
   - Utilize useRef hook for form handling.

3. **Integrate Firebase:**

   - Setup Firebase for backend services.
   - Implement Sign Up, Sign In, and Sign Out functionalities.
   - Address authentication and redirection-related bugs.

4. **Redux Store:**

   - Create and configure Redux store.
   - Develop custom hooks for movie data fetching.
   - Implement movie slice for state management.

5. **TMDB API:**

   - Register and configure TMDB API.
   - Fetch currently playing movies.
   - Implement movie trailer display functionality.

6. **Develop Application Features:**

   - Create secondary components.
   - Develop a multi-language support search component.
   - Integrate GPT API for enhanced movie recommendations.
   - Fetch and display GPT search data and TMDB suggestions.
   - Apply memoization for optimization.
   - Reuse MovieList component for search results display.

7. **Deployment:**
   - Deploy the application to a production environment.

## Features

- **Authentication:** Sign In/Sign Up functionality with a redirect to the browse page upon successful login.
- **Browse Page:** Accessible post-authentication, featuring a main movie, trailer, title, description, and movie suggestions.
- **NetflixGPT:** Includes a search bar for movie queries and GPT-powered movie suggestions.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Redux](https://redux.js.org/) - State Management
- [Firebase](https://firebase.google.com/) - Backend and Authentication
- [TMDB API](https://www.themoviedb.org/documentation/api) - Movie Data

## Authors

- **[SaiNikhilReddy]** - _Initial work_ - [YourGitHubProfile](https://github.com/nikhil3009)
