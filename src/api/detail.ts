export const fetchDetail = (id: string | undefined) => {
    return fetch(
      `https://disney_api.nomadcoders.workers.dev/characters/${id}`
    ).then((res) => res.json());
  };
  