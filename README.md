# NC News 📰

A dynamic news aggregation and discussion platform built with React 18 and Vite. Share, discuss, and vote on news that matters to you!

## 🚀 Quick Links

- [Live Application](https://ncnewsfe.novafps.com)
- [API Documentation](https://ncnews.novafps.com/api-docs)
- [API Endpoint](https://ncnews.novafps.com/api)
- [Frontend Repository](https://github.com/nxvafps/nc-news-frontend.git)

## ✨ Features

- 📱 Responsive design for both desktop and mobile
- 📑 Browse and filter articles by topics
- 💬 Engage in discussions through comments
- 👍 Vote on articles and comments
- 🔐 Secure user authentication
- 🔍 Advanced filtering and sorting options

## 🔑 Demo Account

Try the application instantly with these credentials:

```
Email: sampleuser1@sampleuser1.com
Password: Sampleuser1*
```

## 🛠️ Tech Stack

- React 18
- Vite
- Redux for state management
- Docker support
- Styled Components for styling
- React Router for navigation
- Axios for API requests

## ⚙️ Prerequisites

- Node.js (v18.0.0 or higher)
- npm (comes with Node.js)
- Git
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Optional: Docker for containerized deployment

## 💻 Local Development

1. Clone and enter the repository:

```bash
git clone [your-repo-url]
cd nc-news
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```
http://localhost:5173
```

## 🔧 Environment Setup

For local development, you'll need to set up your environment variables:

1. Create a `.env` file in the root directory
2. Add the following variables:

```
VITE_API_URL=https://ncnews.novafps.com/api
```

## 🐳 Docker Setup

Run with Docker for a containerized environment:

1. Build and start:

```bash
npm run docker-build
```

2. Access at http://localhost:3050

3. Stop container:

```bash
npm run docker-stop
```

## 📝 Available Scripts

- `npm run dev` - Launch development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run docker-start` - Start Docker container
- `npm run docker-build` - Build and start Docker container
- `npm run docker-stop` - Stop Docker container

---

## 🎓 Acknowledgments

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
