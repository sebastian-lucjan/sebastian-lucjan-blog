import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetadata from '@/data/siteMetadata';

const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage.constructor.name === 'Array' ? (
        ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="../public/static/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="../public/static/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="../public/static/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="../public/static/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="../public/static/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="../public/static/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="../public/static/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="../public/static/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../public/static/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="../public/static/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../public/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="../public/static/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../public/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="../public/static/favicons/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};

export const TagSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const router = useRouter();
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  );
};

export const BlogSEO = ({ authorDetails, title, summary, date, lastmod, url, images = [] }) => {
  const router = useRouter();
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  let imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
      ? [images]
      : images;

  const featuredImages = imagesArr.map((img) => {
    return {
      '@type': 'ImageObject',
      url: `${siteMetadata.siteUrl}${img}`,
    };
  });

  let authorList;
  if (authorDetails) {
    authorList = authorDetails.map((author) => {
      return {
        '@type': 'Person',
        name: author.name,
      };
    });
  } else {
    authorList = {
      '@type': 'Person',
      name: siteMetadata.author,
    };
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: summary,
  };

  const twImageUrl = featuredImages[0].url;

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="article"
        ogImage={featuredImages}
        twImage={twImageUrl}
      />
      <Head>
        {date && <meta property="article:published_time" content={publishedAt} />}
        {lastmod && <meta property="article:modified_time" content={modifiedAt} />}
        <link rel="canonical" href={`${siteMetadata.siteUrl}${router.asPath}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  );
};
