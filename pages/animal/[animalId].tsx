import Layout from "components/Layout";
import React from "react";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import Loader from "components/Loader";
import AnimalDetails from "components/AnimalInfo";
import AnimalInfo from "components/AnimalInfo";
import AnimalPageBanner from "components/AnimalPageBanner";
import Link from "next/link";
import BottomPageNavigator from "components/BottomPageNavigator";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
const AnimalPage: React.FC = () => {
  const router = useRouter();
  const { animalId } = router.query;
  const { data, error } = useSWR("/api/animals/" + animalId, fetcher);
  console.log(data);

  const renderingHandler = () => {
    if (!data) {
      return <Loader />;
    } else {
      return (
        <>
          <AnimalPageBanner animal={data} />
          <AnimalInfo animal={data} />
          <BottomPageNavigator animal={data?.species.name} />
        </>
      );
    }
  };

  return <Layout>{renderingHandler()}</Layout>;
};

export default AnimalPage;
