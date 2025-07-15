# Vercel Environment Variables Setup

Copy and paste these environment variables into your Vercel dashboard:

## 1. Site Configuration
```
NEXT_PUBLIC_SITE_URL=https://appomize.com
```

## 2. Google Analytics 4
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XL1WFMD4XY
```

## 3. Google Search Console (Add when you get verification code)
```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code_here
```

## 4. Firebase Configuration
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAvyqSTPQSnHws2moA0LiyZLjRWMnneq2Y
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=appomize-ac0ca.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://appomize-ac0ca-default-rtdb.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=appomize-ac0ca
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=appomize-ac0ca.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1002957330481
NEXT_PUBLIC_FIREBASE_APP_ID=1:1002957330481:web:280a626aab87e08ffe9d10
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XL1WFMD4XY
```

## Setup Instructions:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable above
3. Select "Production, Preview, Development" for all environments
4. Click "Save"
5. Redeploy your project

## Important Notes:

- All variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Make sure to select all environments (Production, Preview, Development)
- After adding variables, redeploy your project
- Test Google Analytics and Firebase on production 