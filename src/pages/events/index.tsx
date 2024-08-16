import Head from "next/head";
import AppNavigation from "@/components/App/AppNavigation";
import EventsElement from "@/components/Events/EventsElement";
import AppFooter from "@/components/App/AppFooter";

export default function Events() {
  return (
    <>
      <Head>
        <title>The Flow Organizer</title>
      </Head>
      <div className="relative min-h-screen">
        <header>
          <AppNavigation />
        </header>
        <main className="px-4 py-24 flex flex-col gap-y-4">
          <div className="w-full">
            <EventsElement />
          </div>
        </main>
        <AppFooter />
      </div>
    </>
  );
}
