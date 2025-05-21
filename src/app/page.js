import ArrowBtn from "./components/arrowBtn";
import ScrollBox from "./components/scrollBox";
import PakkeCard from "./components/pakkeCard";
import ContactFormular from "./components/contactFormular";
import ContactBox from "./components/contactBox";
import HeroHeader from "./components/heroHeader";

export default function Home() {
  return (
    <main>
      <section>
        <div className="content grid border-b py-20">
          <div className="justify-self-start row-start-1 col-start-1 z-10 self-start">
            <HeroHeader />
          </div>
          <div className="justify-self-start ml-16 mt-24 row-start-1 col-start-1 z-10 self-start">
            <HeroHeader />
          </div>
          <h2 className="herotext max-w-prose justify-self-end row-start-1 col-start-1 z-10 mt-20">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti </h2>
          <img src="/images/herodummy.png" className="w-full h-96 object-cover row-start-1 col-start-1 mt-40" />
          <div className="justify-self-end mr-4 -mt-9 row-start-2 col-start-1 z-10 self-start">
            <HeroHeader />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="max-w-prose mb-4">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti </h2>
            <div>
              <ArrowBtn />
            </div>
          </div>
        </div>
      </section>
      <ScrollBox />
      <section>
        <div className="content border-t py-20">
          <div className="mb-24">
            <h1 className="text-7xl md:text-9xl">
              Lav dit eget<br></br>cocktailkort
            </h1>
            <p className="max-w-prose">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Clacss aptent taciti </p>
          </div>
          <div className="flex flex-col gap-14 md:grid grid-cols-3 mb-20">
            <PakkeCard />
            <PakkeCard />
            <div className="md:relative">
              <div className="md:absolute z-10">
                <PakkeCard />
              </div>
              <img className="hidden md:block absolute left-9 -top-96" width={300} src="/images/drinkdummy.png" />
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="max-w-prose mb-4">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti </h2>
            <div>
              <ArrowBtn />
            </div>
          </div>
        </div>
      </section>
      <section>
        <img className="col-start-1 col-end-4 h-[90vh] w-full object-cover row-start-1" src="/images/dummy.png" />
        <div className="content row-start-1 text-7xl md:text-9xl self-center">
          <h1>
            Vi har<br></br>ingredienserne<br></br>til en fantastisk<br></br>aften
          </h1>
        </div>
      </section>
      <section className="bg-[var(--prime)] pb-40 md:pb-0 pt-20">
        <div className="content">
          <div className="mb-10 md:justify-self-end max-w-prose">
            <h2>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc </h2>
            <h1 className="text-7xl md:text-9xl">Lad os snakke sammen</h1>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[var(--secondbg)] to-[var(--prime)]">
        <div className="relative col-start-1 col-end-4 md:grid grid-cols-subgrid">
          <div className="absolute inset-0 bg-[var(--background)] clip-diagonal-left"></div>
          <div className="absolute inset-0 bg-[var(--prime)] clip-diagonal-right"></div>
          <div className="content z-10 relative md:grid grid-cols-[1fr_2fr]">
            <div className="col-start-1 row-start-1">
              <ContactBox />
            </div>
            <div className="col-start-1 col-end-3 row-start-2 pb-16">
              <ContactFormular />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
