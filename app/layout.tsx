'use client';

import { Nunito } from 'next/font/google';
import Link from 'next/link';

import FavoritableImage from '@/components/FavoritableImage';
import { useFavorites } from '@/state/favorite-store';

// import { Provider as ProviderFavorite, useFavorites } from '@/state/favorite-context';

import './globals.css';

const nunito = Nunito({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js',
// };

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  const favorites = useFavorites((state) => state.favorites);

  return (
    <html lang="en">
      <body className={`${nunito.className} max-w-screen-sm m-auto p-4`}>
        <main className="flex flex-col gap-6">
          <div>
            <Link href="/">
              <h1 className="font-bold text-3xl mb-2">Dog Breeds</h1>
            </Link>
            <nav>
              <ul className="flex gap-4">
                <li>
                  <Link href="/beagle">Beagle</Link>
                </li>
                <li>
                  <Link href="/collie">Collie</Link>
                </li>
                <li>
                  <Link href="/husky">Husky</Link>
                </li>
                <li>
                  <Link href="/labrador">Labrador</Link>
                </li>
                <li>
                  <Link href="/malamute">Malamute</Link>
                </li>
                <li>
                  <Link href="/retriever">Retriever</Link>
                </li>
              </ul>
            </nav>
          </div>
          <article>{children}</article>
          <hr />
          <article>
            <h2 className="font-bold text-gray-700 text-2xl">Favorites</h2>
            {favorites.length === 0 ? (
              <p>You have no favorites yet!!! :(</p>
            ) : (
              <section
                className="grid gap-4"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))',
                }}
              >
                {favorites.map((img, i) => {
                  return <FavoritableImage src={img} key={i} />;
                })}
              </section>
            )}
          </article>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;

// export default function RootLayoutContainer(props: Props) {
//   return (
//     <ProviderFavorite>
//       <RootLayout {...props} />
//     </ProviderFavorite>
//   );
// }
