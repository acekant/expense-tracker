# Expense Tracker in MERN
This is just normal expense tracker in which anyone can make list of their expense according to the months. I built this project for **Completion my MERN stack.** So, this is nothing but the examination for me to test my MERN knowledge. You can find more Information about this Project below.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Features](#features)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/acekant/expense-tracker.git
   ```
2. Navigate to the project directory:
   ```sh
   cd expense tracker main
   ```
3. Install dependencies for the backend:
   ```sh
   cd backend
   npm install
   ```
4. Install dependencies for the frontend:
   ```sh
   cd ../frontend
   npm install
   ```
5. Start the backend server:
   ```sh
   cd ../backend
   npm start
   ```
6. Start the frontend development server:
   ```sh
   cd ../frontend
   npm start
   ```

## Usage

- The backend runs on `http://localhost:5000` (default port for Express.js API).
- The frontend runs on `http://localhost:3000` (default port for React.js app).
- Open `http://localhost:3000` in your browser to use the application.

## Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Profile Page
![Profile Page](screenshots/profile-page.png)

## Features

- User authentication with JWT.
- Overview of tatol expenses in the month
- Responsive UI built with React.
- Export in PDF file
- Charts for Visualization using Charts.js
- Category wise Arrangement

## Configuration

- Create a `.env` file in the `backend` folder and add the following:
  ```env
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  PORT=5000
  ```
- Ensure MongoDB is running locally or use a cloud-based MongoDB service.

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or issues, contact: [dkuarya@gmail.com](mailto:dkuarya@gmail.com)

## Acknowledgments

- Inspired by modern web development best practices.
- Uses technologies such as MongoDB, Express.js, React.js, and Node.js.
