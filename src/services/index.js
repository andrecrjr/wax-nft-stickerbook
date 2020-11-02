let ATOMIC_WAX_API = "https://wax.api.atomicassets.io/atomicassets/v1/";
let sticks_by_page = 6;
let collection = "crptomonkeys";

export const fetchUser = async (setUser, user) => {
  console.log(user);
  const response = await fetch(
    `${ATOMIC_WAX_API}accounts/${user.user}/${collection}`
  );
  const { data } = await response.json();
  setUser((oldata) => ({ ...oldata, data: data ? data.templates : [] }));
};

export const getTemplate = async (pagination = sticks_by_page, setData) => {
  const page = await fetch(
    `${ATOMIC_WAX_API}templates?collection_name=${collection}&page=${pagination}&limit=${sticks_by_page}&order=asc&sort=created`
  );
  const { data } = await page.json();
  setData(data);
};

export const getNumberTemplates = async (setPageData, setPaginate) => {
  try {
    let getNumber = await fetch(
      `${ATOMIC_WAX_API}templates?collection_name=${collection}&page=1&order=asc&sort=created`
    );
    const { data } = await getNumber.json();
    setPageData(data);
    setPaginate([...Array(Math.ceil(data.length / sticks_by_page)).keys()]);
  } catch (e) {
    console.log(e);
  }
};
