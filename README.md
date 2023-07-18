# cotizador-front

This front-end application is built with Vite, React, and Typescript.

## Features

- Create a product
- See the cotization in dollars

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

``git clone https://github.com/fgarancini/cotizador-front``

2. Navigate to the project directory:

``cd cotizador-front``

3. Install dependencies:

``npm install``

## Usage

1. Ensure that the Laravel API is running on the specified address (default: `http://localhost`).

2. Start the development server:

``npm run dev``

3. Access the application from your web browser at [http://localhost:5173](http://localhost:5173).

4. Register a new account or log in with existing credentials.

5. Use the provided user interface to select symptoms and receive diagnoses.

6. Save accurate diagnoses to your user history.

## Configuration

The project includes an `.env` file where you can configure the API URL:

- `VITE_APP_API_URL`: The URL for the Laravel API (e.g., `http://localhost`).

- Or in the `config.ts` file you can hardcode the URL

You can modify this variable to point to the correct API URL.
