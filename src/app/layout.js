import './globals.css'
import FlowNav from './components/FlowNav';
import Footer from './components/Footer';
import HeroFooterSection from './components/HeroFooterSection';

export const metadata = {
  title: 'Kaythri Clone',
  description: 'Built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <FlowNav />

        <main className="flex-grow pt-20">
          {children}
          <HeroFooterSection />
        </main>

        <Footer />
      </body>
    </html>
  )
}
