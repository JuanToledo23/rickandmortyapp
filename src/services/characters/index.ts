import instance from '../client';

export async function getAllCharacters(url: string) {
    return await instance.get(url);
}

export async function getOneCharacter(id: string) {
    return await instance.get('character/' + id);
}
