import { Navigation } from "@/components/molecules";

export const Header = () => {
  return (
    <header className="grid-in-header fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm min-h-28">
      <Navigation />
    </header>
  );
};
