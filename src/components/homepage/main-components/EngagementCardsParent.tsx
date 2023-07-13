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
            "Interested in funding us?",
            "Drop us an email and we will send you our pitchdeck.",
            "CONTACT US",
            "mailto:hello@dimensionlab.org",
            "linear-gradient(90deg, #C063F9 0%, #59137D 100%)"
        ]
    ]

    return (
        <section className="w-full flex justify-center">
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
        </section>
    );
}

export default EngagementCardsParent;