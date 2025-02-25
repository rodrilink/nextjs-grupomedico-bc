import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

type MainTemplateProps = {
  children: React.ReactNode;
  className?: string;
};

export const MainTemplate = ({ children }: MainTemplateProps) => (
  <div className="min-h-screen grid grid-areas-layout grid-cols-layout grid-rows-layout md:grid-areas-mobile-layout">
    <Header />
    <main className="grid-areas-[main] grid-in-main p-4">{children}</main>
    <Footer />
  </div>
);
