import { Triangle } from "../ui/Triangle";

export const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-razga-bg relative overflow-hidden">
      <Triangle className="bottom-10 right-10 text-razga-accent" size={120} rotate={-15} delay={3} opacity={0.08} />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-12">
          <div className="space-y-8">
            <img 
              src="/images/logo razga.png" 
              alt="RÁZGA Logo" 
              className="h-12 md:h-16 mx-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-4">
              <h3 className="font-display font-bold text-3xl text-gray-900 serif italic">Mayara Barros</h3>
              <div className="space-y-1 opacity-50">
                <p className="text-xs uppercase tracking-[0.2em]">Fundadora do Movimento RÁZGA</p>
                <p className="text-xs uppercase tracking-[0.2em]">Sócia e cofundadora do Grupo Novo Horizonte</p>
                <p className="text-xs uppercase tracking-[0.2em]">Presidente da AMT/MS</p>
                <p className="text-xs uppercase tracking-[0.2em]">Vice-presidente do Instituto Novo Horizonte</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] opacity-40">
              <p>O RÁZGA faz parte de um ecossistema do Grupo Novo Horizonte</p>
              <a 
                href="https://gruponovohorizonte.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-100 transition-opacity hover:text-razga-accent underline underline-offset-4"
              >
                Conheça o Grupo Novo Horizonte
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.3em] opacity-40">
              <a href="https://mayarabarrosms.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity hover:text-razga-accent">Biografia</a>
              <a href="https://www.instagram.com/mayarabarrosms/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity hover:text-razga-accent">Instagram</a>
              <a href="https://open.spotify.com/playlist/6nptmfdusZ2sSvFzF4Rc9J?si=fNM1aFauQCGzIlNWk-f-qA&pi=OR8XY07QR-G0d&nd=1&dlsi=690a1ef1143a48ab" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity hover:text-razga-accent">Spotify</a>
              <a href="https://wa.me/5567996671390?text=%F0%9F%94%BASeja%20bem%20vinda%20%C3%A0%20sua%20travessia!" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity hover:text-razga-accent">Contato</a>
            </div>

            <p className="text-[10px] uppercase tracking-[0.4em] opacity-20">
              © {new Date().getFullYear()} RÁZGA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
