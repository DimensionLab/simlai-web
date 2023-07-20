const MainUni = () => {
    return (
        <main className="flex flex-col justify-center items-center h-full w-full px-4 py-24 gap-y-4 max-w-4xl">
            <h1 className="font-bold text-3xl">Welcome to Siml.ai University!</h1>
            <h2 className="font-light">A place where you can learn everything about Siml.ai and find out how to utilize it for achieving incredible things!</h2>

            <section className="w-full flex flex-col justify-center items-center">
                <iframe width="480" height="320" src="https://www.youtube.com/embed/i-wpzS9ZsCs" title="NVIDIA Keynote at COMPUTEX 2023" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </section>
        </main>
    )
}

export default MainUni;