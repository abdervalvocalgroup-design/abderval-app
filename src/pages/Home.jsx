import { albums } from "../data/musicData";
import AlbumCard from "../components/AlbumCard";

export default function Home() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Albums</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {albums.map((album, index) => (
          <AlbumCard
            key={album.id}
            album={album}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}