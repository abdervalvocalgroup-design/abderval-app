import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AlbumCard({ album, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition duration-300">
      <Link to={`/album/${album.id}`}>
        <div className="overflow-hidden">
          <img
  src={album.cover}
  alt={album.title}
  className="w-full h-52 object-cover hover:scale-110 transition duration-500"
/>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold">{album.title}</h2>
          <p className="text-sm text-gray-400">{album.year}</p>
        </div>
      </Link>
    </motion.div>
  );
}