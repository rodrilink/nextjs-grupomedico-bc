export default function AboutPage() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-32">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          ¿Quiénes Somos?
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Somos un grupo de médicos especialistas en cirugía general y
          laparoscópica con más de 20 años de experiencia.
        </p>
      </div>
    </section>
  );
}
