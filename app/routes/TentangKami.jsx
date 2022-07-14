
import Navbar from '~/components/Navbar'
import Footer from '../components/footer'
export default function About() {
    return (
        <div className="relative bg-gray-white overflow-hidden">

            <div >
                <Navbar />
                <div className="bg-white">
                    <div className="mt-5 px-8 mx-3 rounded-lg pb-12 pt-9">
                    </div>
                </div>
                <main className="mt-16 sm:mt-24">
                    <div className="mx-auto max-w-7xl">
                        <Footer />
                    </div>
                </main>
            </div>
        </div>
    )
}
