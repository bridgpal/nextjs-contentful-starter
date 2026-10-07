import { LanguageSwitcher } from '../components/LanguageSwitcher.jsx';
import { Hero } from '../components/Hero.jsx';
import { Stats } from '../components/Stats.jsx';
import { Testimonial } from '../components/Testimonial.jsx';
import { getPageFromSlug, getPagePaths } from '../utils/content.js';
import SimplotPage, { getSimplotProps } from './simplot.jsx';

export async function getStaticPaths({ locales }) {
  // /simplot has its own page file; skip it here to avoid a route clash
  const paths = (await getPagePaths(locales)).filter(
    (p) => (typeof p === 'string' ? p : '/' + p.params.slug.join('/')) !== '/simplot'
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const slug = '/' + (params?.slug ?? ['']).join('/');
  // Simplot demo branch: the homepage renders the Simplot landing page
  if (slug === '/') {
    const { props } = await getSimplotProps(locale);
    return { props: { ...props, simplot: true } };
  }
  const page = await getPageFromSlug(slug, locale);
  return { props: { page } };
}

const componentMap = {
  hero: Hero,
  stats: Stats,
  pageTestimonial: Testimonial
};

export default function ComposablePage({ page, simplot, source }) {
  if (simplot) return <SimplotPage page={page} source={source} />;
  return (
    <div data-sb-object-id={page.id}>
      <LanguageSwitcher />
      {(page.sections || []).map((section, idx) => {
        const Component = componentMap[section.type];
        return <Component key={idx} {...section} />;
      })}
    </div>
  );
}
