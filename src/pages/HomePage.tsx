import landingImage from '../assets/landing.png'
import appDownlodImage from '../assets/appDownload.png'
const HomePage = () => {
     return (
          <div className="flex flex-col gap-12 mx-5 md:mx-0">
               <div className="bg-white rounded-lg shadow-md py-8  flex flex-col gap-5 text-center -mt-16">
                    <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-orange-600 ">
                         Tuck into Foodish today
                    </h1>
                    <span className="text-base md:text-xl font-medium"> Food is just a click away</span>
               </div>
               <div className="grid md:grid-cols-2 gap-2">
                    <img src={landingImage}/>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                         <span className='font-bold text-3xl tracking-tighter'> 
                              Order FodishBD even faster !
                         </span>
                         <span>
                              Download the FodishBD App for oredering and personalised recomendations.
                         </span>
                         <img src={appDownlodImage} />
                    </div>
               </div>
          </div>
     );
};

export default HomePage;