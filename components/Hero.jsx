import Markdown from 'markdown-to-jsx';
import Image from 'next/image';
import { Button } from './Button.jsx';

const themeClassMap = {
  imgLeft: 'flex-row-reverse',
  imgRight: '',
};

export const Hero = (props) => {
  return (
    <div className="relative px-12 py-24 bg-slate-950 text-slate-100 overflow-hidden" data-sb-object-id={props.id}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,85,247,0.15),_transparent_60%)]" />
      <div className={`relative flex mx-auto max-w-6xl gap-12 ${themeClassMap[props.theme] ?? themeClassMap['imgRight']}`}>
        <div className="max-w-xl py-20 mx-auto lg:shrink-0">
          <h1 className="mb-6 text-5xl font-bold text-white" data-sb-field-path="heading">
            {props.heading}
          </h1>
          {props.body && (
            <Markdown options={{ forceBlock: true }} className="mb-4 text-lg text-slate-300" data-sb-field-path="body">
              {props.body}
            </Markdown>
          )}
          {props.button && <Button {...props.button} />}
        </div>
        <div className="relative hidden w-full overflow-hidden rounded-md ring-1 ring-white/10 shadow-2xl shadow-purple-900/20 lg:block">
          {props.image && (
            <Image
              src={props.image.src}
              alt={props.image.alt}
              fill
              style={{ objectFit: 'contain' }}
              data-sb-field-path="image"
            />
          )}
        </div>
      </div>
    </div>
  );
};
