
import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}) {
  const siteName = "Shanaj Bithee";
  const siteUrl = "https://shanajbithee.com";
  const pageUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title} | {siteName}</title>

      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
}

export default SEO;
