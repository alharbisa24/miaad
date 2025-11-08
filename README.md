# Miaad – Appointment Booking Platform

## 📋 Overview

**Miaad** is a modern appointment booking platform designed specifically for interview process managers.  
It enables managers to create personalized booking links with predefined available days and time slots, allowing candidates to easily schedule interview appointments.

---

## 🚀 Features

- **Custom Booking Links**  
  Managers can create unique appointment links for candidates.

- **Predefined Availability**  
  Managers specify available days and time slots for booking.

- **Candidate Booking**  
  Candidates can view available slots and book interviews seamlessly.

- **Authentication & Authorization**  
  Secure login and user management powered by **BetterAuth**.

- **Responsive UI**  
  Built with **Next.js**, **ShadcnUI**, and **TailwindCSS** for fast, accessible, and beautiful user interfaces.

- **Form Validation**  
  Robust client-side form validation with **React Hook Form** and **Zod**.

- **Database Integration**  
  Persistent storage of users, bookings, and schedules using **MongoDB** with **Prisma ORM**.

---
## 🖼️ Screenshots

## Dashboard
### Home page
![Home](https://raw.githubusercontent.com/alharbisa24/miaad/main/images/home.PNG)

### Login page
![Login](https://raw.githubusercontent.com/alharbisa24/miaad/main/images/login.PNG)

### DashboardHome page
![DashboardHome](https://raw.githubusercontent.com/alharbisa24/miaad/main/images/dashboard_home.PNG)

### Links page
![Links](https://raw.githubusercontent.com/alharbisa24/miaad/main/images/links.PNG)

### Add new link page
![addLink](https://raw.githubusercontent.com/alharbisa24/miaad/main/images/addLink.PNG)

### link Details page
![LinkDetails](https://raw.githubusercontent.com/alharbisa24/miaad/main/images/specificLink.PNG)

## Link Schedule

### Link Home page
![LinkHome](https://raw.githubusercontent.com/alharbisa24/miaad/main/images/linkhome.png)

### Select Date page
![Home](https://raw.githubusercontent.com/alharbisa24/miaad/main/images/selectDate.PNG)

### Link Confirm Schedule page
![LinkConfirm](https://raw.githubusercontent.com/alharbisa24/miaad/main/images/confirmBook.PNG)
___

## 🏗️ Tech Stack

| Technology         | Description                             |
|--------------------|---------------------------------------|
| **Next.js**        | React framework for SSR and SSG       |
| **MongoDB**        | NoSQL database                        |
| **Prisma ORM**     | Type-safe database client & migrations|
| **ShadcnUI**       | Accessible, customizable UI components|
| **TailwindCSS**    | Utility-first CSS framework            |
| **BetterAuth**     | Authentication and session management |
| **React Hook Form**| React forms library with validation    |
| **Zod**            | Type-safe schema validation            |

---

## 🔧 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/alharbisa24/miaad.git

cd miaad
```

### 2️⃣ Install dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Configure environment variables
Create a .env file in the root and add:

```bash 
BETTER_AUTH_SECRET=your_secret_key_for_betterauth
DATABASE_URL=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL=your_website_url
GOOGLE_CLIENT_ID=your_secret_google_client_id
GOOGLE_CLIENT_SECRET=your_secret_google_client_secret
```

### 4️⃣ Initialize the database
Run Prisma migrations to set up MongoDB collections:

```
npx prisma migrate deploy
```
### Run the development server
```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to see the app in action.

---
## 🚀 Deployment

Recommended platforms:

- **Vercel** for seamless Next.js hosting.

Make sure to set the environment variables on the platform accordingly.

Ensure your MongoDB Atlas or a similar cloud MongoDB instance is accessible from the deployed app.


## 🌐 Deployed Website

You can access the live version of Miaad here:  
[https://miaad.vercel.app](https://miaad.vercel.app)


___
