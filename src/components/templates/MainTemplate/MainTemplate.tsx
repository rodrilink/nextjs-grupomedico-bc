import { Header, Footer } from "@/components/organisms";

type MainTemplateProps = {
  children: React.ReactNode;
  className?: string;
};

export const MainTemplate = ({ children }: MainTemplateProps) => (
  <div className="min-h-screen grid grid-areas-layout grid-cols-layout grid-rows-layout">
    <Header />
    <main className="grid-in-main">{children}</main>
    <Footer />
  </div>
);
