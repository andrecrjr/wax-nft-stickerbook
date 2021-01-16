import React, { useState, useCallback, useEffect } from "react";
import { getNumberTemplates, fetchUser } from "../../services";
import { Footer } from "../Footer";
import { useParams } from "react-router";
import { Share } from "../Share";
import { AlbumContainer } from "./AlbumContainer";
import Header from "../Header";

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
  }, [params, user]);

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
    <>
      <Header setUser={setUser} user={user} getUser={getUser} />
      <AlbumContainer
        page={page}
        pageData={pageData}
        user={user}
        ref={albumRef}
      />
      {user.data.length > 0 && <Share user={user.user} params={params} />}
      <Footer />
    </>
  );
}
