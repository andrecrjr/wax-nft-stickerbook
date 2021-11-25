let ATOMIC_WAX_API = "https://wax.api.atomicassets.io/atomicassets/v1/";
let sticks_by_page = process.env.REACT_APP_STICKER_PER_PAGE;
let collection = process.env.REACT_APP_NAME_COLLECTION;

export const fetchUser = async (user) => {
	const response = await fetch(
		`${ATOMIC_WAX_API}accounts/${user}/${collection}`
	);
	const { data } = await response.json();

	return data;
};

export const getTemplate = async (
	pagination = sticks_by_page,
	setData,
	schemaName = ""
) => {
	try {
		let paginator = {};
		if (!sessionStorage.getItem(pagination)) {
			const page = await fetch(
				`${ATOMIC_WAX_API}templates?collection_name=${collection}&page=${pagination}&limit=${sticks_by_page}&order=asc&sort=created`
			);
			let { data } = await page.json();
			if (schemaName.length > 0) {
				data.filter((item) => item.schema.schema_name === schemaName);
			}
			paginator[pagination - 1] = data;
			sessionStorage.setItem(pagination, JSON.stringify(data));
		} else {
			paginator[pagination - 1] = JSON.parse(
				sessionStorage.getItem(pagination)
			);
		}
		setData((oldPage) => ({ ...oldPage, ...paginator }));
	} catch (error) {
		console.error(error);
	}
};

export const getInitialConfig = async (schemaName = "") => {
	try {
		let getCards = await fetch(
			`${ATOMIC_WAX_API}templates?collection_name=${collection}&page=1&order=asc&sort=created`
		);
		let { data } = await getCards.json();
		if (schemaName.length > 0) {
			data = data.filter((item) => item.schema.schema_name === schemaName);
		}

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

export const getCollectionSchemas = async () => {
	try {
		const response = await fetch(
			`${ATOMIC_WAX_API}schemas?collection_name=${collection}`
		);
		console.log(response);
	} catch (error) {}
};
