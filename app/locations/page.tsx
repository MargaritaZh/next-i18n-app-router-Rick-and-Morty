"use client"

import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Card } from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { Nullable } from "@/types/Nullable";
import { LocationType } from "../../assets/api/rick-and-morty-api";
import { API } from "../../assets/api/api";

const Locations = () => {

  const [locations,setLocations]=useState<Nullable<LocationType[]>>(null)


  useEffect(() => {
    API.rickAndMorty.getLocations().then(res=>setLocations(res.results))
  }, []);

  if (!locations) return null;

  const LocationList=locations.map((el) => (
    <Card key={el.id} name={el.name} />))


  return (
    <PageWrapper>
      {LocationList}
    </PageWrapper>
  );
};


export default Locations;
