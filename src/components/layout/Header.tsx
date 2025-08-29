import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { path: '/', label: t('navigation.home') },
    { path: '/chat', label: t('navigation.chat') },
    { path: '/debates', label: t('navigation.debates') },
    { path: '/surveys', label: t('navigation.surveys') },
    { path: '/news', label: t('navigation.news') },
    { path: '/community', label: t('navigation.community') },
    { path: '/admin', label: t('navigation.admin') },
  ];

  return (
    <header className={cn('bg-primary text-primary-foreground shadow-lg', className)}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">P</span>
            </div>
            <h1 className="text-xl font-bold">{t('app.title')}</h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'hover:text-primary-foreground/80 transition-colors',
                  location.pathname === item.path && 'font-semibold border-b-2 border-primary-foreground/60'
                )}
              >
                {item.label}
              </Link>
            ))}
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