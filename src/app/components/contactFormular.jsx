"use client";
import { useState } from "react";
const ContactFormular = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const response = await fetch("/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Din email er sendt afsted - vi vender tilbage hurtigst muligt!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("Der opstod en fejl - prøv igen");
    }

    setLoading(false);
  };
  return (
    <div className="bg-second py-6 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 gap-x-20 md:grid grid-cols-4">
        <input type="text" name="name" placeholder="Navn" value={formData.name} onChange={handleChange} required className="p-2 col-start-1 col-span-2 row-start-1 rounded bg-[var(--secondbg)] shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="p-2 col-start-1 col-span-2 row-start-2 rounded bg-[var(--secondbg)] shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]" />
        <input type="tel" name="subject" placeholder="Telefon" value={formData.subject} onChange={handleChange} required className="p-2 col-start-1 col-span-2 row-start-3 rounded bg-[var(--secondbg)] shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]" />
        <textarea name="message" placeholder="Din besked..." value={formData.message} onChange={handleChange} required className="p-2 col-start-3 row-start-1 row-span-4 col-span-2 rounded bg-[var(--secondbg)] resize-none shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]"></textarea>
        <button type="submit" disabled={loading} className="cursor-pointer col-start-1 amatic bg-[var(--action)] text-white text-2xl px-6 py-2 -mb-2 border-2 border-[var(--action)] hover:font-bold hover:bg-transparent hover:text-[var(--text)] transition-all duration-150">
          {loading ? "Sender..." : "Send"}
        </button>
        {status && <p className="col-span-2 p-3">{status}</p>}
      </form>
    </div>
  );
};

export default ContactFormular;
