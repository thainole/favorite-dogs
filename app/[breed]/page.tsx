import FavoritableImage from '@/components/FavoritableImage';

interface Props {
  params: {
    breed: string;
  };
}

const BreedPage = async ({ params: { breed } }: Props) => {
  const { message: images } = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/10`
  ).then((res) => res.json() as Promise<{ message: string[] }>);

  return (
    <section
      className="grid gap-4"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))' }}
    >
      {images.map((img, i) => {
        return <FavoritableImage src={img} key={i} />;
      })}
    </section>
  );
};

export default BreedPage;
