import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">SaaSify</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
            Features
          </Link>
          <Link href="#stats" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
            Results
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">
            Testimonials
          </Link>
          <Link
            href="#"
            className="ml-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors shadow-sm shadow-brand-600/20"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};
