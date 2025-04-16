# Getting Started with NextNative

This guide will walk you through setting up your NextNative app and customizing it for your needs.

## 1. Initial Setup

### 1.1 Clone and Install

```bash
# Clone the repository
git clone https://github.com/your-username/nextnative-boilerplate.git your-app-name
cd your-app-name

# Install dependencies
npm install
```

### 1.2 Environment Variables

Copy the example environment file and edit it with your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your:

- Firebase configuration
- MongoDB/Database URL
- Other API keys as needed

## 2. Basic Configuration

### 2.1 Update App Information

Edit the following files to customize your app:

1. `config.ts` - Configure app-wide settings
2. `app/layout.tsx` - Update metadata and SEO information
3. `package.json` - Change app name and version

### 2.2 Firebase Setup

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Authentication methods you want to use (Email/Password, Google, etc.)
3. Create a Firestore database
4. Get your Firebase config from Project Settings > Your Apps
5. Add the config to your `.env.local` file

### 2.3 Database Setup

1. Set up a MongoDB Atlas cluster (or your preferred database)
2. Update the `DATABASE_URL` in `.env.local`
3. Customize your Prisma schema in `prisma/schema.prisma` as needed
4. Run migrations:

```bash
npm run db:push
```

## 3. Web Development

For web development, use the standard Next.js workflow:

```bash
npm run dev
```

Visit http://localhost:3000 to see your app running in development mode.

### 3.1 Customizing the Web View

The web routes are located in `app/(web)`:

- The landing page is in `app/(web)/(landing)`
- Create additional web routes as needed

## 4. Mobile Development

### 4.1 Initial Setup

1. Install platform-specific tools:

   - iOS: Xcode (macOS only)
   - Android: Android Studio and JDK

2. Generate native app assets:

```bash
npm run generate-assets
```

### 4.2 iOS Development (macOS only)

```bash
# Build the web app and sync with iOS
npm run mobile

# Open in iOS simulator
npm run ios
```

To open in Xcode:

```bash
open ios/App/App.xcworkspace
```

### 4.3 Android Development

```bash
# Build the web app and sync with Android
npm run mobile

# Open in Android emulator
npm run android
```

To open in Android Studio:

```bash
open -a "Android Studio" android
```

### 4.4 Customizing the Mobile View

The mobile routes are located in `app/(mobile)`:

- The main logic is in `app/(mobile)/index.tsx`
- Tab-based navigation is in `app/(mobile)/Tabs.tsx`
- Create additional screens as needed

## 5. Adding Features

### 5.1 Authentication

Firebase Authentication is already set up. Use the functions in `services/firebase/auth.ts`:

```typescript
import { signInWithGoogle, signOut } from "../../services/firebase/auth";

// In your component
const handleSignIn = async () => {
  const user = await signInWithGoogle();
  // Handle successful sign-in
};

const handleSignOut = async () => {
  await signOut();
  // Handle sign-out
};
```

### 5.2 Push Notifications

Firebase Cloud Messaging is set up for push notifications:

1. Set up your Firebase Server Key
2. Store user tokens when they register/login
3. Send notifications from your server using the Firebase Admin SDK

### 5.3 In-App Purchases

RevenueCat is integrated for handling in-app purchases:

1. Create a RevenueCat account
2. Configure your products
3. Use the provided hooks and components to implement purchases

## 6. Deployment

### 6.1 Web Deployment

Deploy your Next.js app to Vercel:

```bash
npm i -g vercel
vercel
```

### 6.2 App Store Deployment

1. Build your iOS app:

```bash
npm run ios
```

2. Open in Xcode and prepare for submission:

```bash
open ios/App/App.xcworkspace
```

3. Configure signing and capabilities
4. Archive and upload to App Store Connect

### 6.3 Google Play Deployment

1. Build your Android app:

```bash
npm run android
```

2. Open in Android Studio:

```bash
open -a "Android Studio" android
```

3. Generate a signed APK or App Bundle
4. Upload to Google Play Console

## 7. Advanced Customization

### 7.1 Custom Native Code

If you need to add native functionality:

1. Create a Capacitor plugin or use existing plugins
2. For iOS, modify native code in `ios/App/`
3. For Android, modify native code in `android/app/`

### 7.2 UI Customization

- Modify Tailwind configuration in `tailwind.config.js`
- Use DaisyUI themes by changing the `data-theme` in `app/layout.tsx`
- Create custom components in the `components/` directory

## 8. Troubleshooting

### Common Issues

1. **Build errors**: Make sure you have the latest dependencies with `npm install`
2. **Firebase errors**: Check your Firebase configuration and permissions
3. **Capacitor errors**: Update Capacitor with `npx cap update`
4. **Database connection**: Verify your connection string and network access

For more help, refer to:

- [Next.js documentation](https://nextjs.org/docs)
- [Capacitor documentation](https://capacitorjs.com/docs)
- [Firebase documentation](https://firebase.google.com/docs)

## Next Steps

- Add your custom business logic
- Style your UI to match your brand
- Implement your unique features
- Test thoroughly on all target platforms

Happy building with NextNative!
