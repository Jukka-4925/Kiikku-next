import { PortableText } from '@portabletext/react';
import { client } from '../../../sanity/lib/client';

type BlogPost = {
  title: string;
  publishedAt?: string;
  excerpt?: string;
  body?: any[];
};

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "blogPost" && defined(slug.current)]{
      "slug": slug.current
    }`
  );

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = await client.fetch<BlogPost | null>(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      publishedAt,
      excerpt,
      body
    }`,
    { slug: params.slug }
  );

  if (!post) {
    return (
      <main className="blog-page">
        <a className="blog-back" href="/">← Takaisin etusivulle</a>
        <article className="blog-article">
          <h1>Artikkelia ei löytynyt</h1>
          <p>Julkaisua ei löytynyt tai sitä ei ole vielä julkaistu.</p>
        </article>
      </main>
    );
  }

  return (
    <main className="blog-page">
      <a className="blog-back" href="/">← Takaisin etusivulle</a>

      <article className="blog-article">
        {post.publishedAt && (
          <time>{new Date(post.publishedAt).toLocaleDateString('fi-FI')}</time>
        )}

        <h1>{post.title}</h1>

        {post.excerpt && <p className="blog-lead">{post.excerpt}</p>}

        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </article>
    </main>
  );
}