import { useParams } from "react-router-dom";
import { albums } from "../data/musicData";

export default function Album() {
  const { id } = useParams();
  const album = albums.find((a) => a.id === id);

  if (!album) return <p>Album not found</p>;

  return (
    <div className="p-6">
      <img src={album.cover} alt={album.title} />

      <h1>{album.title}</h1>

      {album.tracks.map((track, i) => (
        <div key={i}>
          <p>{track.title}</p>

          <audio controls>
            <source src={track.file} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
}
