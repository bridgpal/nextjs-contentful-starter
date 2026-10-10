import Markdown from 'markdown-to-jsx';
import { Button } from './Button.jsx';

const themeClassMap = {
  imgLeft: 'flex-row-reverse',
  imgRight: '',
};

export const Hero = (props) => {
  return (
    <div className="hero-gradient px-6 py-20 lg:py-32" data-sb-object-id={props.id}>
      <div className={`flex items-center mx-auto max-w-6xl gap-16 ${themeClassMap[props.theme] ?? themeClassMap['imgRight']}`}>
        <div className="max-w-xl py-8 mx-auto lg:mx-0 lg:shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-brand-700 bg-brand-100 rounded-full">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Now in public beta
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl" data-sb-field-path="heading">
            {props.heading}
          </h1>
          {props.body && (
            <Markdown options={{ forceBlock: true }} className="mb-8 text-lg leading-relaxed text-gray-600" data-sb-field-path="body">
              {props.body}
            </Markdown>
          )}
          <div className="flex flex-wrap items-center gap-4">
            {props.button && <Button {...props.button} />}
            <Button label="Watch Demo" url="#" theme="outline" />
          </div>
        </div>
        <div className="hidden w-full lg:block">
          {props.image && (
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-200/40 rounded-2xl blur-xl"></div>
              <img
                src={props.image.src}
                alt={props.image.alt}
                width={props.image.width}
                height={props.image.height}
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-brand-900/10 border border-white/60"
                data-sb-field-path="image"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
