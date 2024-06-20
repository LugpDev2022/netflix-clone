interface Props {
  image: string;
  title: string;
  releaseYear: string;
}

const ResultCard: React.FC<Props> = ({ image, releaseYear, title }) => {
  return (
    <article>
      <img src={image} alt={`${title} Poster`} />

      <div>
        <h2>{title}</h2>
        <time dateTime={releaseYear}>{releaseYear}</time>
      </div>
    </article>
  );
};

export default ResultCard;
