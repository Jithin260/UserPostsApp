# UsersPostsApp

This is a React Native app built using **Expo**, **Redux**, **Saga**, **React Navigation**, **TypeScript**, and **Ignite CLI**. The app fetches data from the [DummyJson API](https://dummyjson.com/) to display a list of users and posts in a clean and responsive UI. It also implements features like infinite scrolling, loading indicators, and clean state management with Redux and Saga.

## Features

1. **User List Screen**:
   - Displays a list of users fetched from the DummyJson API.
   - Users are rendered in cards with basic details like name, email, phone number, company and address.
   - Infinite scrolling is implemented to load more users as you scroll down.
   - Includes loading indicators for smoother UX.
  
2. **User Posts Screen**:
   - Displays a list of posts for a selected user.
   - Posts are fetched from the API and displayed in a scrollable list.
   - Infinite scrolling is implemented to load more posts as you scroll down.
   - Includes loading indicators while fetching posts.

## Project Structure

├── components/                  # Reusable UI components
│   ├── HeaderComponent.tsx      # Header component for screens
│   ├── Loader.tsx               # Loader component for showing loading states
│   ├── EmptyComponent.tsx       # Component to show when list is empty
│   └── UserCard.tsx             # Component to render individual user
|   └── PostCard.tsx             # Component to render individual post
|
├── constants/                   # Application constants
│   ├── colors/                  # Theme colors
│   │   └── colors.ts            # Color definitions
│   └── types/                   # TypeScript types
│       ├── postsTypes.ts        # Type definitions for posts
│       └── userTypes.ts         # Type definitions for users
├── navigation/                  # Navigation configurations
│   └── Container.tsx            # Stack navigator configuration
├── screens/                     # Application screens
│   ├── UserListScreen.tsx       # Screen to display list of users
│   └── PostsListScreen.tsx      # Screen to display posts of a selected user
├── store/                       # Redux store setup
│   ├── actions/                 # Redux action creators
│   │   ├── postAction.ts        # Actions related to posts
│   │   └── userActions.ts       # Actions related to users
│   ├── reducers/                # Redux reducers
│   │   ├── postReducer.ts       # Reducer for posts state
│   │   └── userReducer.ts       # Reducer for users state
│   ├── sagas/                   # Redux-Saga side effects
│   │   ├── postSaga.ts          # Saga for posts
│   │   └── userSaga.ts          # Saga for users
│   └── store.ts                 # Store setup and configuration
├── App.tsx                      # Main application entry point
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation

## Technologies

- **Expo**: Used for fast development and testing.
- **React Navigation**: For navigating between the User List and Posts List screens.
- **Redux**: For managing application state.
- **Redux-Saga**: For handling side effects and API calls.
- **TypeScript**: To add type safety to the project.
- **Ignite CLI**: As a boilerplate and generator for the project structure.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jithin260/UsersPostsApp.git
   cd UsersPostsApp
2. Install dependencies
   ```bash
   npm install
3. Install Expo CLI (if not already installed)
   ```bash
   npm install -g expo-cli
4. Start the development server
   ```bash
   npx expo start
5. Running the app
   - **For iOS**: Press 'i' to run the app on an iOS simulator.
   - **For Android**: Press 'a' to run the app on an Android emulator.

## API Integration

The project interacts with external APIs to fetch and manage data. Below are the details of the APIs used in this project:

### API Endpoints

- **Users API**:
  - **Endpoint**: `https://dummyjson.com/users`
  - **Description**: Fetches a list of users.
  - **Parameters**:
    - `skip` (number): The number of users to skip for pagination.
    - `limit` (number): The number of users to fetch per request.

- **Posts API**:
  - **Endpoint**: `https://dummyjson.com/users/{userId}/posts`
  - **Description**: Fetches posts for a specific user.
  - **Parameters**:
    - `userId` (number): The ID of the user whose posts are to be fetched.
    - `skip` (number): The number of posts to skip for pagination.
    - `limit` (number): The number of posts to fetch per request.

### API Usage

The API requests are made using Axios.

## State Management

The project uses Redux and Redux-Saga for state management. Below are the details of the state management setup:

## Redux

- **Store Configuration**: The Redux store is configured in store/store.ts and combines reducers and applies middleware for saga handling.

- **Reducers**:
  - **User Reducer**: Manages the state related to users.
  - **Post Reducer**: Manages the state related to posts.

## Redux-Saga

- **Sagas**:
  - **User Saga**: Handles side effects related to user data fetching.
  - **Post Saga**: Handles side effects related to post data fetching.


