import { processData } from "../data/processData"

const Process = () => {
    return (
        <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-5/6 md:flex mb-2">
            <div>
                <div className="md:flex items-center justify-center gap-2 mb-10 md:mb-16 mx-3 md:mx-0">
                    <div className="flex flex-col items-center">
                        <h2 className="text-4xl font-semibold">The Process</h2>
                        <div className="w-16 h-2.5 mt-4 rounded bg-yellow-400 "></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-lg mb-16 mx-3 md:mx-0">
                    {processData.map(process => (
                    <div key={process.id} className="block md:flex items-center justify-center bg-gris rounded-lg py-3">
                            <div className="flex flex-col items-center justify-center content-center place-content-center">
                                <img
                                className="block h-16 w-16 object-cover object-center"
                                src={`./${process.logo}.svg`}
                                alt={process.nombre} />

                                <div className="mt-4 text-center flex flex-col items-center justify-center">
                                    <h3 className="text-xl font-semibold uppercase mb-6">{process.nombre}</h3>
                                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-8">
                                        <p className="text-2xl ">{process.numb}</p>
                                    </div>
                                    <p>{process.descripcion}</p>
                                </div>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Process