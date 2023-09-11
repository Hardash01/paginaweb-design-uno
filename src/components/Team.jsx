import { teamData } from "../data/teamData"

const Team = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-5/6 md:flex mb-20">
                <div>
                    <div className="grid md:flex place-items-center gap-2 mb-10 md:mb-16 mx-3 md:mx-0">
                        <div>
                            <h2 className="uppercase text-2xl font-semibold">The team</h2>
                            <div className="w-16 h-2.5 mt-2 rounded bg-yellow-400 "></div>
                        </div>
                        <p className="text-xl md:ml-48 mt-8 md:mt-0">Showcase the Teams of Management, Experts & Enthusiasts</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 lg:gap-20 rounded-lg mb-8 mx-3 md:mx-0">
                        {teamData.map(team => (
                        <div key={team.id} className="block md:flex items-center justify-center bg-gris rounded-lg py-3">
                                <ul>
                                    <img
                                    className="block h-full w-full object-cover object-center"
                                    src={`./${team.image}.jpg`}
                                    alt={team.nombre} />

                                    <div className="mt-4 pl-8">
                                        <h3 className="text-xl font-semibold">{team.nombre}</h3>
                                        <p>{team.cargo}</p>
                                    </div>
                                </ul>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team