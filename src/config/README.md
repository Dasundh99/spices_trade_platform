# Firebase Configuration Guide

This folder contains Firebase initialization and configuration.

## Setup Instructions

1. Create a `.env.local` file in the root of your project (not in version control)
2. Add your Firebase credentials from the Firebase Console:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Getting Your Credentials

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the gear icon → Project Settings
4. Scroll to "Your Apps" section
5. Click on your web app
6. Copy the config object values

## Files

- `firebase.ts` - Main Firebase initialization file with Auth, Firestore, and Storage services
- `.env.local` - Your personal credentials (never commit this file)

## Usage

Import the services in your components:

```typescript
import { auth, db, storage } from '@/config/firebase';
```

## Security

- Never commit `.env.local` or expose credentials
- Keep all sensitive keys in environment variables
- Use Firebase Security Rules for database access control
