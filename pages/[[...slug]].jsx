import { LanguageSwitcher } from '../components/LanguageSwitcher.jsx';
import { Hero } from '../components/Hero.jsx';
import { Stats } from '../components/Stats.jsx';
import { Testimonial } from '../components/Testimonial.jsx';
import { getPageFromSlug, getPagePaths } from '../utils/content.js';

export async function getStaticPaths({ locales }) {
  const paths = await getPagePaths(locales);
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  const slug = '/' + (params?.slug ?? ['']).join('/');
  const page = await getPageFromSlug(slug, locale);
  return { props: { page } };
}

const componentMap = {
  hero: Hero,
  stats: Stats,
  pageTestimonial: Testimonial
};

export default function ComposablePage({ page }) {
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
