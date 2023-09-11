
const Collage = () => {
    return (
        <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-5/6 md:flex mb-20">
            <div className="px-5 py-2 md:px-0 md:py-0 lg:px-32 lg:py-6">
                <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-">
                    <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-span-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(10).webp" />
                    </div>
                    <div >
                        <img
                        alt="gallery"
                        className="block h-full w-full object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                    </div>
                    <div >
                        <img
                        alt="gallery"
                        className="block h-full w-full object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                    </div>
                    <div className="md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-4">
                        <img
                        alt="gallery"
                        className="block h-full w-full object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                    </div>
                    <div >
                        <img
                        alt="gallery"
                        className="block h-full w-full object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <a className="py-4 px-8 mr-2 text-base font-medium bg-yellow-400 rounded border transition duration-300 hover:bg-yellow-500" href="#">
                        View More...
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Collage