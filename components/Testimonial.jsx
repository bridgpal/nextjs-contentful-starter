import Link from 'next/link';

{/* <div data-sb-field-path="subquote">{JSON.stringify(props.subquote)}</div> */}
export const Testimonial = (props) => {
  console.log("PROPS", props);
  return (
    <div data-sb-object-id={`${props.id}`} className="bg-slate-900 text-slate-100 py-16 px-6 text-center border-y border-white/5">
      <div data-sb-field-path="quote" className="max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed text-slate-200">
        <div className="relative">
          <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-6 text-5xl text-purple-500/60">&#8220;</div>
          <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-2 text-5xl text-purple-500/60">&#8221;</div>
        </div>
        {props.quote}
      </div>
    </div>
  );
};
