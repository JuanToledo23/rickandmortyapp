import { useEffect, useState } from "react";
import { getAllCharacters } from "../../services/characters";
import Table from "../../components/table/Table";
import TableInformation from "../../components/tableInformation/TableInformation";
import { InfoAllCharacters } from "../../types/infoCharacters";

function Home() {
  const [url, setUrl] = useState<string>("character");
  const [charactersInfo, setCharactersInfo] = useState<InfoAllCharacters>();

  useEffect(() => {
    if (url !== null) {
      getAllCharacters(url).then((response) => {
        setCharactersInfo(response.data);
      });
    }
  }, [url]);

  return (
    <div>
      {charactersInfo ? (
        <>
          <Table characters={charactersInfo.results} />
          <div className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4">
            <TableInformation
              min={charactersInfo.results[0].id}
              max={charactersInfo.results[charactersInfo.results.length - 1].id}
              total={charactersInfo.info.count}
            />
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <button
                  onClick={() => setUrl(charactersInfo.info.prev)}
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>
              <li>
                <button
                  onClick={() => setUrl(charactersInfo.info.next)}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div>loading...</div>
        </>
      )}
    </div>
  );
}

export default Home;
