import { Helmet, HelmetProvider } from 'react-helmet-async'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { ImpactMetrics } from './components/ImpactMetrics'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Fati Sango | Social Entrepreneur &amp; Business Analyst | Rwanda</title>
        <meta
          name="description"
          content="Fati Sango: social entrepreneur and systems designer in Kigali, Rwanda. Innovation for impact: social enterprise, AI-enabled workflows, business analytics, and scalable community systems."
        />
        <meta name="author" content="Fati Sango" />
        <meta property="og:title" content="Fati Sango | Social Entrepreneur &amp; Business Analyst" />
        <meta
          property="og:description"
          content="Designing practical, scalable systems that meet community needs. Based in Kigali, Rwanda."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Fati Sango',
            jobTitle: 'Social Entrepreneur | Business Analyst',
            email: 'fatisango12@gmail.com',
            telephone: '+250782485566',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Kigali',
              addressCountry: 'RW',
            },
            knowsAbout: [
              'Social enterprise',
              'Business analytics',
              'CRM',
              'MIS',
              'AI workflows',
              'Monitoring and evaluation',
            ],
          })}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <ImpactMetrics />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default App
