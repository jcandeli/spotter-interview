# Spotter Timer App

A simple timer application built with Vite and React.
| Design | My Implementation |
|--------|------------------|
| <img src="./public/design.png" width="400"> | <img src="./public/screenshot.png" width="310"> |

## Overview

The general steps I took to build this app were:

1. Define all criteria
2. Break down features and components as tasks
3. Decide on appropriate tooling and libraries
4. Get functionality working
5. Style
6. Code review my own code and refine
7. Add bonus features

### Technical Decisions

- **Vite**: Chosen as the build tool for its simplicity and speed, as Next.js would have been overengineered for this use case
- **Clever Library**: Initially implemented custom time input formatting logic, but switched to Clever library for more reliable and bug-free input handling
- **Test Coverage**: Added comprehensive unit tests to ensure code reliability

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm

### Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. The application will be available at: http://localhost:5173/

## Known Issues and Challenges

### Testing Configuration

- Encountered intermittent issues with unit test execution
- Configuration inconsistencies caused tests to work sporadically

#### Here is a screenshot of jest working once but failing immediately after running again with no changes.

  <img src="./public/jest.png">

### Build Process

- Production build currently fails due to Jest errors
- Have not been able to configure Vite to exclude test files during production builds

## Future Improvements

If I had more time I would have:

- Added the draggable handle for the timer.
- Added more unit tests.
- Added Storybook stories for each component.
- Added more metadata.
- Added localization.
- Allowed for multiple timers to run simultaneously.
