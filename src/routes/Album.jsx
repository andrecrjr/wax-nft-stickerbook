import React, { useState, useCallback, useEffect } from "react";
import { getNumberTemplates, fetchUser } from "../services";
import { useParams } from "react-router";
import { Share } from "../components/Share";
import { AlbumContainer } from "../components/Album";
import Layout from "../components/Layout";
import { UserContext } from "../components/contexts";

export default function Album() {
  const params = useParams();
  const [page, setPaginate] = useState({});
  const [pageData, setPageData] = useState({});
  const [user, setUser] = useState({ user: params.username || "", data: [] });
  const albumRef = React.createRef();
  const [, setControls] = useState();
  const getNumberPages = useCallback(() => {
    getNumberTemplates(setPageData, setPaginate);
  }, []);
  useEffect(() => {
    if (Object.keys(params).length > 0) {
      fetchUser(setUser, user);
    }
  }, [params]);

  useEffect(() => {
    getNumberPages();
  }, [getNumberPages]);

  useEffect(() => {
    setControls(albumRef.current);
  }, [albumRef]);

  const getUser = (e) => {
    e.preventDefault();
    try {
      fetchUser(setUser, user);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <UserContext.Provider value={{ user, getUser, setUser }}>
      <Layout>
        <AlbumContainer
          page={page}
          pageData={pageData}
          user={user}
          ref={albumRef}
        />
        {user.data.length > 0 && <Share user={user.user} params={params} />}
      </Layout>
    </UserContext.Provider>
  );
}
