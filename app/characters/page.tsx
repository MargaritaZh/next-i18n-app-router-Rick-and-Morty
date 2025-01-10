
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import dynamic from "next/dynamic";
import { CharacterType, ResponseType } from "../../assets/api/rick-and-morty-api";
import process from "node:process";
const CharacterCard = dynamic(() =>
  import("../../components/Card/CharacterCard/CharacterCard").then((mod) => mod.CharacterCard),
);


//СЕРВЕРНАЯ КОМПАНЕНТА
//эмитирукм getStatucProps,запрос делается единжды и информация кэшируется

const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`);
  return await res.json();
};

export default async function Characters ()  {

const {results}= await getCharacters()

  return (
    <PageWrapper>

      {results.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </PageWrapper>
  );
};



