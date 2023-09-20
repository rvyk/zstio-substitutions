import Head from "next/head";
import Jumbotron from "../components/Jumbotron";
import DropdownTeachers from "../components/DropdownTeachers";
import Content from "../components/Content";
import axios from "axios";
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

export const getServerSideProps = async () => {
  const apiResponse = await axios.get(
    `${process.env.API_URL}/api/getSubstitutions`
  );

  if (apiResponse.status === 200) {
    const { data } = apiResponse;

    return { props: { form: data } };
  } else {
    return {
      props: {
        error: true,
        message: "Wystąpił błąd podczas pobierania danych",
      },
    };
  }
};
