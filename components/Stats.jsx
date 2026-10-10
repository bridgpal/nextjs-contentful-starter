import Markdown from 'markdown-to-jsx';

const themeClassMap = {
  primary: 'bg-brand-600 text-white',
  dark: 'bg-gray-900 text-white',
};

export const Stats = (props) => {
  return (
    <div
      id="stats"
      className={`py-24 px-6 ${themeClassMap[props.theme] ?? themeClassMap['primary']}`}
      data-sb-object-id={props.id}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold sm:text-5xl" data-sb-field-path="heading">
            {props.heading}
          </h2>
          {props.body && (
            <Markdown
              options={{ forceBlock: true }}
              className="sm:text-lg opacity-80 max-w-2xl mx-auto"
              data-sb-field-path="body"
            >
              {props.body}
            </Markdown>
          )}
        </div>
        <div className="grid max-w-4xl gap-8 mx-auto sm:grid-cols-3">
          {(props.stats || []).map((stat, idx) => (
            <StatItem key={idx} {...stat} theme={props.theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatItem = (props) => {
  const isPrimary = !props.theme || props.theme === 'primary';
  return (
    <div
      className={`text-center p-8 rounded-2xl ${
        isPrimary ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/5 backdrop-blur-sm'
      }`}
      data-sb-object-id={props.id}
    >
      <div className="mb-2 text-4xl font-extrabold sm:text-5xl" data-sb-field-path="value">
        {props.value}
      </div>
      <div className="text-sm font-medium opacity-80 uppercase tracking-wide" data-sb-field-path="label">
        {props.label}
      </div>
    </div>
  );
};
