# Invia Hotel Rooms Display Application

This project is a simple application designed to display a list of hotel rooms, with various features to enhance user interaction and provide dynamic data from an external API.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Libraries and Tools Used](#libraries-and-tools-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Room Sorting**: Sort hotel rooms by price (ascending/descending) or by name.
- **Room Availability Check**: Fetch and display room availability via API (all at once or on demand).
- **Pagination**: Paginate the list of hotel rooms with up to 4 rooms per page.
- **Dynamic Price Display**: Show room price, currency, and the difference in price after checking availability.
- **Booking Feature**: Each room has a "Book" button, which logs room info to the console upon click.
- **Tech Stack**:
  - React for building the user interface.
  - TypeScript for static type checking.
  - Vite for fast development and build times.
  - Integration with a third-party API.

## Requirements

- Fetch a list of hotel rooms from an API.
- Sort the rooms by price by default, with an option for users to change sorting criteria (by price or by name).
- Implement pagination for the room list, displaying up to 4 rooms per page.
- Check the availability of rooms via an API, either for all rooms at once or on demand per room.
- Display the following details for each room:
  - Price
  - Currency
  - Price difference after availability check
- Provide a "Book" button for each room, which logs the room's information to the console when clicked.
- Use React and TypeScript as the core stack, with the flexibility to incorporate additional libraries as needed.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Environment Setup

Create a `.env.local` file in the root directory of the project to store your API keys and other environment variables. Example:

```bash
VITE_MAIN_API_URL=YOUR_API_URL_HERE
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

To start the development server with Vite, run:

```bash
npm run dev
```

## Usage

- **Sorting**: Use the provided UI controls to sort the list of hotel rooms by price or name.
- **Pagination**: Navigate through pages of rooms using the pagination controls.
- **Availability Check**: Click on the provided button or link to check room availability and see the updated price.
- **Booking**: Click the "Book" button on any room to log its details to the console.

## Libraries and Tools Used

This project utilizes several libraries and tools to enhance development efficiency, code quality, and user experience:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static type definitions, helping to catch errors early and improve code maintainability.
- **Vite**: A fast development build tool that provides a modern and optimized development environment for frontend projects.
- **Material-UI**: A popular React UI framework that provides pre-designed components and styles to build a responsive and accessible user interface quickly.
- **Prettier**: A code formatter that enforces a consistent style across the codebase, improving readability and reducing code review overhead.
