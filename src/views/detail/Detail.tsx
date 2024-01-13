import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneCharacter } from "../../services/characters";
import { Character } from "../../types/infoCharacters";

function Detail() {
  const { characterId } = useParams();

  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    if (characterId) {
      getOneCharacter(characterId).then((response) => {
        setCharacter(response.data);
      });
    }
  }, [characterId]);

  return (
    <div>
      {character ? (
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <div className="flex items-center pl-10">
            <div className="rounded-full w-14 h-14 mr-4 flex justify-center items-center text-3xl font-semibold">
              <img
                src={character.image}
                alt={character.image}
                className="rounded-full mr-4"
                width={60}
              />
            </div>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {character.name}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Species</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {character.species}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Type</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {character.type}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Gender</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {character.gender}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Created</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {character.created.split("T")[0]}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Origin</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {character.origin.name}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Location</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {character.location.name}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <>
          <div>loading...</div>
        </>
      )}
    </div>
  );
}

export default Detail;
