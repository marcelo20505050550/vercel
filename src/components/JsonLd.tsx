export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BV BoaVentura',
    alternateName: 'BV Caldeiraria',
    url: 'https://bvboaventura.com.br',
    logo: 'https://bvboaventura.com.br/image/logo.png',
    description: 'Empresa especializada em caldeiraria, implementos agrícolas e máquinas especiais',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Antônio Stupello, 676',
      addressLocality: 'São Joaquim da Barra',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-16-99162-4446',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    sameAs: [
      'https://instagram.com/bvcaldeiraria',
      'https://facebook.com/bvcaldeiraria',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'BV BoaVentura',
    image: 'https://bvboaventura.com.br/image/logo.png',
    '@id': 'https://bvboaventura.com.br',
    url: 'https://bvboaventura.com.br',
    telephone: '+55-16-99162-4446',
    email: 'bvcaldeiraria@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Antônio Stupello, 676',
      addressLocality: 'São Joaquim da Barra',
      addressRegion: 'SP',
      postalCode: '14600-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -20.582,
      longitude: -47.858,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    priceRange: '$$',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
