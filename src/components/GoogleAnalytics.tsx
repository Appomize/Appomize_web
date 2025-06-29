'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ReactGA from 'react-ga4';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize GA4
    console.log('Initializing Google Analytics with ID:', measurementId);
    ReactGA.initialize(measurementId);
    console.log('Google Analytics initialized successfully');
  }, [measurementId]);

  useEffect(() => {
    // Track page views
    if (pathname) {
      console.log('Tracking page view:', pathname);
      ReactGA.send({ hitType: 'pageview', page: pathname });
    }
  }, [pathname]);

  return null;
}

// Utility function to track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  console.log('Tracking event:', { action, category, label, value });
  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};

// Utility function to track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Utility function to track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', 'engagement', buttonName);
}; 