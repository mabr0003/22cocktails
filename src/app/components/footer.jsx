const Footer = () => {
  return (
    <footer className="bg-[var(--secondbg)] py-6">
      <div className="content flex flex-col md:flex-row justify-between gap-4 border-b py-10">
        <div className="text-center md:text-left">
          <h3>Åbningstider</h3>
          <div className="flex flex-col text-sm">
            <span>Man-fre: 09-17</span>
            <span>Weekend & Helligdage: Lukket</span>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3>Kontaktinfo</h3>
          <div className="flex flex-col text-sm">
            <a href="tel:#">+45 88 88 88 88</a>
            <a href="mailto:#">@eksempel@eksmepel.com</a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3>Links</h3>
          <div className="flex flex-col text-sm">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
      <div className="content">
        <p className="text-xs font-extralight pt-2">Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet lobortis.</p>
      </div>
    </footer>
  );
};

export default Footer;
