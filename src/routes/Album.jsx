import React, { useCallback, useEffect, useReducer } from "react";
import { getInitialConfig, fetchUser } from "../services";
import { useParams } from "react-router";
import { Share } from "../components/Share";
import { AlbumContainer } from "../components/Album";
import Layout from "../components/Layout";
import { UserContext } from "../components/contexts";
import { NFTReducer, UserStateReducer } from "../reducers";

export default function Album() {
  const params = useParams();
  const [page, dispatchAlbumPage] = useReducer(NFTReducer, {
    numberPages: [],
    collectionImage: "",
  });
  const [userData, dispatchUser] = useReducer(UserStateReducer, {
    user: "",
    data: [],
  });

  const albumRef = React.createRef();
  const getInitial = useCallback(async () => {
    const numberPage = await getInitialConfig();

    dispatchAlbumPage({ type: "SET_INITIAL_CONFIG", payload: numberPage });
  }, []);

  const fetchUserData = useCallback(async () => {
    const userWaxData = await fetchUser(userData);
    dispatchUser({ type: "SET_USER", payload: userWaxData || [] });
  }, [userData]);

  useEffect(() => {
    if (Object.keys(params).length > 0) {
      fetchUserData();
    }
  }, [fetchUserData, params]);

  useEffect(() => {
    getInitial();
  }, [getInitial]);
  return (
    <UserContext.Provider value={{ userData, dispatchUser, page }}>
      <Layout>
        <AlbumContainer ref={albumRef} />
        {userData.data.length > 0 && (
          <Share user={userData.user} params={params} />
        )}
      </Layout>
    </UserContext.Provider>
  );
}
