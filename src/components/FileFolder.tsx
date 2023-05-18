import { FaCloudDownloadAlt } from "react-icons/fa";
import { FiFile } from "react-icons/fi";
import { MdFolderZip } from "react-icons/md";
import { HiFolder } from "react-icons/hi";
import { useState } from "react";
import { humanBytes } from "../utils/Functions";

interface Props {
	name: string;
	size: number;
	isFile: boolean;
}

async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const FileFolder = ({ name, size, isFile }: Props) => {
	const [status, setStatus] = useState("");
	const [iconVisible, setIconVisible] = useState(true);

	const handleClick = async (e: any) => {
		const isFile = e.target.getAttribute("aria-is-file");
		const fileName = e.target.getAttribute("aria-file-name");
		if (isFile === "true") {
			window.open(`/${fileName}`, "_blank");
		} else {
			setStatus("Zipping...");
			setIconVisible(false);
			for (let i = 0; i < 101; i++) {
				await sleep(50);
				setStatus(`Zipping (${i}%)`);
			}
		}
	};

	return (
		<>
			<div className="flex flex-row sm:flex-row items-center justify-between bg-gray-900 text-white border border-none rounded-md m-2">
				<div className="flex items-center">
					<div className="h-7 w-7 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center">
						{isFile ? (
							<FiFile className="text-lg text-white" />
						) : (
							<HiFolder className="text-lg text-white" />
						)}
					</div>
					<div className="ml-2">
						<p className="text-base">
							{name}{" "}
							<span className="text-sm text-blue-500">
								({humanBytes(size)})
							</span>
						</p>
					</div>
				</div>
				<div className="px-1">
					<button
						aria-is-file={isFile}
						aria-file-name={name}
						className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-500"
						onClick={handleClick}
					>
						{isFile
							? iconVisible && (
									<FaCloudDownloadAlt className="text-2xl text-white" />
							  )
							: iconVisible && <MdFolderZip className="text-2xl text-white" />}
						{status}
					</button>
				</div>
			</div>
			<hr className="border-gray-800" />
		</>
	);
};

export default FileFolder;
