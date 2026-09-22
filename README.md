# Budget Splitter

Budget Splitter is a simple React application for tracking shared expenses and calculating who owes whom.

The application allows users to add participants, register expenses, assign expenses to specific people, and automatically calculate the final settlements between all participants.

## Features

- Add and remove participants
- Add and remove expenses
- Assign expenses to the person who paid
- Automatically calculate who owes whom
- Store participants and expenses in localStorage
- Automated tests with Vitest and React Testing Library
- Continuous Integration with GitHub Actions

## Technologies

- React
- TypeScript
- Vite
- Vitest
- React Testing Library
- GitHub Actions

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the application

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Running tests

Run all automated tests:

```bash
npm run test:run
```

## Build

Create a production build:

```bash
npm run build
```

## Testing

The project contains automated tests that verify:

- settlement calculation for two participants
- settlement calculation for three participants
- correct behavior when participants paid equally
- adding a participant through the form
- preventing empty participant names

## Continuous Integration

GitHub Actions runs automatically on every `push` and `pull_request`.

The pipeline runs in the following order:

```text
build → test
```

The test job runs only after the build has completed successfully.

## Data persistence

Participants and expenses are stored in the browser's `localStorage`, so the data remains available after refreshing the page.
