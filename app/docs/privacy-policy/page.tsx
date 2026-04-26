import { TypographyH3 } from "@/app/components/typography";
import { Head, Description, Date, Author } from "@/app/components/head";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Head
        className="text-3xl md:text-5xl"
        title="Privacy Policy for Eatables: Food Discovery & Review Platform"
      />

      <Date date="Last updated: December 1, 2025" />

      <TypographyH3 title="Introduction" />
      <Description description="Eatables: Food Discovery & Review Platform (“Eatables”, “we”, “our”, or “us”) provides a mobile application that helps users discover restaurants, cafés, and food items based on their current or selected location. This Privacy Policy explains how we collect, use, store, and protect your information when you use our mobile application (“App”). By using the App, you agree to this Privacy Policy." />

      <TypographyH3 title="1. Information We Collect" />

      <TypographyH3 title="1.1 Personal Information" />
      <ul className="list-disc ml-6 text-zinc-700 leading-relaxed">
        <li>Email address</li>
        <li>Full name</li>
        <li>Display name / username</li>
        <li>Profile photo (if uploaded or provided via Google)</li>
        <li>
          Google account details such as User ID, display name, and email (via
          Google Sign-In)
        </li>
      </ul>
      <Description description="We do not access your Google password or any other sensitive Google account data." />

      <TypographyH3 title="1.2 Authentication & Security Information" />
      <Description description="We securely store access tokens and encrypted session data. Sensitive tokens are stored using Keychain (iOS) and Encrypted Storage (Android)." />

      <TypographyH3 title="1.3 Location Information" />
      <Description description="We may collect precise GPS coordinates, approximate location, user-selected cities, and reverse-geocoded location names. Location data is used only to provide nearby food and restaurant recommendations. You may disable location access at any time, and the app will still work with manual location selection." />

      <TypographyH3 title="1.4 User-Generated Content" />
      <ul className="list-disc ml-6 text-zinc-700 leading-relaxed">
        <li>Text reviews</li>
        <li>Star ratings</li>
        <li>Photos uploaded from the device camera or gallery</li>
        <li>Timestamps</li>
      </ul>
      <Description description="Images are stored securely in our cloud storage provider (Cloudflare R2)." />

      <TypographyH3 title="1.5 User Preferences" />
      <ul className="list-disc ml-6 text-zinc-700 leading-relaxed">
        <li>Dietary preferences</li>
        <li>Favorite restaurants or items</li>
        <li>App preference data stored locally via MMKV</li>
      </ul>

      <TypographyH3 title="1.6 App Activity & Interactions" />
      <Description description="We may collect interaction data such as searches, filters, viewed restaurants, map activity, and actions like adding favorites or writing reviews. This data is used solely to improve app functionality and personalization." />

      <TypographyH3 title="1.7 Device & Technical Information" />
      <ul className="list-disc ml-6 text-zinc-700 leading-relaxed">
        <li>Device model and operating system</li>
        <li>App version</li>
        <li>Permissions granted</li>
        <li>Network status</li>
        <li>Error logs and local storage usage</li>
      </ul>
      <Description description="The app does not use Firebase Analytics, Crashlytics, or any analytics SDKs. All metrics come from internal app behavior or device-generated logs." />

      <TypographyH3 title="1.8 Third-Party Services Involved" />
      <ul className="list-disc ml-6 text-zinc-700 leading-relaxed">
        <li>Google Sign-In / Firebase Authentication (login only)</li>
        <li>Cloudflare R2 (secure image storage)</li>
        <li>OpenStreetMap (reverse geocoding via Nominatim)</li>
        <li>MapLibre (map rendering)</li>
      </ul>
      <Description description="We do not use Google Maps SDK or Firebase Analytics." />

      <TypographyH3 title="2. How We Use Your Information" />
      <ul className="list-disc ml-6 text-zinc-700 leading-relaxed">
        <li>Provide accurate restaurant and food discovery</li>
        <li>Deliver personalized recommendations</li>
        <li>Authenticate accounts and maintain secure sessions</li>
        <li>Enable reviews, ratings, and photo uploads</li>
        <li>Improve app performance and stability</li>
        <li>Offer location-based features</li>
        <li>Prevent fraud or security threats</li>
      </ul>
      <Description description="We do not sell, rent, or trade your personal information." />

      <TypographyH3 title="3. Data Sharing" />
      <Description description="We only share your data with third-party providers necessary to run the App, comply with legal obligations, or ensure security. We do not share personal data for advertising or marketing." />

      <TypographyH3 title="4. Data Storage & Security" />
      <Description description="We use industry-standard encryption, secure transmission, and controlled cloud storage systems to protect your data. However, no system can guarantee absolute security." />

      <TypographyH3 title="5. Your Rights & Choices" />
      <ul className="list-disc ml-6 text-zinc-700 leading-relaxed">
        <li>Disable location permissions anytime</li>
        <li>Update profile information</li>
        <li>Delete uploaded photos or reviews</li>
        <li>Log out to clear sensitive local data</li>
        <li>Request account deletion along with associated personal data</li>
      </ul>

      <TypographyH3 title="6. Children’s Privacy" />
      <Description description="Eatables is not intended for children under 13. We do not knowingly collect data from children. If you believe a child has used the App, please contact us immediately." />

      <TypographyH3 title="7. Data Retention" />
      <ul className="list-disc ml-6 text-zinc-700 leading-relaxed">
        <li>Authentication tokens — up to 6 months</li>
        <li>Local device data — until logout or uninstall</li>
        <li>Reviews/photos — until deleted by the user</li>
        <li>
          Account data — deleted permanently upon verified deletion request
        </li>
      </ul>

      <TypographyH3 title="8. Changes to This Privacy Policy" />
      <Description description="We may update this Privacy Policy periodically. A new 'Last updated' date will reflect any changes." />

      <TypographyH3 title="9. Contact Us" />
      <Description description="For privacy-related concerns or data deletion requests, contact us at help@eatables.app" />

      <div className="flex flex-row justify-end mt-5 gap-1">
        <Author author="Eatables Team," />
        <Date date="December 1, 2025" />
      </div>

      <div className="my-32" />
    </div>
  );
}
