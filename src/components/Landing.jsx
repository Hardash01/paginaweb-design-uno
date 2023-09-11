
const Landing = () => {
    return (
        <div className="[background-image:_url('./landing.jpg')] md:bg-cover bg-center p-10 md:p-0 mb-20">
            <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-5/6 md:flex">
                <div className="h-96 flex flex-col justify-center mt-20 mb-10">
                    <div>
                        <h1 className="mb-8 md:mb-6 text-5xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Make Difference</h1>
                        <p className="mb-1 text-2xl font-semibold tracking-tight leading-none md:text-2xl lg:text-2xl text-white">Be bold enough to use colours that</p>
                        <p className="mb-8 md:mb-3 text-2xl font-semibold tracking-tight leading-none md:text-2xl lg:text-2xl text-white">change the world</p>
                        <a className="text-sm  tracking-tight leading-none md:text-3xl lg:text-base text-white border-b border-white" href="#"
                        >See More...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing