import Link from "next/link";

export function Footer() {
  return (
    <footer className="grid-in-footer bg-gray-800 text-white p-4">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Grupo Medico Quirúrgico de Baja
          California. |{" "}
          <Link href="/privacy" className="hover:text-gray-200">
            Politicas de Privacidad
          </Link>
        </p>
      </div>
    </footer>
  );
}
