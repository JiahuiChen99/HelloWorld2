function HeroBanner() {
    return(
        <section id="Hero Banner" className="flex w-full h-5/6">
            {/* Greeting */}
            <div className="flex w-4/12 h-full justify-center text-3xl">
                <div className="flex flex-col max-h-min w-auto justify-center">
                    <div className="text-2xl pb-2"> Hello World! </div>
                    <div className="font-bold">I am <span className="text-blue-900">Jiahui Chen</span></div>
                    <div className="font-bold"> Computer Engineer </div>
                </div>
            </div>

            {/* Graph */}
        </section>
    )
}

export default HeroBanner;