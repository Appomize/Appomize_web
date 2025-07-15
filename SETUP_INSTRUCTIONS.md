# Appomize Website Services Setup Guide

This guide will help you set up Google Analytics, Google Search Console, and Firebase for your Appomize website.

## Prerequisites

1. A Google account
2. A Firebase account
3. Your website deployed and accessible via HTTPS

## 1. Google Analytics 4 Setup

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create a new account for your business
4. Create a new property for your website
5. Choose "Web" as the platform
6. Enter your website details:
   - Website name: Appomize
   - Website URL: https://appomize.com
   - Industry category: Technology
   - Business size: Small business

### Step 2: Get Measurement ID
1. After creating the property, you'll get a Measurement ID (format: G-XXXXXXXXXX)
2. Copy this ID - you'll need it for the environment variables

### Step 3: Configure Environment Variables
1. Copy `env.example` to `.env.local`
2. Replace `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` with your actual Measurement ID

## 2. Google Search Console Setup

### Step 1: Add Property to Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Enter your website URL: https://appomize.com
4. Choose "Domain" property type (recommended) OR "URL prefix" if domain doesn't work

### Step 2: Verify Ownership - Multiple Methods

#### Method 1: HTML Tag (Recommended)
1. Google will provide an HTML tag like: `<meta name="google-site-verification" content="your_verification_code" />`
2. Copy the verification code from the content attribute
3. Add it to your `.env.local` file:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code_here
   ```
4. The verification code is already integrated into your layout.tsx file

#### Method 2: HTML File Upload
1. Download the HTML verification file from Google Search Console
2. Upload it to your website's root directory (public folder)
3. Make sure it's accessible at: https://appomize.com/google1234567890.html

#### Method 3: DNS Record
1. Add a TXT record to your domain's DNS settings
2. Name: @ (or your domain)
3. Value: google-site-verification=your_verification_code
4. Wait 24-48 hours for DNS propagation

#### Method 4: Google Analytics
1. If you already have Google Analytics set up, you can verify through that
2. Make sure you have "Edit" permissions on the GA property

### Troubleshooting Verification Issues

#### If you don't see verification options:
1. **Clear browser cache** and try again
2. **Use incognito/private browsing** mode
3. **Try a different browser** (Chrome, Firefox, Safari)
4. **Check if you're logged into the correct Google account**
5. **Make sure your website is accessible** via HTTPS

#### If verification fails:
1. **Wait 24-48 hours** for DNS changes to propagate
2. **Check if your website is accessible** from Google's servers
3. **Verify the meta tag is in the HTML head** section
4. **Ensure no redirects** are interfering with verification

#### Alternative: Use URL Prefix Instead of Domain
1. In Search Console, choose "URL prefix" instead of "Domain"
2. Enter: https://appomize.com/
3. This method is often easier to verify

### Step 3: Submit Sitemap
1. Once verified, go to "Sitemaps" in the left sidebar
2. Add your sitemap URL: https://appomize.com/sitemap.xml
3. Submit the sitemap

## 3. Firebase Setup

### Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name: "appomize-website"
4. Enable Google Analytics (optional but recommended)
5. Choose your Analytics account or create a new one

### Step 2: Add Web App
1. In your Firebase project, click the web icon (</>) to add a web app
2. Register app with nickname: "Appomize Website"
3. Enable Firebase Hosting (optional)
4. Copy the Firebase configuration object

### Step 3: Configure Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users
5. Create the database

### Step 4: Set Up Security Rules
1. In Firestore Database, go to "Rules" tab
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow read, write: if true;
    }
  }
}
```

**Important:** These rules allow full access for development. For production, you should restrict access appropriately.

### Step 5: Configure Environment Variables
1. In your `.env.local` file, replace the Firebase configuration with your actual values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 4. Install Dependencies

Run the following command to install the new dependencies:

```bash
npm install
```

## 5. Test the Setup

### Test Google Analytics
1. Start your development server: `npm run dev`
2. Open your website
3. Go to Google Analytics Real-Time reports
4. You should see your visit being tracked

### Test Firebase Contact Form
1. Go to your contact page
2. Fill out and submit the contact form
3. Check Firebase Console > Firestore Database
4. You should see a new document in the "contacts" collection

### Test Google Search Console
1. In Google Search Console, go to "URL Inspection"
2. Enter your website URL
3. Request indexing
4. Check that your sitemap is being read correctly

## 6. Production Deployment

### Environment Variables
Make sure to set all environment variables in your production environment:

- Vercel: Add them in the Vercel dashboard under Settings > Environment Variables
- Netlify: Add them in the Netlify dashboard under Site settings > Environment variables
- Other platforms: Follow their respective documentation

### Security Considerations
1. Update Firestore security rules for production
2. Enable Firebase Authentication if needed
3. Set up proper CORS policies
4. Consider rate limiting for the contact form

## 7. Monitoring and Maintenance

### Google Analytics
- Set up goals and conversions
- Create custom dashboards
- Set up email reports

### Google Search Console
- Monitor search performance
- Check for indexing issues
- Review mobile usability
- Monitor Core Web Vitals

### Firebase
- Monitor Firestore usage
- Set up alerts for high usage
- Review security rules regularly
- Backup important data

## Troubleshooting

### Common Issues

1. **Google Analytics not tracking**: Check if the Measurement ID is correct and the script is loading
2. **Firebase connection errors**: Verify all Firebase environment variables are set correctly
3. **Contact form not working**: Check Firestore security rules and network connectivity
4. **Search Console verification fails**: Ensure the meta tag is properly added to your HTML head

### Google Search Console Specific Issues

#### No verification code shown:
- Try refreshing the page
- Clear browser cache and cookies
- Use a different browser
- Check if you're logged into the correct Google account
- Make sure your website URL is correct and accessible

#### Verification methods not appearing:
- Try adding the property again
- Use "URL prefix" instead of "Domain"
- Make sure your website is accessible via HTTPS
- Check if there are any redirects on your domain

#### Verification keeps failing:
- Wait 24-48 hours for changes to propagate
- Double-check the meta tag is in the HTML head
- Verify the website is accessible from external networks
- Try the DNS verification method instead

### Support Resources
- [Google Analytics Help](https://support.google.com/analytics/)
- [Google Search Console Help](https://support.google.com/webmasters/)
- [Firebase Documentation](https://firebase.google.com/docs)

## Next Steps

1. Set up custom events tracking in Google Analytics
2. Create Firebase Authentication for admin access
3. Set up automated email notifications for contact form submissions
4. Implement advanced SEO features
5. Set up monitoring and alerting systems 
