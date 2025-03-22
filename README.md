# Voyagr

Our app allows users to choose their role as either a sender or a shipper in the context of sending or receiving physical goods via airplane luggage. Voyagr acts as an intermediary, enabling users to view posts by other users, check available carrying capacity or goods to send, view pricing per kilogram, departure/arrival times, and communicate instantly through built-in chat functionality.

## Run Locally

### Clone the Project

```bash
git clone https://github.com/YourGitHubUsername/Voyagr
```

### Navigate to Project Directory

```bash
cd Voyagr
```

### Install Main Dependencies

```bash
npm install
```

### Start the Server

```bash
cd server
npm install
npm run start
```

### Start the Socket.IO

```bash
cd socket.io
npm install
npm run start
```

### Start the Client App

```bash
cd client
npm install
npm run start
```

### Database Setup

Create your database according to the provided schema:

```bash
npx prisma db pull
npx prisma generate
```

## Environment Variables

To run Voyagr, you will need to add these environment variables to your `.env` file:

```env
DATABASE_URL=your_database_url_here
ANOTHER_API_KEY=your_api_key_here
```

## Tech Stack

- **Client:** React, TailwindCSS, React Native, Expo, Cloudinary, Firebase, NativeBase
- **Server:** Node.js, Express, PostgreSQL
- **Admin:** Next.js, TypeScript, Bootstrap

## Author

- [Wiem Mimouni](https://github.com/WiemMimouni)

