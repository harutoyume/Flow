import Head from "next/head";
import AppNavigation from "@/components/App/AppNavigation";
import AppDescription from "@/components/App/AppDescription";
import EventsElement from "@/components/Events/EventsElement";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Flow Organizer</title>
      </Head>
      <main>
        <AppNavigation />

        <header className="px-4 py-24">
          <div className="w-full flex flex-row justify-between gap-4 max-sm:flex-col">
            <div className="w-full">
              <EventsElement />
            </div>
            <div className="w-full">
              <AppDescription />
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
