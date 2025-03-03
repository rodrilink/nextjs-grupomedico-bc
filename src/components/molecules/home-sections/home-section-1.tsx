"use client";

import Image from "next/image";

export const SectionOne = () => {
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
