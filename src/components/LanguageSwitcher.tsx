import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        <Globe className="h-4 w-4 mr-2" />
        {t('app.language')}
        <ChevronDown className="h-4 w-4 ml-1" />
      </button>
      
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => changeLanguage('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'en' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} hover:bg-gray-100`}
              role="menuitem"
            >
              {t('app.english')}
            </button>
            <button
              onClick={() => changeLanguage('zh')}
              className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === 'zh' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} hover:bg-gray-100`}
              role="menuitem"
            >
              {t('app.chinese')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;