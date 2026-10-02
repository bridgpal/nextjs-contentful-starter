import Link from 'next/link';
import { useRouter } from 'next/router';

const localeLabels = {
  'en-US': 'English',
  fr: 'Français',
};

export const LanguageSwitcher = () => {
  const { locale, locales = [], asPath } = useRouter();

  return (
    <nav className="flex justify-end gap-2 px-12 py-3 bg-white text-sm" aria-label="Language">
      {locales.map((code) => (
        <Link
          key={code}
          href={asPath}
          locale={code}
          hrefLang={code}
          aria-current={code === locale ? 'true' : undefined}
          className={`px-3 py-1 rounded-md font-semibold transition-colors ${
            code === locale ? 'bg-purple-700 text-white' : 'text-purple-700 hover:bg-purple-100'
          }`}
        >
          {localeLabels[code] ?? code}
        </Link>
      ))}
    </nav>
  );
};
