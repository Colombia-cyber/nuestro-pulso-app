import React from "react";

/**
 * Colombian-themed background wrapper.
 * Provides a subtle Colombian flag background with glass morphism effects.
 */
export default function Background({ children }) {
  return (
    <div className="bg-container">
      <div className="bg-content">
        {children}
      </div>
    </div>
  );
}