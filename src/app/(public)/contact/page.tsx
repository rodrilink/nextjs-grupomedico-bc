import { ContactForm } from "@/components/molecules/contact-form/contact-form";

export default function ContactPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-32">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <ContactForm />
    </section>
  );
}
