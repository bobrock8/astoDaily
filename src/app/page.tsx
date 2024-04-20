import Image from "next/image";
import Navigation from "./_components/navigation";
import Logo from "./_components/logo";
import { getApod } from "./_api/apod";

export default function Home() {

  getApod();

  return (
    <div>
      <header className="flex flex-row items-center justify-between p-4">
        <Logo />
        <Navigation />
      </header>
      <div className="flex flex-row p-4">
        <main className="basis-2/3">
          <article>
            <h1>Photo of the day2</h1>
          </article>
        </main>
        <aside className="basis-1/3">Last 3 days photos</aside>
      </div>
      <footer></footer>
    </div>
  );
}
