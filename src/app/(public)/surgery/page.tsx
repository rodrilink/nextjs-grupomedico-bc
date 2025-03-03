import { SURGERIES, PROMOTIONS } from "@/app/constants";
import Image from "next/image";

export default function SurgeryPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-32 gap-4">
      {/* Heading and Logo */}
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Cirugías y Promociones
      </h1>
      <Image
        src="/logo.png"
        alt="Grupo Medico Quirúrgico de Baja California."
        width={200}
        height={76}
        priority={true}
      />

      {/* Two-Column Grid for Lists */}
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Surgeries List */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Lista de Cirugías
            </h2>
            <ul className="list-disc list-inside space-y-3">
              {SURGERIES.map((item, index) => (
                <li key={index} className="text-gray-700 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Promotions List */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Lista de Promociones
            </h2>
            <ul className="list-disc list-inside space-y-3">
              {PROMOTIONS.map((item, index) => (
                <li key={index} className="text-gray-700 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
