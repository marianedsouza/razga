import { Share2, Check, MessageCircle, Instagram, Copy, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const shareUrl = window.location.href;
  const shareText = "Você não está perdida. Você foi silenciada. Conheça o RÁZGA.";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 2000);
    } catch (err) {
      console.error("Error copying:", err);
    }
  };

  const shareOptions = [
    {
      name: "WhatsApp",
      icon: <MessageCircle size={18} />,
      action: () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        window.open(url, "_blank");
        setIsOpen(false);
      },
      color: "hover:bg-green-500 hover:text-white"
    },
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      action: handleCopy,
      label: "Copiar Link",
      color: "hover:bg-pink-500 hover:text-white"
    },
    {
      name: "Copiar Link",
      icon: <Copy size={18} />,
      action: handleCopy,
      color: "hover:bg-razga-accent hover:text-white"
    }
  ];

  return (
    <div className="fixed top-6 right-6 z-[100]" ref={menuRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md border border-razga-accent/20 rounded-full shadow-lg text-razga-accent hover:shadow-xl transition-all duration-300"
      >
        {isOpen ? <X size={18} /> : <Share2 size={18} />}
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
          {isOpen ? "Fechar" : "Compartilhar"}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-14 right-0 w-56 bg-white/95 backdrop-blur-xl border border-razga-accent/10 rounded-2xl shadow-2xl overflow-hidden p-2"
          >
            <div className="space-y-1">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={option.action}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-razga-ink/70 transition-all duration-300 ${option.color}`}
                >
                  <span className="opacity-70">{option.icon}</span>
                  <div className="flex flex-col items-start leading-none">
                    <span>{option.name}</span>
                    {option.label && <span className="text-[10px] opacity-50 mt-1">{option.label}</span>}
                  </div>
                  {option.name === "Copiar Link" && copied && (
                    <Check size={14} className="ml-auto text-green-500" />
                  )}
                </button>
              ))}
            </div>
            {copied && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 py-2 px-4 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest text-center rounded-lg"
              >
                Link Copiado!
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
