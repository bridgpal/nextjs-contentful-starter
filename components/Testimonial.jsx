export const Testimonial = (props) => {
  return (
    <div id="testimonials" className="bg-brand-50 py-20 px-6" data-sb-object-id={`${props.id}`}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-brand-100">
          <svg className="w-6 h-6 text-brand-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
          </svg>
        </div>
        <blockquote
          className="text-xl sm:text-2xl font-medium leading-relaxed text-gray-800 mb-8"
          data-sb-field-path="quote"
        >
          &ldquo;{props.quote}&rdquo;
        </blockquote>
        <div className="w-12 h-1 mx-auto rounded-full bg-brand-300"></div>
      </div>
    </div>
  );
};
