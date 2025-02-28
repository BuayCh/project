import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from 'react-router';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      signInForceRedirectUrl='/'
      signUpForceRedirectUrl='/'
      afterSignOutUrl="/">
        <App />
      </ClerkProvider>
  </BrowserRouter>
);
