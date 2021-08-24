let ATOMIC_WAX_API = "https://wax.api.atomicassets.io/atomicassets/v1/";
let sticks_by_page = 6;
let collection = process.env.REACT_APP_NAME_COLLECTION;

export const fetchUser = async (user) => {
  const response = await fetch(
    `${ATOMIC_WAX_API}accounts/${user}/${collection}`
  );
  const { data } = await response.json();
  return data;
};

export const getTemplate = async (pagination = sticks_by_page, setData) => {
  let paginator = {};
  if (!sessionStorage.getItem(pagination)) {
    const page = await fetch(
      `${ATOMIC_WAX_API}templates?collection_name=${collection}&page=${pagination}&limit=${sticks_by_page}&order=asc&sort=created`
    );
    const { data } = await page.json();
    paginator[pagination - 1] = data;
    sessionStorage.setItem(pagination, JSON.stringify(data));
  } else {
    paginator[pagination - 1] = JSON.parse(sessionStorage.getItem(pagination));
  }
  setData((oldPage) => ({ ...oldPage, ...paginator }));
};

export const getInitialConfig = async () => {
  try {
    let getCards = await fetch(
      `${ATOMIC_WAX_API}templates?collection_name=${collection}&page=1&order=asc&sort=created`
    );
    const { data } = await getCards.json();

    return {
      pagesNumber: [...Array(Math.ceil(data.length / sticks_by_page)).keys()],
      collectionImage: data[0].collection.img,
    };
  } catch (e) {
    console.error(e);
  }
};

export const getCardTemplate = async (cardId) => {
  try {
    const response = await fetch(
      `${ATOMIC_WAX_API}templates/${collection}/${cardId}`
    );
    const { data } = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
