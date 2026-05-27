import Link from 'next/link';

const themeClassMap = {
  default:
    'border-brand-600 bg-brand-600 text-white hover:bg-brand-700 hover:border-brand-700 shadow-sm shadow-brand-600/20',
  outline:
    'border-brand-200 bg-white text-brand-700 hover:bg-brand-50 hover:border-brand-300',
};

export const Button = (props) => {
  return (
    <Link
      href={props.url}
      className={`py-3 px-7 inline-block border-2 font-semibold rounded-lg transition-all duration-200 text-sm ${
        themeClassMap[props.theme] ?? themeClassMap['default']
      }`}
      data-sb-object-id={props.id}
    >
      <span data-sb-field-path="label">{props.label}</span>
    </Link>
  );
};
