import { TESTIMONIALS } from "@/app/constants";
import Image from "next/image";

export default function TestimoniesPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-32 gap-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Testimonios
      </h1>

      {/* Testimonials Grid */}
      <div className="max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800">
                  {testimonial.name}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                <p className="text-gray-700">{testimonial.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
