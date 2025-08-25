import ArrowBtn from "./components/arrowBtn";
import ScrollBox from "./components/scrollBox";
import PakkeCard from "./components/pakkeCard";
import ContactFormular from "./components/contactFormular";
import ContactBox from "./components/contactBox";
import HeroHeader from "./components/heroHeader";
import CtaBtn from "./components/ctaBtn";

export default function Home() {
  return (
    <main>
      <a href="#contact" className="amatic fixed bottom-44 right-0 -translate-y-1/2 z-50 bg-[var(--action)] text-white text-2xl font-bold px-4 py-3 rounded-l-2xl shadow-lg hover:bg-opacity-10 transition-all duration-200">
        Få et tilbud
      </a>
      <section>
        <div className="content grid border-b py-20">
          <div className="justify-self-start row-start-1 col-start-1 z-10 self-start">
            <HeroHeader text={"Vibes"} />
          </div>
          <div className="justify-self-start ml-16 mt-24 row-start-1 col-start-1 z-10 self-start z-50">
            <HeroHeader text={"Taste"} />
          </div>
          <h2 className="herotext amatic max-w-prose justify-self-end text-3xl font-bold row-start-1 col-start-1 z-10">
            Vi stiller baren op til din fest og serverer smagfulde drinks med eksklusive råvarer. <br></br>Du tager kun stilling til hvor vi skal stå - så klarer vi resten.
          </h2>

          <div className="w-full md:h-96 object-cover row-start-1 col-start-1 overflow-hidden mt-40">
            <video src="https://pureweb.dk/videos/22cocktails.mp4" autoPlay loop muted playsInline />
          </div>

          <div className="justify-self-end mr-4 -mt-9 row-start-2 col-start-1 z-50 self-start peer transition-transform duration-300 hover:-translate-y-14">
            {/* <HeroHeader text={"Taste"} /> */}
            <a className="amatic self-end bg-[var(--secondbg)] text-[var(--text)] text-7xl px-6 py-2 -mb-2 border-2 md:hover:bg-transparent md:hover:text-white font-bold transition-all duration-150" href="#contact">
              Få et tilbud
            </a>
          </div>
          <div className="w-full md:h-96 mt-40 object-cover row-start-1 col-start-1 overflow-hidden z-30 bg-transparent md:peer-hover:bg-black opacity-60 transition-all duration-150"></div>
        </div>
      </section>
      <section>
        <div className="content py-20">
          <div className="mb-24">
            <h1 className="text-7xl md:text-9xl text-[#0D3A26]">
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
          <div className="mt-6 md:mt-0">
            <h2 className="amatic text-2xl font-bold max-w-prose mb-4">
              Lad os forvandle din fest til en oplevelse. Fra elegante cocktails til skarpe shakes – vi medbringer baren, stemningen og de dygtige bartendere. <br></br> Du skal bare samle gæsterne – vi sørger for resten.
            </h2>
            <div className="justify-self-center">
              <a className="amatic self-end bg-[var(--action)] text-white text-7xl px-6 py-2 -mb-2 border-2 md:hover:bg-transparent md:hover:text-[var(--text)] font-bold transition-all duration-150" href="#contact">
                Få et tilbud
              </a>
            </div>
          </div>
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
            <h1 className="text-7xl md:text-9xl text-[#0D3A26]">Lad os snakke sammen</h1>
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
