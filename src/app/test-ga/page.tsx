'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/components/GoogleAnalytics';

export default function TestGAPage() {
  useEffect(() => {
    // Test event tracking
    trackEvent('test_event', 'debug', 'test_page_loaded');
  }, []);

  const handleTestClick = () => {
    trackEvent('test_button_click', 'debug', 'test_button');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Google Analytics Test Page</h1>
        
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Test Instructions:</h2>
          
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Open Developer Tools (F12)</li>
            <li>Go to Console tab</li>
            <li>Look for Google Analytics initialization messages</li>
            <li>Click the test button below</li>
            <li>Check Google Analytics Real-Time reports</li>
          </ol>

          <button
            onClick={handleTestClick}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Test Button Click
          </button>

          <div className="mt-6 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold mb-2">Expected Console Messages:</h3>
            <code className="text-sm">
              Initializing Google Analytics with ID: G-LT4WTZV3JV<br/>
              Google Analytics initialized successfully<br/>
              Tracking page view: /test-ga<br/>
              Tracking event: {`{action: "test_event", category: "debug", label: "test_page_loaded"}`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
} 