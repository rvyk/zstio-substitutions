import Head from "next/head";
import Jumbotron from "../components/Jumbotron";
import DropdownTeachers from "../components/DropdownTeachers";
import Content from "../components/Content";
import axios from "axios";
import { parse } from "node-html-parser";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import TableSkeleton from "../components/TableSkeleton";
import DropdownBranch from "../components/DropdownBranch";

export default function Home(props) {
  const [checkedTeachers, setCheckedTeachers] = useState([]);
  const [checkedBranches, setCheckedBranches] = useState([]);
  const handleCheckboxChange = (checkedItems) => {
    setCheckedTeachers(checkedItems);
  };
  const handleCheckboxChangeBranch = (checkedItems) => {
    setCheckedBranches(checkedItems);
  };

  return (
    <>
      <Head>
        <title>ZSTiO - Zastępstwa</title>
        <meta
          name="description"
          content="Zastępstwa ZSTIO w odświeżonym stylu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Navbar />
        <Jumbotron props={props} />
        <DropdownTeachers
          props={props}
          onCheckboxChange={handleCheckboxChange}
        />
        <DropdownBranch
          props={props}
          onCheckboxChangeBranch={handleCheckboxChangeBranch}
        />
        {props.error == true ? (
          <TableSkeleton />
        ) : (
          <Content
            props={props}
            checkedTeachers={checkedTeachers}
            checkedBranches={checkedBranches}
          />
        )}
        <Footer />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const response = await axios.get(
      "http://kristofc.webd.pro/plan/InformacjeOZastepstwach.html"
    );
    // const response = await axios.get("http://localhost:3000/test.html");
    const document = parse(response.data);
    const time = document.querySelector("h2").textContent.trim();
    const tables = Array.from(document.querySelectorAll("table")).map(
      (table) => {
        const tableObject = {
          time: table.querySelector("tr:first-child").textContent.trim(),
          zastepstwa: Array.from(table.querySelectorAll("tr"))
            .slice(1)
            .map((row) => {
              const [
                lesson,
                teacher,
                branch,
                subject,
                classValue,
                caseValue,
                message,
              ] = Array.from(row.querySelectorAll("td")).map((cell) =>
                cell.textContent.trim()
              );
              return {
                lesson,
                teacher,
                branch,
                subject,
                class: classValue,
                case: caseValue,
                message,
              };
            }),
        };

        tableObject.zastepstwa = tableObject.zastepstwa.filter(
          (obj) => JSON.stringify(obj) !== JSON.stringify({})
        );
        tableObject.zastepstwa.sort((a, b) => a.lesson - b.lesson);
        return tableObject;
      }
    );

    const form = { time, tables };

    return { props: { form }, revalidate: 3600 };
  } catch (error) {
    return {
      props: {
        error: true,
        message: "Wystąpił błąd podczas pobierania zastępstw",
      },
      revalidate: 3600,
    };
  }
};
