export default function sitemap () {
  return [
    {
      url: 'http://anthonyperez.xyz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'http://anthonyperez.xyz/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: 'http://anthonyperez.xyz/blog/implementacion-de-boton-yappy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ]
}
