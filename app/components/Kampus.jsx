/* This example requires Tailwind CSS v2.0+ */
const ptn = [
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/id/thumb/0/0f/Makara_of_Universitas_Indonesia.svg/1200px-Makara_of_Universitas_Indonesia.svg.png',
  },
  {
    imageSrc: 'https://edu.highlight.id/wp-content/uploads/2021/10/logo-kampus-ptn-negeri-universitas-gadjah-mada-ugm-yogyakarta-makna-lambang-arti.jpg',
  },
  {
    imageSrc: 'https://dti.itb.ac.id/wp-content/uploads/2020/09/logo_itb_1024.png',
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bogor_Agricultural_University_%28IPB%29_symbol.svg/1200px-Bogor_Agricultural_University_%28IPB%29_symbol.svg.png',
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/id/c/c4/Badge_ITS.png',
  },
  {
    imageSrc: 'http://static.ub.ac.id/static_files/logo/Frame-UB-BT-ala-Jpg.jpg',
  },
  {
    imageSrc: 'https://rekreartive.com/wp-content/uploads/2018/10/Logo-UPI-Universitas-Pendidikan-Indonesia-Original-PNG.png',
  },
  {
    imageSrc: 'https://www.uny.ac.id/sites/default/files/inline-images/logo-uny.png',
  },
  {
    imageSrc: 'https://pelajarinfo.id/wp-content/uploads/2022/01/Universitas-Jendral-Soedirman-Logo.png',
  },
  {
    imageSrc: 'https://uns.ac.id/en/wp-content/uploads/2021/04/Logo-UNS-New-04-1.png',
  },
  {
    imageSrc: 'https://www.unpad.ac.id/wp-content/uploads/2018/04/logo-unpad1.png',
  },
  {
    imageSrc: 'https://arsip.unair.ac.id/wp-content/uploads/2019/01/logo-unair.png',
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Logo_of_Universitas_Negeri_Semarang.jpg',
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/id/thumb/d/d2/Lambang_UNJ.svg/1200px-Lambang_UNJ.svg.png',
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Logo_Universitas_Trunojoyo_Madura.jpg/768px-Logo_Universitas_Trunojoyo_Madura.jpg',
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/id/thumb/f/ff/Logo_UnivLampung.png/640px-Logo_UnivLampung.png',
  },
  {
    imageSrc: 'https://cn.unesa.ac.id/images/gallery/3/b0fd49fc87a8ba9628f1547378bf26f4.jpg',
  },
  {
    imageSrc: 'https://1.bp.blogspot.com/-tThKR0i2DdQ/XrO4fFiulNI/AAAAAAAAB_s/4_UY2xeR3SsE9_5MGBdvsQtBJgNxf9e_wCLcBGAsYHQ/s400/Logo%2BUndip%2BUniversitas%2BDiponegoro.png',
  },
  {
    imageSrc: 'https://seeklogo.com/images/U/universitas-negeri-malang-logo-B4774134CF-seeklogo.com.png',
  },
  {
    imageSrc: 'https://protan.faperta.unej.ac.id/wp-content/uploads/sites/14/2020/05/logo-unej-300x296.png',
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/id/2/2d/Logo-unud-baru.png',
  },
  {
    imageSrc: 'https://unram.ac.id/wp-content/uploads/2018/09/UNRAM-LOGO-FIX-STATUTA--300x292.png',
  },


]

const ptkin = [
  {
    imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UIN-SUKA.png',
  },
  {
    imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UIN-Sunan-Ampel.png',
  },
  {
    imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UIN-Syarif-Hidayatullah.png',
  },
  {
    imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UIN-Sunan-Gunung-Djati-Bandung.png',
  },
]

const pts = [
  {
    imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/Tel-U.png',
  },
  {
    imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/UII.png',
  },
]

const ptk = [
  {
    imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/STAN.png',
  },
  {
    imageSrc: 'https://santrihub.or.id/wp-content/uploads/2022/06/POLTEKESOS.png',
  },
]

export default function Kampus() {
  return (

    <div className=" px-4 py-5 border-2 border-sky-500 rounded-lg  mt-5 mx-3 sm:px-6">
      <h2 className="mt-3 mx-5 text-center text-3xl tracking-tight font-extrabold text-gray-700 sm:text-4xl">Perguruan Tinggi Negerti (PTN) </h2>
      <div className="max-w-7xl mx-auto  sm:px-2 sm:py-25 lg:px-4">
        <div className="mt-5 mx-3 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {ptn.map((ptn) => (
            <div key={ptn.name} className="text-center sm:flex sm:text-left lg:block lg:text-center border-gray-400 border-2 rounded-lg">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="w-20 h-20 mx-auto" src={ptn.imageSrc} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mt-3 mx-5 text-center text-3xl tracking-tight font-extrabold text-gray-700 sm:text-4xl">Perguruan Tinggi Keagamaan Islam Negeri (PTKIN) </h2>
      <div className="max-w-7xl mx-auto  sm:px-2 sm:py-25 lg:px-4">
        <div className="mt-5 mx-3 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {ptkin.map((ptkin) => (
            <div key={ptkin.name} className="text-center sm:flex sm:text-left lg:block lg:text-center border-gray-400 border-2 rounded-lg">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="w-20 h-20 mx-auto" src={ptkin.imageSrc} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mt-3 mx-5 text-center text-3xl tracking-tight font-extrabold text-gray-700 sm:text-4xl">Perguruan Tinggi Swasta (PTS) </h2>
      <div className="max-w-7xl mx-auto  sm:px-2 sm:py-25 lg:px-4">
        <div className="mt-5 mx-3 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {pts.map((pts) => (
            <div key={pts.name} className="text-center sm:flex sm:text-left lg:block lg:text-center border-gray-400 border-2 rounded-lg">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="w-20 h-20 mx-auto" src={pts.imageSrc} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mt-3 mx-5 text-center text-3xl tracking-tight font-extrabold text-gray-700 sm:text-4xl">Perguruan Tinggi Kedinasan (PTK) </h2>
      <div className="max-w-7xl mx-auto  sm:px-2 sm:py-25 lg:px-4">
        <div className="mt-5 mx-3 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {ptk.map((ptk) => (
            <div key={ptk.name} className="text-center sm:flex sm:text-left lg:block lg:text-center border-gray-400 border-2 rounded-lg">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="w-20 h-20 mx-auto" src={ptk.imageSrc} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </div>



  )
}
