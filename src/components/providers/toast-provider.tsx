'use client';

import { ReactNode } from 'react';

export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      {/* Toast container will be added here when we implement toast functionality */}
    </>
  );
}