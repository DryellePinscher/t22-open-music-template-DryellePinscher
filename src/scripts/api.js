export const newList = async () => {
  const list = await fetch("https://openmusic-fake-api.onrender.com/api/musics");
  return list.json();
};