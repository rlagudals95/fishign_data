import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";
import Head from "next/head";

const Post = ({ item, name }) => {
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description}></meta>
      </Head>
      {name}환경입니다.
      {item && <Item item={item} />}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  // context는 params나 요청 응답 쿼리 등이 담겨서 온다
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
