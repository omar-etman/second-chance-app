import Layout from "components/Layout";
import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import Loader from "components/Loader";
import AnimalDetails from "components/AnimalInfo";
import AnimalInfo from "components/AnimalInfo";
import AnimalPageBanner from "components/AnimalPageBanner";
import Link from "next/link";
import BottomPageNavigator from "components/BottomPageNavigator";
import AnimalRescueDialog from "components/AnimalRescueDialog";

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
