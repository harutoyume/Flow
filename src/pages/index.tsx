import Head from "next/head";
import Link from "next/link";
import AppNavigation from "@/components/AppNavigation";
import AppDescription from "@/components/AppDescription";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Flow Organizer</title>
      </Head>
      <main className="text-primary">
        <AppNavigation />

        <header className="p-4">
          <AppDescription />
        </header>
      </main>
    </>
  );
}
