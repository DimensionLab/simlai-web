import EngagementCard from "./cards/EngagementCard";

const EngagementCardsParent = () => {

    const data = [
        [
            "Join our community Discord server!",
            "We are giving out free 1 month discounts to early adopters - ask around in our community Discord!",
            "JOIN OUR DISCORD",
            "https://discord.gg/UxQyC9PEqt",
            "linear-gradient(90deg, #6B50FF 0%, #C063F9 100%)"
        ],
        [
            "Invest in Siml.ai!",
            "Drop us an email and we will send you our pitchdeck.",
            "CONTACT US",
            "mailto:hello@dimensionlab.org",
            "linear-gradient(90deg, #C063F9 0%, #59137D 100%)"
        ]
    ]

    return (
        <section className="w-full flex flex-col justify-center items-center">
            <main className="w-full grid grid-cols-1 py-4 gap-y-4 h-full max-md:max-w-lg md:grid-cols-2 gap-x-4 lg:gap-x-8 max-w-5xl sm:py-20 lg:py-32">
                {data.map((item, index) => {
                    return (
                        <EngagementCard
                            title={item[0]}
                            subtitle={item[1]}
                            buttonText={item[2]}
                            buttonHref={item[3]}
                            bgColor={item[4]}
                            key={index}
                        />
                    )
                })}
            </main>
            <div className="px-4 max-w-2xl mb-24 lg:-mt-12">
                <div className="bg-[#6B50FF] w-full rounded-[2rem] px-12 py-3 text-center hover:scale-105 duration-300">
                <a href="https://platform.siml.ai/" target="_blank">
                    <div className="font-bold text-xl lg:text-4xl">Try out Siml.ai now!</div>
                </a>
                </div>
            </div>
        </section>
    );
}

export default EngagementCardsParent;