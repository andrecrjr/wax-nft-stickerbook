import React, { useCallback, useEffect, useReducer } from "react";
import { getInitialConfig, fetchUser } from "../services";
import { useParams } from "react-router";
import { Share } from "../components/Share";
import { AlbumContainer } from "../components/Album";
import Layout from "../components/Layout";
import { UserContext } from "../components/contexts";
import { NFTReducer, UserStateReducer } from "../reducers";
import ReactGA from "react-ga";

export default function Album() {
	const params = useParams();
	const [page, dispatchAlbumPage] = useReducer(NFTReducer, {
		numberPages: [],
		collectionImage: "",
	});
	const [userData, dispatchUser] = useReducer(UserStateReducer, {
		user: params.username || "",
		data: [],
	});

	const getInitial = useCallback(async () => {
		const initialConfig = await getInitialConfig();
		dispatchAlbumPage({ type: "SET_INITIAL_CONFIG", payload: initialConfig });
	}, []);

	const fetchUserData = useCallback(async () => {
		const userWaxData = await fetchUser(userData.user);
		dispatchUser({ type: "SET_USER", payload: userWaxData || [] });
	}, [userData]);

	useEffect(() => {
		if (!window.location.pathname.includes("rd2aw.wam")) {
			ReactGA.pageview(window.location.pathname);
		}
		if (Object.keys(params).length > 0) {
			fetchUserData(params.username);
		}
	}, []);

	useEffect(() => {
		getInitial();
	}, [getInitial]);

	return (
		<UserContext.Provider value={{ userData, dispatchUser, page }}>
			<Layout>
				<AlbumContainer />
				{userData.data.length > 0 && (
					<Share user={userData.user} params={params} />
				)}
			</Layout>
		</UserContext.Provider>
	);
}
