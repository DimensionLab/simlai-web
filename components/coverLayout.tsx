import Footer from "./Footer";
import Header from "./header";

export default function CoverLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col min-h-screen w-full justify-between">
      <Header />
      <section className="flex flex-col items-center justify-center h-full">
        {children}
      </section>
      <Footer />
    </main>
  );
}