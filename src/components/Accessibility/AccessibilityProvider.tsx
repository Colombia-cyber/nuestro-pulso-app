import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reduceMotion: boolean;
  screenReaderMode: boolean;
  language: 'es' | 'en';
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  announceToScreenReader: (message: string) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    screenReaderMode: false,
    language: 'es',
  });

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('nuestro-pulso-accessibility');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error loading accessibility settings:', error);
      }
    }
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('nuestro-pulso-accessibility', JSON.stringify(settings));
  }, [settings]);

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // High contrast mode
    if (settings.highContrast) {
      root.classList.add('accessibility-high-contrast');
    } else {
      root.classList.remove('accessibility-high-contrast');
    }

    // Large text mode
    if (settings.largeText) {
      root.classList.add('accessibility-large-text');
    } else {
      root.classList.remove('accessibility-large-text');
    }

    // Reduced motion
    if (settings.reduceMotion) {
      root.classList.add('accessibility-reduce-motion');
    } else {
      root.classList.remove('accessibility-reduce-motion');
    }

    // Screen reader mode
    if (settings.screenReaderMode) {
      root.classList.add('accessibility-screen-reader');
    } else {
      root.classList.remove('accessibility-screen-reader');
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return (
    <AccessibilityContext.Provider value={{ settings, updateSettings, announceToScreenReader }}>
      {children}
      
      {/* Screen Reader Announcements Area */}
      <div id="aria-live-announcements" aria-live="polite" className="sr-only" />
      
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-colombia-blue focus:text-white focus:rounded-md"
      >
        Saltar al contenido principal
      </a>
      
      {/* Accessibility Toolbar */}
      <div className="fixed bottom-4 right-4 z-40">
        <AccessibilityToolbar settings={settings} updateSettings={updateSettings} />
      </div>
    </AccessibilityContext.Provider>
  );
}

interface AccessibilityToolbarProps {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
}

function AccessibilityToolbar({ settings, updateSettings }: AccessibilityToolbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-3 text-colombia-blue hover:bg-gray-50 rounded-lg focus-ring"
        aria-label="Opciones de accesibilidad"
        aria-expanded={isExpanded}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>
      
      {isExpanded && (
        <div className="absolute bottom-full right-0 mb-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 min-w-64">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Opciones de Accesibilidad</h3>
          
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                className="rounded border-gray-300 text-colombia-blue focus:ring-colombia-blue"
              />
              <span className="ml-2 text-sm text-gray-700">Alto contraste</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.largeText}
                onChange={(e) => updateSettings({ largeText: e.target.checked })}
                className="rounded border-gray-300 text-colombia-blue focus:ring-colombia-blue"
              />
              <span className="ml-2 text-sm text-gray-700">Texto grande</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.reduceMotion}
                onChange={(e) => updateSettings({ reduceMotion: e.target.checked })}
                className="rounded border-gray-300 text-colombia-blue focus:ring-colombia-blue"
              />
              <span className="ml-2 text-sm text-gray-700">Reducir movimiento</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.screenReaderMode}
                onChange={(e) => updateSettings({ screenReaderMode: e.target.checked })}
                className="rounded border-gray-300 text-colombia-blue focus:ring-colombia-blue"
              />
              <span className="ml-2 text-sm text-gray-700">Modo lector de pantalla</span>
            </label>
            
            <div>
              <label className="block text-sm text-gray-700 mb-1">Idioma</label>
              <select
                value={settings.language}
                onChange={(e) => updateSettings({ language: e.target.value as 'es' | 'en' })}
                className="w-full rounded border-gray-300 text-sm focus:ring-colombia-blue focus:border-colombia-blue"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}