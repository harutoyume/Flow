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
      <main className="text-primary">
        <AppNavigation />

        <header className="px-4 py-24">
          <div className="w-full flex flex-row justify-between gap-x-4">
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
