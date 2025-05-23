export default function About() {
  return (
    <main>
      <section>
        <div className="content">
          <img src="/images/herodummy.png" className="w-full h-96 mt-20 object-cover" />
        </div>
      </section>
      <section>
        <div className="content py-20">
          <h1 className="text-7xl md:text-9xl">Om 22 Cocktails</h1>
          <div className="md:grid grid-cols-[2fr_1fr]">
            <p className="max-w-prose">
              Hos 22 Cocktails brænder vi for at levere smagfulde oplevelser – én cocktail ad gangen. Vi er specialister i cocktail catering og skaber unikke barløsninger til events, fester og firmaarrangementer over hele landet. Vores passion er at kombinere kvalitet, kreativitet og god service. Derfor arbejder vi kun med de bedste ingredienser, professionelle bartendere og en skræddersyet tilgang til hvert eneste event. Uanset om du drømmer om klassiske cocktails med et twist eller moderne signaturdrinks, sørger vi for at sætte prikken over i’et til din fest. Bag 22 Cocktails står et engageret team med mange års erfaring i både bar- og eventbranchen. Vi tror på, at en god cocktail ikke bare smager godt – den skaber stemning, samler mennesker og gør aftenen mindeværdig. Vil du give dine
              gæster en oplevelse ud over det sædvanlige? Så lad 22 Cocktails tage hånd om baren.
            </p>
            <img className="justify-self-center -rotate-45" width={250} src="/images/drinkdummy.png" />
          </div>
          <div className="md:grid grid-cols-[1fr_2fr] gap-6">
            <div>
              <h1 className="text-7xl md:text-9xl">Vores historie</h1>
              <p className="max-w-prose">
                22 Cocktails opstod ud af ønsket om at gøre cocktailoplevelsen til en central del af enhver fest. Idéen blev født efter flere års erfaring bag baren til alt fra natklubber og cocktailbarer til private events. Det stod hurtigt klart, at der manglede noget: en professionel, fleksibel og stilfuld løsning, hvor kvalitetscocktails og personlig service kunne bringes direkte ud til gæsterne – uanset hvor festen blev holdt. Navnet 22 Cocktails blev valgt som et symbol på variation, kreativitet og præcision – og som en påmindelse om, at den perfekte fest starter med det rigtige udvalg i glasset. Siden da har vi serveret tusindvis af cocktails og hjulpet med at løfte stemningen til både intime sammenkomster og store firmaevents. Hver eneste drink vi mixer, bærer præg af kærlighed til
                håndværket, smag for detaljer og ambitionen om at skabe noget, gæsterne husker.
              </p>
            </div>
            <img className="justify-self-center rotate-45 -order-1" width={250} src="/images/drinkdummy.png" />
          </div>
        </div>
      </section>
    </main>
  );
}
