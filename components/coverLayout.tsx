import Footer from "./Footer";
import Header from "./header";

export default function CoverLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col min-h-screen w-full justify-between">
      <Header />
      <div
        className="absolute top-0 w-full bg-cover bg-center bg-no-repeat text-center z-[-1]"
        style={{
          backgroundImage:
            "url('/assets/simlai/page-bg-transparent.webp')",
          height: "100%",
        }}
      ></div>
      <section className="flex flex-col items-center justify-center h-full">
        {children}
      </section>
      <Footer />
    </main>
  );
}