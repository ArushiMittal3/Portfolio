import Hero from '@/components/Hero'
import { FloatingNav } from '@/components/FloatingNavBar'
import Grid from '@/components/ui/Grid'
import RecentProjects from '@/components/RecentProjects'
import { navItems } from '@/data'
import ContactPage from '@/components/ContactPage'
import { Footer } from '@/components/Footer'

export default function Home () {
  return (
    <>
      {/* Background color on body level */}
      <div className="relative bg-pastelMint overflow-hidden w-full">
        {/* Centered main content */}
        <main className="flex flex-col items-center w-full">
          <div className="max-w-7xl w-full px-5 sm:px-10">
            <FloatingNav navItems={navItems} />
            <Hero />
            <Grid />
            <RecentProjects />
            <ContactPage />
          </div>
        </main>

        {/* Full-width footer */}
        <Footer />
      </div>
    </>
  )
}
