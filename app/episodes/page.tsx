import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Card } from "../../components/Card/Card";
import * as process from "node:process";
import { EpisodeType, ResponseType } from "../../assets/api/rick-and-morty-api";
import { notFound } from "next/navigation";

//для примера делаем запос на сервере  используем fetch

const getEpisodes = async (): Promise<ResponseType<EpisodeType>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/episode`);
  return await res.json();
};


export default async function Episodes() {
  const { results } = await getEpisodes();


  //может прийти пустой [],он просто отмапится не сломает логику
  if (!results) {
    notFound;
  }


  const episodeList = results.map((el) => {
    return <Card key={el.id} name={el.name} />;
  });

  return (
    <PageWrapper>
      {results.length ? episodeList : "ничего не найдено"}
    </PageWrapper>
  );
};


