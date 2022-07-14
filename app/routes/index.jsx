
import Form from '~/components/Form'
import Hero from '~/components/Hero'
import Icon from '~/components/Icon'
import Kampus from '~/components/Kampus'
import Navbar from '~/components/Navbar'
import Stat from '~/components/Stat'
import Banner from '~/components/Banner'
import Bloginspirasi from '~/components/blog1'
import Blog from '../components/blog2'
import Footer from '../components/footer'
export default function Index() {
  return (
    <div className="relative bg-gray-white overflow-hidden">

      <div >
        <Navbar />
        <div className="bg-white">
          <Hero />
          <div className="mt-5 px-8 mx-3 rounded-lg pb-12 pt-9">
            <Icon />
            <br></br>
            <Stat />
          </div>
        </div>
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <Form />
            <Kampus />
            <Banner />
            <Bloginspirasi />
            <Blog />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  )
}
