"use client";

import { useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

const SectionOne = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/slides/1.jpg"
          alt="Medical Background"
          fill
          className="object-cover object-center"
          quality={75}
          priority
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text Content */}
      <div className="relative z-5 text-center text-white max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Grupo Medico Quirúrgico de Baja California
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 drop-shadow">
          Dr. Gilberto López Muñoz
          <br />
          <br />
          <span className="font-semibold">MISIÓN:</span> Proporcionar asistencia
          médica/quirúrgica de calidad garantizando la seguridad de nuestros
          pacientes a través de la experiencia, profesionalismo, ética y
          humildad que ofrece nuestro grupo médico quirúrgico.
          <br />
          <br />
          <span className="font-semibold">VISIÓN:</span> Ser un grupo médico
          quirúrgico que proporcione atención médica y procedimientos
          quirúrgicos enfocados a la excelencia de tal manera que los mismos
          pacientes recomienden nuestros servicios.
        </p>
      </div>
    </>
  );
};

const SectionTwo = () => {
  return (
    <>
      <h1>Grupo Médico Quirúrgico</h1>
      <p>
        Inicia a principios del 2009,en la ciudad de Mexicali B.C.,. Realizando
        sus procedimientos quirúrgicos en las diferentes clínicas y hospitales
        reconocidos de esta entidad. Conformado por médicos especialistas
        (Ginecólogos, Ortopedistas, Cirujanos Generales, Pediatras, Cirujanos
        Plásticos, Cirujanos Bariatricos, Otorrinolaringólogos, Anestesiólogos y
        Médicos Generales). Ofreciendo costos accesibles a la comunidad, gracias
        a esto hemos logrado que nuestro número de pacientes estén cada día en
        aumento, por lo que actualmente seguimos esforzándonos para atender las
        necesidades de nuestros pacientes, con la humildad, honestidad,
        experiencia y profesionalismo que nos caracteriza.
      </p>
    </>
  );
};

const SectionThree = () => {
  return (
    <>
      <h1>Grupo Medico Quirúrgico de Baja California.</h1>
      <p>
        Dr. Gilberto López Muñoz MISION: Proporcionar asistencia
        médica/quirúrgica de calidad garantizando la seguridad de nuestros
        pacientes a través de la experiencia, profesionalismo, ética y humildad
        que ofrece nuestro grupo médico quirúrgico. VISION: Ser un grupo médico
        quirúrgico que proporcione atención medica y procedimientos quirúrgicos
        enfocados a la excelencia de tal manera que los mismos pacientes
        recomienden nuestros servicios.
      </p>
    </>
  );
};

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

export function Sections() {
  const sections = [
    { ref: useRef<HTMLDivElement>(null), component: <SectionOne /> },
    { ref: useRef<HTMLDivElement>(null), component: <SectionTwo /> },
    { ref: useRef<HTMLDivElement>(null), component: <SectionThree /> },
    { ref: useRef<HTMLDivElement>(null), component: <SectionFour /> },
  ];

  const scrollToSection = (index: number) => {
    sections[index]?.ref?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {sections.map((section, index) => (
        <section
          key={index}
          ref={section.ref}
          className={`group w-full flex flex-col items-center justify-center relative  ${
            index === sections.length - 1
              ? "h-[calc(100vh-10vh)] pt-24"
              : "h-screen pt-28"
          }`}
        >
          {section.component}

          {/* Navigation Buttons - Visible on section hover */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => scrollToSection((index - 1 + 4) % 4)}
              className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronUp className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => scrollToSection((index + 1) % 4)}
              className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronDown className="w-6 h-6 text-white" />
            </button>
          </div>
        </section>
      ))}
    </>
  );
}
