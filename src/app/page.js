import ArrowBtn from "./components/arrowBtn";
import ScrollBox from "./components/scrollBox";
import PakkeCard from "./components/pakkeCard";
import ContactFormular from "./components/contactFormular";
import ContactBox from "./components/contactBox";
import HeroHeader from "./components/heroHeader";
import CtaBtn from "./components/ctaBtn";
import Service from "./components/service";

export default function Home() {
  return (
    <main>
      <a href="#contact" className="amatic fixed bottom-44 right-0 -translate-y-1/2 z-50 bg-[var(--action)] text-[var(--text)] text-3xl font-extrabold px-4 py-3 rounded-l-2xl shadow-lg hover:bg-opacity-10 transition-all duration-200">
        Få et tilbud
      </a>
      <section>
        <div className="content grid border-b py-20">
          <div className="justify-self-start row-start-1 col-start-1 z-10 self-start">
            <HeroHeader text={"Personlig service"} />
          </div>
          <div className="justify-self-start ml-16 mt-24 row-start-1 col-start-1 z-10 self-start z-50">
            <HeroHeader text={"Friske råvarer"} />
          </div>
          <div className="herotext max-w-prose justify-self-end row-start-1 col-start-1 z-10 self-start p-3 shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]">
            {/* <h2 className="herotext amatic text-3xl font-bold ">
              Vi stiller baren op til din fest og serverer smagfulde drinks med eksklusive råvarer. <br></br>Du tager kun stilling til hvor vi skal stå - så klarer vi resten.
            </h2> */}
            <h2 className="amatic text-2xl mb-2">Vi tilbyder...</h2>
            <div className="flex gap-3 text-2xl">
              <p className="amatic border-r-1 self-start pr-4 pt-2 pb-2">Cocktail Catering</p>
              <p className="amatic border-r-1 self-start pr-4 pt-2 pb-2">Lej en bartender</p>
              <p className="amatic border-r-1 self-start pr-4 pt-2 pb-2">Cocktail dispensere</p>
              <p className="amatic pt-2 pb-2">Cocktail kursus</p>
            </div>
          </div>

          <div className="w-full md:h-96 object-cover row-start-1 col-start-1 overflow-hidden mt-40">
            <video src="https://pureweb.dk/videos/22cocktails.mp4" autoPlay loop muted playsInline />
          </div>

          <div className="justify-self-end mr-4 -mt-9 row-start-2 col-start-1 z-50 self-start peer transition-transform duration-300 hover:-translate-y-14">
            {/* <HeroHeader text={"Taste"} /> */}
            <a className="amatic self-end shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)] bg-[var(--background)] text-[var(--text)] text-7xl px-6 py-2 -mb-2 border-2 md:hover:bg-transparent md:hover:text-white font-bold transition-all duration-150" href="#contact">
              Få et tilbud
            </a>
          </div>
          <div className="w-full md:h-96 mt-40 object-cover row-start-1 col-start-1 overflow-hidden z-30 bg-transparent md:peer-hover:bg-black opacity-60 transition-all duration-150"></div>
        </div>
      </section>
      <section>
        <div className="content py-20">
          <div className="mb-24">
            {/* <Service /> */}
            <h1 className="text-7xl md:text-9xl text-[var(--secondary)]">
              Lav dit eget<br></br>cocktailkort
            </h1>
            <p className="amatic text-2xl font-bold max-w-prose">Vælg den løsning, der passer til dit event – du bestemmer selv, hvor mange cocktails der skal på menuen, og priserne afhænger af antallet af gæster.</p>
          </div>
          <div className="flex flex-col gap-14 md:gap-4 md:grid grid-cols-4 mb-20">
            <img src="/images/mojito.avif" />
            <img src="/images/paloma.avif" />
            <img src="/images/darknstormy.avif" />
            <img src="/images/espressomartini.avif" />
            {/* <PakkeCard pakke={"On the rocks"} amount={"6"} />
            <PakkeCard pakke={"Neat"} amount={"9"} />
            <div className="md:relative">
              <div className="md:absolute z-10">
                <PakkeCard pakke={"The full pour"} amount={"12"} />
              </div>
              <img className="hidden md:block absolute left-9 -top-96" width={300} src="/images/drinkdummy.png" alt="drink" />
            </div> */}
          </div>
          <div className="justify-self-center">
            <a className="amatic bg-[var(--action)] mb-6 mt-6 md:mb-0 md:mt-0 text-[var(--texy)] text-4xl px-6 py-2 border-2 border-transparent md:hover:border-[var(--text)] md:hover:bg-transparent md:hover:text-[var(--text)] font-bold transition-all duration-150" href="#contact">
              Få et tilbud
            </a>
          </div>
          <div className="mt-6 md:mt-0"></div>
        </div>
      </section>
      <section>
        <img className="col-start-1 col-end-4 h-[90vh] w-full object-cover row-start-1" src="/images/mojitobg.avif" alt="mojito" />
        <div className="col-start-1 col-end-4 row-start-1 h-[90vh] bg-black opacity-25"></div>
        <div className="content row-start-1 text-7xl md:text-9xl self-center text-white z-10">
          <h1>
            Vi har<br></br>ingredienserne<br></br>til en fantastisk<br></br>aften
          </h1>
        </div>
      </section>
      <section className="bg-[var(--prime)] pb-40 md:pb-0 pt-20">
        <div className="content">
          <div className="mb-10 md:justify-self-end max-w-prose text-[var(--text)]">
            <h2 className="amatic text-2xl font-bold">Få et uforpligtende tilbud.</h2>
            <h1 className="text-7xl md:text-9xl text-[var(--text)]">Lad os snakke sammen</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="relative col-start-1 col-end-4 md:grid grid-cols-subgrid">
          <div className="absolute inset-0 bg-[var(--secondbg)] clip-diagonal-left"></div>
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
