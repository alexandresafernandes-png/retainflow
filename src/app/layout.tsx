import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import { Toaster } from 'sonner';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'RetainFlow — Turn Every Customer Into a Regular',
  description: 'RetainFlow automates WhatsApp follow-ups for local businesses — more reviews, more repeat bookings, zero effort.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              borderRadius: '10px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.08)',
            },
          }}
        />
</body>
    </html>
  );
}