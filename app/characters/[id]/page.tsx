import { CharacterType, ResponseType } from "../../../assets/api/rick-and-morty-api";
import { PageWrapper } from "../../../components/PageWrapper/PageWrapper";
import styled from "styled-components";
import process from "node:process";


/////////////////////////////////////
const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`);
  return await res.json();
};

//НАМ НУЖНО СГЕНИРИРОВАТЬ ПУТИ, СКОЛЬКО СТРАНИЦ НАМ ВЫДАСТ 20 СЕВЕР ОНИ ЗАКЭШИРУЮТСЯ, И ЕСЛИ 25, он отдельно сгенерируется и тоже закэшируется


//для этого экспортируем функцию со спец названием generateStaticParams
export async function generateStaticParams() {

  const { results } = await getCharacters();

  // return [{ id: 1 }, { id: 2 }];

  return results.map(character=>({el:String(character.id)}))
}

///////////////////////////////////////
//в компаненту приходит парамерт params из него мы можем достать id
const Character = ({params}:{params:{id:string}}) => {

  return (
    <PageWrapper>
      <Container> ID: {params.id}</Container>
    </PageWrapper>
  );
};

export default Character;

// styles
const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
