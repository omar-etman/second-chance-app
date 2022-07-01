import Layout from "components/generalAppComponents/Layout";
import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import Loader from "components/generalAppComponents/Loader";
import AnimalDetails from "components/animalIdPageComponents/AnimalInfo";
import AnimalInfo from "components/animalIdPageComponents/AnimalInfo";
import AnimalPageBanner from "components/animalIdPageComponents/AnimalPageBanner";
import Link from "next/link";
import BottomPageNavigator from "components/animalIdPageComponents/BottomPageNavigator";
import AnimalRescueDialog from "components/animalIdPageComponents/AnimalRescueDialog";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const AnimalPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { animalId } = router.query;
  const { data, error } = useSWR("/api/animals/" + animalId, fetcher);
  console.log(data);
  const openDialog = () => {
    setOpen(true);
  };
  
  const renderingHandler = () => {
    if (!data) {
      return <Loader />;
    } else {
      return (
        <>
          <AnimalPageBanner animal={data} />
          <AnimalInfo animal={data} openDialog={openDialog}/>
          <BottomPageNavigator animal={data?.species.name} />
        </>
      );
    }
  };

  return (
    <>
      <AnimalRescueDialog open={open} setOpen={setOpen} />
      <Layout>
        {renderingHandler()}
      </Layout>
    </>
  );
};

export default AnimalPage;
