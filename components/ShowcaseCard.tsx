import css from "./componentStyles/showcaseCard.module.css";

interface ShowcaseCardProps {
  imgPath: string;
  title: string;
  subtitle: string;
  txtData: string[][];
}

const ShowcaseCard = (props: ShowcaseCardProps) => {
  return (
    <section
      className="w-full flex items-center justify-center pb-16"
      id={`${
        props.imgPath.includes("simulation")
          ? `simulation-studio`
          : `model-engineer`
      }`}
    >
      <main className="w-full flex flex-col items-center gap-y-12">
        <section className="flex flex-col max-w-5xl gap-y-6">
          <div className="flex flex-col justify-center max-w-3xl gap-y-4">
            <h1 className="text-4xl font-black lg:text-7xl">
              {props.title}
            </h1>
            <h2 className="text-2xl font-normal lg:text-3xl md:font-light">
              {props.subtitle}
            </h2>
          </div>
          <div className="flex flex-col max-lg:gap-y-6 lg:flex-row gap-x-6 w-full">
            {props.txtData.map((data, index) => {
              return (
                <div key={index}>
                  <h3 className="font-bold text-lg">{data[0]}</h3>
                  <span
                    className="text-[16px]"
                    dangerouslySetInnerHTML={{ __html: data[1] }}
                  ></span>
                </div>
              );
            })}
          </div>
        </section>
        <section className={css.imgWrapper}>
          <div className="max-w-5xl">
            <video
              src={props.imgPath}
              autoPlay={true}
              loop={true}
              controls={false}
              muted={true}
              playsInline={true}
              preload="false"
            />
          </div>
        </section>
      </main>
    </section>
  );
};

export default ShowcaseCard;
