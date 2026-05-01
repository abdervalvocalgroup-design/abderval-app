import { albums } from "../data/musicData";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Abderval Music</h1>

      <div className="grid gap-4">
        {albums.map((album) => (
          <Link key={album.id} to={`/album/${album.id}`}>
            <div className="p-4 bg-gray-800 rounded-lg">
              <img src={album.cover} alt={album.title} />
              <h2>{album.title}</h2>
            </div>
          </Link>
        ))}
      </div>

      <Link to="/links" className="block mt-6 text-blue-400">
        View Links
      </Link>
    </div>
  );
}
