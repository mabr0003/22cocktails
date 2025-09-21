"use client";
import { useState } from "react";
const ContactFormular = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    people: "",
    date: "",
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
      setStatus("Din besked er sendt afsted - vi vender tilbage hurtigst muligt!");
      setFormData({ name: "", email: "", phone: "", people: "", date: "", message: "" });
    } else {
      setStatus("Der opstod en fejl - prøv igen");
    }

    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 gap-x-20 md:grid grid-cols-4">
      <div className="flex flex-col p-2 col-start-1 col-span-2 row-start-1 rounded">
        <label htmlFor="txtName">Navn *</label>
        <input type="text" name="name" id="txtName" placeholder="Skriv dit navn..." value={formData.name} onChange={handleChange} required />
      </div>
      <div className="flex flex-col p-2 col-start-1 col-span-2 row-start-2 rounded">
        <label htmlFor="txtEmail">Email *</label>
        <input type="email" name="email" id="txtEmail" placeholder="Skriv din email..." value={formData.email} onChange={handleChange} required />
      </div>
      <div className="flex flex-col p-2 col-start-1 col-span-2 row-start-3 rounded">
        <label htmlFor="txtPhone">Telefon *</label>
        <input type="tel" name="phone" id="txtPhone" placeholder="Skriv dit telefonnummer.." value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="flex flex-col p-2 col-start-1 col-span-2 row-start-4 rounded ">
        <label htmlFor="txtPeople">Forventet antal gæster</label>
        <input type="number" name="people" id="txtPeople" placeholder="0" value={formData.people} onChange={handleChange} />
      </div>
      <div className="flex flex-col p-2 col-start-1 col-span-2 row-start-5 rounded ">
        <label htmlFor="txtDate">Dato for arrangement</label>
        <input type="date" name="date" id="txtDate" value={formData.date} onChange={handleChange} />
      </div>
      <textarea name="message" placeholder="Yderlige kommentarer..." value={formData.message} onChange={handleChange} className="p-2 col-start-3 row-start-1 row-span-4 col-span-2 rounded bg-[var(--secondbg)] resize-none shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]"></textarea>
      <button type="submit" disabled={loading} className="cursor-pointer col-start-1 amatic bg-[var(--action)] text-[var(--text)] font-bold text-2xl px-6 py-2 border-2 border-[var(--action)] hover:font-bold hover:bg-transparent hover:text-[var(--text)] transition-all duration-150">
        {loading ? "Sender..." : "Send"}
      </button>
      {status && <p className="col-span-2 p-3">{status}</p>}
    </form>
  );
};

export default ContactFormular;
