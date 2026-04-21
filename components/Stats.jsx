import Markdown from 'markdown-to-jsx';

const themeClassMap = {
  primary: 'bg-gradient-to-b from-purple-900 via-purple-950 to-slate-950 text-white',
  dark: 'bg-slate-900 text-white',
};

export const Stats = (props) => {
  return (
    <div
      className={`py-24 px-12 text-center border-y border-white/5 ${themeClassMap[props.theme] ?? themeClassMap['primary']}`}
      data-sb-object-id={props.id}
    >
      <div className="mx-auto">
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl text-white" data-sb-field-path="heading">
            {props.heading}
          </h2>
          {props.body && <Markdown options={{ forceBlock: true }} className="sm:text-lg text-slate-300" data-sb-field-path="body">
            {props.body}
          </Markdown>}
        </div>
        <div className="grid max-w-3xl gap-12 mx-auto sm:grid-cols-3">
          {(props.stats || []).map((stat, idx) => <StatItem key={idx} {...stat} />)}
        </div>
      </div>
    </div>
  );
};

const StatItem = (props) => {
  return (
    <div data-sb-object-id={props.id} className="rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur-sm py-8 px-4">
      <div className="mb-3 text-4xl font-bold sm:text-5xl bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent" data-sb-field-path="value">
        {props.value}
      </div>
      <div className="text-slate-300" data-sb-field-path="label">{props.label}</div>
    </div>
  );
};
