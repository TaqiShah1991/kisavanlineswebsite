import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "923328521272";
  const message = "Hi Kisa Van Lines, I would like to inquire about your services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">1</span>
    </button>
  );
};

export default WhatsAppButton;
