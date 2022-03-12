import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";
import LocalSelect from "../src/component/LocalSelect";

export default function Home({ list }) {
  return (
    <div>
      <LocalSelect />
      {/* <Head>
        <title>FISH | DATA</title>
      </Head> */}

      <>
        {/* <Header as="h3" style={{ paddingTop: 40 }}></Header> */}
        {/* <Divider /> */}
        {/* <ItemList list={list.slice(0, 9)} /> */}
        {/* <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} /> */}
      </>
    </div>
  );
}

// 정적 생성
export async function getStaticProps(context) {
  const apiUrl =
    "http://www.khoa.go.kr/api/oceangrid/tideObsRecent/search.do?ServiceKey=U4/SimipSctGPnto/1vw==&ObsCode=DT_0004&ResultType=json";
  const res = await Axios.get(apiUrl);
  const data = res.data;
  console.log(data);
  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
