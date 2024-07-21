# My Holiday App

[![Build Status](https://github.com/joachimth/myholidayapp/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/joachimth/myholidayapp/actions)

Welcome to the **My Holiday App**! This project provides a comprehensive list of Danish public holidays with a modern and user-friendly interface.

## Live Demo

Check out the live demo here: [My Holiday App](https://joachimth.github.io/myholidayapp)

## Features

- 🎨 **Theme Selector**: Choose from a variety of themes to customize the app's appearance.
- 📅 **Year Selector**: Easily switch between different years to view holidays.
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- 📊 **Modern UI**: Built with React, Tailwind CSS, and DaisyUI for a sleek and modern look.

## Docker

Deploy the app using Docker:

- [Dockerhub Repository](https://hub.docker.com/r/joachimth/myholidayapp)

### Pull the Docker Image

```sh
docker pull joachimth/myholidayapp:latest
```

### Run the Docker Container

```sh
docker run -p 3000:3000 joachimth/myholidayapp:latest
```

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/joachimth/myholidayapp.git
cd myholidayapp
npm install
```

## Usage

Start the application in development mode:

```sh
npm start
```

## Deployment

Build the project for production:

```sh
npm run build
```

Deploy the project to GitHub Pages:

```sh
npm run deploy
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

Made with ❤️ by [joachimth](https://github.com/joachimth)