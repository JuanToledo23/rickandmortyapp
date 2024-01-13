import { Link } from "react-router-dom";
import { Character } from "../../types/infoCharacters";

type TableProps = {
  characters?: Array<Character>;
};

function Table({ characters }: TableProps) {

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Specie
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              More
            </th>
          </tr>
        </thead>
        <tbody>
          {characters?.map((item: Character) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={item.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.image}
                      className="rounded-full mr-4"
                      width={40}
                    />
                    {item.name}
                  </div>
                </th>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4">{item.species}</td>
                <td className="px-6 py-4">{item.gender}</td>
                <td className="px-6 py-4">
                  <Link to={"detail/" + item.id}>
                    <label className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                      View
                    </label>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
