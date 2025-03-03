"use client";

import { useRef } from "react";

export function SectionFour() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const doctors = [
    {
      name: "Dr. Gilberto Lopez Muñoz",
      credential: "Ced. Prof. 4776379",
      specialty: "Médico Cirujano y Partero",
    },
    {
      name: "Dr. Francisco Ojeda Madrid",
      credential: "Ced. Prof. 2563975",
      specialty: "Cirujano General",
    },
    {
      name: "Dr. Daniel Vázquez Blanquel",
      credential: "Ced. Prof. Gral. 4023710",
      specialty: "Ginecología y Obstetricia",
    },
    {
      name: "Dr. Sebastián Jáuregui Vinlegra",
      credential: "Ced. Prof. 5687367",
      specialty: "Anestesiología",
    },
    {
      name: "Dr. Antonio Vicente Montes",
      credential: "Ced. Prof. N/A",
      specialty: "Ginecología y Obstetricia",
    },
    {
      name: "Dr. Javier Iñiguez Gaxiola",
      credential: "Ced. Prof. 4774863",
      specialty: "Médico Cirujano",
    },
  ];

  return (
    <div ref={sectionRef} className="group h-screen relative overflow-hidden">
      <div className="relative container mx-auto h-full flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Dr. Gilberto López Muñoz
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Estudios Universitarios: Universidad Autónoma de Baja California
              “UABC-Facultad de Medicina” (1993-2002). Internado: Hospital
              General de Mexicali. (1 de Julio 2002 al 30 de Junio del 2003).
            </p>
            <p className="text-sm text-gray-600 mt-2">
              ISSSTECALI (Abril 2014 a Fecha actual). Solórzano Jacques y
              Asociados, S.C. (Enero 2012 a Fecha actual). Medico en Red de
              General de Salud (Enero 2012 a fecha actual).
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Instalaciones Hospital
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Contamos con instalaciones hospitalarias en las mejores clínicas
              de Mexicali.
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Equipo Medico
            </h3>
            {doctors.map((doctor, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-gray-800">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{doctor.specialty}</p>
                <p className="text-sm text-gray-500">{doctor.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
