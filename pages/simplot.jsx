import Markdown from 'markdown-to-jsx';
import { getPageFromSlug } from '../utils/content.js';

const CDN = 'https://sitecore-web-prod.simplot-cdn.com/-/media/project/global/corporate/simplot-corporate';
const LOGO = `${CDN}/assets/logos/simplot_logo_inverse.svg`;
const TEAL = '#00b0ca';
const GREEN = '#007470';

const BUSINESSES = [
  { name: 'Food', img: 'food.jpg', text: 'Sustainably feeding the world through plant-based product offerings.' },
  { name: 'Agriculture', img: 'simplot-ag.jpg', text: 'Innovation and high-quality crop inputs for hard-working farmers.' },
  { name: 'Wholesale Crop Nutrition', img: 'wcn.jpg', text: 'Phosphate and nitrogen fertilizers, delivered where needed.' },
  { name: 'Turf, Landscape & Nursery', img: 'turf-landscape-and-nursery.jpg', text: 'Nourishing beauty and recreation around the globe.' },
  { name: 'Livestock', img: 'livestock.jpg', text: 'Supporting beef and dairy producers efficiently and sustainably.' },
  { name: 'Life Sciences', img: 'life-sciences-2.jpg', text: 'Understanding how plants and animals respond to a changing world.' }
];

const PILLARS = [
  { name: 'People', img: 'people.jpg' },
  { name: 'Planet', img: 'planet.jpg' },
  { name: 'Prosperity', img: 'prosperity.jpg' }
];

// Contentful-first: renders the `page` entry with slug "simplot"; seed copy if missing.
const FALLBACK = {
  id: 'simplot-fallback',
  sections: [
    {
      type: 'hero',
      heading: 'We Contribute to Feeding Our World',
      body: 'Our diverse portfolio spans from the soil and the sea to dinner tables around the world.',
      button: { label: 'Learn More About Us', url: '#businesses' },
      image: { src: `${CDN}/originals-from-bynder/hero-images/hero_homepage_1920x1150_fatherson-compressed.jpg`, alt: 'Simplot' }
    }
  ]
};

export async function getSimplotProps(locale) {
  try {
    const page = await getPageFromSlug('/simplot', locale);
    return { props: { page, source: 'contentful' } };
  } catch {
    return { props: { page: FALLBACK, source: 'fallback' } };
  }
}

export async function getStaticProps({ locale }) {
  return getSimplotProps(locale);
}

function SimplotHero(props) {
  return (
    <section
      data-sb-object-id={props.id}
      className="relative flex items-center min-h-[620px] bg-cover bg-center"
      style={{ backgroundImage: props.image ? `url(${props.image.src})` : undefined }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="relative max-w-6xl px-8 mx-auto w-full text-white">
        <div className="max-w-xl">
          <h1 className="mb-6 text-5xl font-light leading-tight sm:text-6xl" data-sb-field-path="heading">
            {props.heading}
          </h1>
          {props.body && (
            <Markdown options={{ forceBlock: true }} className="mb-8 text-lg text-white/90" data-sb-field-path="body">
              {props.body}
            </Markdown>
          )}
          {props.button && (
            <a
              href={props.button.url}
              data-sb-object-id={props.button.id}
              className="inline-block px-8 py-3 text-sm font-semibold tracking-wider uppercase rounded-full"
              style={{ background: TEAL }}
            >
              <span data-sb-field-path="label">{props.button.label}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function SimplotStats(props) {
  return (
    <section data-sb-object-id={props.id} className="px-8 py-20 text-center text-white" style={{ background: GREEN }}>
      <h2 className="mb-4 text-4xl font-light" data-sb-field-path="heading">{props.heading}</h2>
      {props.body && (
        <Markdown options={{ forceBlock: true }} className="max-w-2xl mx-auto mb-12 text-lg text-white/85" data-sb-field-path="body">
          {props.body}
        </Markdown>
      )}
      <div className="grid max-w-4xl gap-10 mx-auto sm:grid-cols-3" data-sb-field-path="stats">
        {(props.stats || []).map((s, i) => (
          <div key={i} data-sb-object-id={s.id}>
            <div className="text-5xl font-bold" style={{ color: TEAL }} data-sb-field-path="value">{s.value}</div>
            <div className="mt-2 text-sm tracking-wider uppercase" data-sb-field-path="label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const componentMap = { hero: SimplotHero, stats: SimplotStats };

export default function SimplotPage({ page, source }) {
  return (
    <div data-sb-object-id={page.id} className="font-sans text-gray-800">
      <div className="text-xs text-white bg-black">
        <div className="flex justify-end max-w-6xl gap-6 px-8 py-2 mx-auto">
          <span>Careers</span><span>News</span><span>Contact Us</span>
        </div>
      </div>
      <header style={{ background: GREEN }}>
        <div className="flex items-center justify-between max-w-6xl px-8 py-4 mx-auto">
          <img src={LOGO} alt="Simplot" width={124} height={54} />
          <nav className="hidden gap-8 text-sm font-semibold tracking-wide text-white uppercase md:flex">
            <span>Business &amp; Innovation</span><span>Who We Are</span><span>Sustainability</span><span>Careers</span>
          </nav>
        </div>
      </header>

      <div data-sb-field-path="sections">
        {(page.sections || []).map((section, idx) => {
          const Component = componentMap[section.type];
          return Component ? <Component key={idx} {...section} /> : null;
        })}
      </div>

      <section id="businesses" className="px-8 py-20 bg-[#f7f7f7]">
        <h2 className="mb-12 text-4xl font-light text-center" style={{ color: GREEN }}>Business &amp; Innovation</h2>
        <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESSES.map((b) => (
            <div key={b.name} className="overflow-hidden bg-white shadow-sm">
              <img src={`${CDN}/navigation/${b.img}`} alt={b.name} className="object-cover w-full h-44" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold" style={{ color: GREEN }}>{b.name}</h3>
                <p className="text-sm text-gray-600">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-20 bg-white">
        <h2 className="mb-4 text-4xl font-light text-center" style={{ color: GREEN }}>Our Responsibilities</h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
          A sustainable approach to people, planet and prosperity as we contribute to feeding our world responsibly.
        </p>
        <div className="grid max-w-6xl gap-8 mx-auto sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.name} className="relative overflow-hidden h-56">
              <img src={`${CDN}/navigation/${p.img}`} alt={p.name} className="absolute inset-0 object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black/35" />
              <span className="absolute text-3xl font-light text-white bottom-5 left-6">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative px-8 py-28 text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${CDN}/originals-from-bynder/page-section-cta-images/hero_1920x950_jr_tossingaspud-original.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="mb-4 text-4xl font-light">Working at Simplot</h2>
          <p className="mb-8 text-white/90">
            Operations that touch every aspect of agriculture — seed production, farming and ranching, plant sciences,
            fertilizer manufacturing, food processing and distribution.
          </p>
          <span className="inline-block px-8 py-3 text-sm font-semibold tracking-wider uppercase rounded-full" style={{ background: TEAL }}>
            Check Out Careers
          </span>
        </div>
      </section>

      <footer className="px-8 py-10 text-sm text-white bg-[#1f2a2a]">
        <div className="flex flex-col items-center justify-between max-w-6xl gap-4 mx-auto sm:flex-row">
          <img src={LOGO} alt="Simplot" width={100} height={44} />
          <span className="text-xs text-white/60">Demo mock · Powered by Netlify + Contentful · content source: {source}</span>
        </div>
      </footer>
    </div>
  );
}
