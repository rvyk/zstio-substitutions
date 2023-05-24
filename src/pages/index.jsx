import Head from "next/head";
import Jumbotron from "./components/Jumbotron";
import Dropdown from "./components/Dropdown";
import Content from "./components/Content";
import axios from "axios";
import { parse } from "node-html-parser";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import ThemeChanger from "./components/ThemeChanger";
import { useState } from "react";
export default function Home(props) {
  const [checkedTeachers, setCheckedTeachers] = useState([]);
  const handleCheckboxChange = (checkedItems) => {
    // Wykonaj odpowiednie działania na zaznaczonych elementach
    console.log(checkedItems);
    setCheckedTeachers(checkedItems);
  };
  return (
    <>
      <Head>
        <title>ZSTIO - Zastępstwa</title>
        <meta
          name="description"
          content="Zastępstwa ZSTIO w odświeżonym stylu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <ThemeChanger />
        <Jumbotron props={props} />
        <Dropdown props={props} onCheckboxChange={handleCheckboxChange} />
        <Content props={props} checkedTeachers={checkedTeachers} />
        <Footer />
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    "http://kristofc.webd.pro/plan/InformacjeOZastepstwach.html"
  );
  const document = parse(res.data);
  const time = document.querySelector("h2").textContent.trim();
  const tables = Array.from(document.querySelectorAll("table")).map((table) => {
    const tableObject = {};
    tableObject.time = table.querySelector("tr:first-child").textContent.trim();
    tableObject.zastepstwa = Array.from(table.querySelectorAll("tr"))
      .slice(1)
      .map((row) => {
        return Array.from(row.querySelectorAll("td")).reduce(
          (obj, cell, index) => {
            const value = cell.textContent.trim();
            switch (index) {
              case 0:
                obj.lesson = value;
                break;
              case 1:
                obj.teacher = value;
                break;
              case 2:
                obj.branch = value;
                break;
              case 3:
                obj.subject = value;
                break;
              case 4:
                obj.class = value;
                break;
              case 5:
                obj.case = value;
                break;
              case 6:
                obj.message = value;
                break;
            }
            return obj;
          },
          {}
        );
      });
    tableObject.zastepstwa = tableObject.zastepstwa.filter(
      (obj) => JSON.stringify(obj) !== JSON.stringify({})
    );
    tableObject.zastepstwa.sort((a, b) => a.lesson - b.lesson);
    return tableObject;
  });
  const form = { time, tables };
  return { props: { form } };
};
