import Link from 'next/link';

const themeClassMap = {
  default: 'border-purple-500 bg-purple-500 text-white hover:bg-purple-400 hover:border-purple-400 shadow-lg shadow-purple-500/30',
  outline: 'border-purple-400 bg-transparent text-purple-300 hover:text-white hover:bg-purple-500/20 hover:border-purple-300',
};

export const Button = (props) => {
  return (
    <Link
      href={props.url}
      className={`py-3 px-6 inline-block border-2 font-semibold rounded-md transition-all duration-300 ${
        themeClassMap[props.theme] ?? themeClassMap['default']
      }`}
      data-sb-object-id={props.id}
    >
      <span data-sb-field-path="label">{props.label}</span>
    </Link>
  );
};
