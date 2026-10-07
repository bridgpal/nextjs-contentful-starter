import { Hero } from '../components/Hero.jsx';
import { Stats } from '../components/Stats.jsx';
import { Testimonial } from '../components/Testimonial.jsx';
import { getPageFromSlug } from '../utils/content.js';

// Contentful-first: if a `page` entry with slug "simplot" exists, it renders.
// Otherwise falls back to seed content shaped like the Contentful section model.
const FALLBACK = {
  id: 'simplot-fallback',
  sections: [
    {
      type: 'hero',
      heading: 'Bringing Earth’s Resources to Life',
      body: 'From the farm to the fork, Simplot contributes to sustainably feeding the world — food, agriculture, crop nutrition, turf, livestock and life sciences.',
      button: { label: 'Explore Our Businesses', url: '#businesses', theme: 'default' },
      image: {
        src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
        alt: 'Farm field at sunrise',
        width: 1200,
        height: 800
      },
      theme: 'imgRight'
    },
    {
      type: 'stats',
      heading: 'Rooted in Agriculture Since 1929',
      body: 'A family-owned company growing food, growers and communities worldwide.',
      theme: 'dark',
      stats: [
        { value: '1929', label: 'Founded in Idaho' },
        { value: '6', label: 'Global business lines' },
        { value: '3', label: 'Sustainability pillars: People, Planet, Prosperity' }
      ]
    },
    {
      type: 'pageTestimonial',
      quote: '“We are deeply committed to taking a sustainable approach to people, planet and prosperity as we contribute to feeding our world responsibly.”',
      name: 'The Simplot Company',
      title: 'Sustainability Commitment'
    }
  ]
};

export async function getStaticProps({ locale }) {
  try {
    const page = await getPageFromSlug('/simplot', locale);
    return { props: { page, source: 'contentful' } };
  } catch {
    return { props: { page: FALLBACK, source: 'fallback' } };
  }
}

const componentMap = { hero: Hero, stats: Stats, pageTestimonial: Testimonial };

export default function SimplotPage({ page, source }) {
  return (
    <div data-sb-object-id={page.id}>
      <header className="flex items-center justify-between px-12 py-4 bg-green-800 text-white">
        <span className="text-2xl font-bold tracking-wide">SIMPLOT</span>
        <nav className="hidden gap-6 text-sm sm:flex">
          <span>Food</span><span>Agriculture</span><span>Livestock</span><span>Sustainability</span><span>Careers</span>
        </nav>
      </header>
      {(page.sections || []).map((section, idx) => {
        const Component = componentMap[section.type];
        return Component ? <Component key={idx} {...section} /> : null;
      })}
      <section id="businesses" className="grid max-w-6xl gap-6 px-12 py-20 mx-auto sm:grid-cols-3">
        {['Food', 'Agriculture', 'Wholesale Crop Nutrition', 'Turf & Horticulture', 'Livestock', 'Life Sciences'].map((b) => (
          <div key={b} className="p-6 border rounded-md">
            <h3 className="mb-2 text-xl font-bold text-green-800">{b}</h3>
            <p className="text-sm text-gray-600">Learn more about Simplot {b}.</p>
          </div>
        ))}
      </section>
      <footer className="px-12 py-6 text-xs text-center text-gray-500 bg-gray-100">
        Demo mock · Powered by Netlify + Contentful · content source: {source}
      </footer>
    </div>
  );
}
