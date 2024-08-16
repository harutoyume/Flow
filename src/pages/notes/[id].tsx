import { useRouter } from "next/router";
import Head from "next/head";
import AppNavigation from "@/components/App/AppNavigation";
import NotesNoteCard from "@/components/Notes/NotesNoteCard";

export default function Note() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>The Flow Organizer</title>
      </Head>
      <div className="relative min-h-screen">
        <header>
          <AppNavigation />
        </header>
        <main className="px-4 pt-24 pb-8 flex flex-col gap-y-4">
          <NotesNoteCard id={id} />
        </main>
      </div>
    </>
  );
}
