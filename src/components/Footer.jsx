import { redesData } from "../data/redesData"

const Footer = () => {
    return (
        <div className="bg-yellow-400 mx-2">
            <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-5/6 block pt-6">
                <div className="flex flex-col items-center justify-center mt-8 mb-6">
                    <div className='flex  gap-12'>
                        {redesData.map(red => (
                            <div  key={red.id} >
                                <a target="_blank" href={red.sitioWeb}>
                                    <img className='w-5 h-5' src={`./${red.imagen}.svg`} alt={`imagen red social ${red.nombre}`} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-center py-4 font-semibold">Made by DigitalStudios 2023</p>
            </div>
            
        </div>
    )
}

export default Footer