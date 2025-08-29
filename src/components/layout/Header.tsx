import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={cn('bg-primary text-primary-foreground shadow-lg', className)}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">P</span>
            </div>
            <h1 className="text-xl font-bold">{t('app.title')}</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-primary-foreground/80 transition-colors">
              {t('navigation.home')}
            </a>
            <a href="/chat" className="hover:text-primary-foreground/80 transition-colors">
              {t('navigation.chat')}
            </a>
            <a href="/debates" className="hover:text-primary-foreground/80 transition-colors">
              {t('navigation.debates')}
            </a>
            <a href="/surveys" className="hover:text-primary-foreground/80 transition-colors">
              {t('navigation.surveys')}
            </a>
            <a href="/news" className="hover:text-primary-foreground/80 transition-colors">
              {t('navigation.news')}
            </a>
            <a href="/community" className="hover:text-primary-foreground/80 transition-colors">
              {t('navigation.community')}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={toggleLanguage}>
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </Button>
            <Button variant="secondary" size="sm">
              {t('auth.login')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}