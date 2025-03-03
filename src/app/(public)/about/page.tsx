export default function AboutPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-32">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Grupo Medico Quirúrgico de Baja California.
        </h1>
        <h2>Dr. Gilberto López Muñoz MISION:</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Proporcionar asistencia médica/quirúrgica de calidad garantizando la
          seguridad de nuestros pacientes a través de la experiencia,
          profesionalismo, ética y humildad que ofrece nuestro grupo médico
          quirúrgico. VISION: Ser un grupo médico quirúrgico que proporcione
          atención medica y procedimientos quirúrgicos enfocados a la excelencia
          de tal manera que los mismos pacientes recomienden nuestros servicios.
        </p>
      </div>
    </section>
  );
}
