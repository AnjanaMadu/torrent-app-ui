import { useEffect, useState } from "react";
import StatsBox from "./components/StatsBox";
import DownloadBox from "./components/DownoadBox";
import FileFolder from "./components/FileFolder";

import { BiAddToQueue } from "react-icons/bi";

const App = () => {
  const tmpStats = {
    cpuUsage: "0.00 %",
    memUsage: 342 * 1024 * 1024,
    memTotal: 4 * 1024 * 1024 * 1024,
    diskUsage: 12.4 * 1024 * 1024 * 1024,
    diskTotal: 64 * 1024 * 1024 * 1024,
  };
  const [stats, setStats] = useState(tmpStats);

  const tmpTorrents = [
    {
      name: "Pirates of the Caribbean",
      status: "Downloading",
      current: 362 * 1024 * 1024,
      total: 1.5 * 1024 * 1024 * 1024,
      speed: "5.2 MB/s",
    },
    {
      name: "Python for Beginners",
      status: "Seeding",
      current: 0,
      total: 0,
      speed: "0.0 B/s",
    },
  ];
  const [torrents, setTorrents] = useState(tmpTorrents);

  const tmpFiles = [
    {
      name: "Pirates of the Caribbean",
      size: 1.5 * 1024 * 1024 * 1024,
      isFile: false,
    },
    { name: "Cars (2025)", size: 924 * 1024 * 1024, isFile: false },
    { name: "Samples.txt", size: 4 * 1024 * 1024, isFile: true },
  ];
  const [files, setFiles] = useState([
    { name: "Loading...", size: 0, isFile: true },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFiles(tmpFiles);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center text-gray-100 mt-3">
          Web Torrent Streamer
        </h2>
        <div className="w-full mt-5 text-gray-100">
          <div className="flex flex-wrap">
            <StatsBox title="CPU Usage" desc={stats.cpuUsage} type="cpu" />
            <StatsBox
              title="Memory Usage"
              desc={`${stats.memUsage} / ${stats.memTotal}`}
              type="memory"
            />
            <StatsBox
              title="Disk "
              desc={`${stats.diskUsage} / ${stats.diskTotal}`}
              type="disk"
            />
          </div>
        </div>

        <div className="w-full mt-5 text-gray-100 bg-gray-900 rounded-lg">
          <h2 className="text-gray-100 text-xl font-bold pt-3 px-5">
            Torrents
          </h2>
          <div className="flex items-center p-4">
            <input
              type="text"
              placeholder="magnet:?xt=urn:btih:..."
              className="bg-gray-800 text-gray-100 px-4 py-2 rounded-lg w-full focus:outline-none"
            />
            <button className="bg-blue-500 text-gray-100 px-4 py-2 rounded-lg ml-4 hover:bg-blue-600 focus:outline-none">
              <BiAddToQueue className="text-white text-2xl" />
            </button>
          </div>

          <div className="p-4">
            {torrents.map((torrent) => (
              <DownloadBox {...torrent} key={Math.random().toString()} />
            ))}
          </div>
        </div>

        <div className="w-full mt-5 text-gray-100 bg-gray-900 rounded-lg">
          <h2 className="text-gray-100 text-xl font-bold pt-3 px-5">Files</h2>
          <div className="p-4">
            {files.length === 0 ? (
              <div className="flex justify-center items-center h-20">
                <p className="text-gray-100">No files</p>
              </div>
            ) : (
              files.map((file) => <FileFolder {...file} key={Math.random().toString()} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
