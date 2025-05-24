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
            <HeroHeader text={"Vibes"} />
          </div>
          <div className="justify-self-start ml-16 mt-24 row-start-1 col-start-1 z-10 self-start">
            <HeroHeader text={"Quality"} />
          </div>
          <h2 className="herotext max-w-prose justify-self-end row-start-1 col-start-1 z-10 mt-16">
            22 Cocktails skaber stemning med håndlavede cocktails af høj kvalitet. Vi stiller baren op til din fest og serverer smagfulde drinks med eksklusive råvarer. <br></br>Du tager kun stilling til hvor vi skal stå - så klarer vi resten.
          </h2>
          <div className="w-full h-96 object-cover row-start-1 col-start-1 mt-40 overflow-hidden">
            <video src="https://pureweb.dk/videos/1920colour.mp4" autoPlay loop muted />
          </div>

          <div className="justify-self-end mr-4 -mt-9 row-start-2 col-start-1 z-10 self-start">
            <HeroHeader text={"Taste"} />
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="max-w-prose mb-4">
              Om det er fødselsdag, bryllup eller firmafest – vi skaber cocktailstemning, der løfter enhver anledning.<br></br>Vi stiller med bar og bartendere – du nyder festen.
            </h2>
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
              Lav dit eget<br></br>cocktailkort.
            </h1>
            <p className="max-w-prose">Vælg den løsning, der passer til dit event – du bestemmer selv, hvor mange cocktails der skal på menuen, og priserne afhænger af antallet af gæster.</p>
          </div>
          <div className="flex flex-col gap-14 md:grid grid-cols-3 mb-20">
            <PakkeCard pakke={"On the rocks"} amount={"6"} price1={"10.000"} price2={"15.000"} price3={"20.000"} />
            <PakkeCard pakke={"Neat"} amount={"9"} price1={"12.000"} price2={"17.000"} price3={"22.000"} />
            <div className="md:relative">
              <div className="md:absolute z-10">
                <PakkeCard pakke={"The full pour"} amount={"12"} price1={"15.000"} price2={"20.000"} price3={"25.000"} />
              </div>
              <img className="hidden md:block absolute left-9 -top-96" width={300} src="/images/drinkdummy.png" alt="drink" />
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="max-w-prose mb-4">
              Lad os forvandle din fest til en oplevelse. Fra elegante cocktails til skarpe shakes – vi medbringer baren, stemningen og de dygtige bartendere. <br></br> Du skal bare samle gæsterne – vi sørger for resten.
            </h2>
            <div>
              <ArrowBtn />
            </div>
          </div>
        </div>
      </section>
      <section>
        <img className="col-start-1 col-end-4 h-[90vh] w-full object-cover row-start-1" src="/images/mojitobg.avif" alt="mojito" />
        <div className="col-start-1 col-end-4 row-start-1 h-[90vh] bg-black opacity-25"></div>
        <div className="content row-start-1 text-7xl md:text-9xl self-center text-white z-10">
          <h1>
            Vi har<br></br>ingredienserne<br></br>til en fantastisk<br></br>aften.
          </h1>
        </div>
      </section>
      <section className="bg-[var(--prime)] pb-40 md:pb-0 pt-20">
        <div className="content">
          <div className="mb-10 md:justify-self-end max-w-prose">
            <h2>Få et uforpligtende tilbud.</h2>
            <h1 className="text-7xl md:text-9xl">Lad os snakke sammen.</h1>
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
