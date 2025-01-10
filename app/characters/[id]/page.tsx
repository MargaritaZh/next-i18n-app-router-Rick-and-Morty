import { CharacterType, ResponseType } from "../../../assets/api/rick-and-morty-api";
import { PageWrapper } from "../../../components/PageWrapper/PageWrapper";
import process from "node:process";


/////////////////////////////////////

//НАМ НУЖНО СГЕНИРИРОВАТЬ ПУТИ, СКОЛЬКО СТРАНИЦ НАМ ВЫДАСТ 20 СЕВЕР ОНИ ЗАКЭШИРУЮТСЯ, И ЕСЛИ 25, он отдельно сгенерируется и тоже закэшируется

//делаем запрос
const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_RICK_API_URL}/character`);
  return await res.json();
};

//для этого экспортируем функцию со спец названием generateStaticParams
export async function generateStaticParams() {

  const { results } = await getCharacters();

  // return [{ id: 1 }, { id: 2 }];

  return results.map(character=>({el:String(character.id)}))
}

///////////////////////////////////////

//2 ДИНАМИЧЕСКИ ИЗМЕНЯТЬ НАЗВАНИЕ СТРАНИЦЫ в браузере
export async function generateMetadata({params}:{params:{id:string}}){
  return {
    title: params.id,
    description:" jjherjgnrjnh",
  }
}

////////////////////////////////////


//в компаненту приходит парамерт params из него мы можем достать id
const Character = ({params}:{params:{id:string}}) => {

  return (
    <PageWrapper>
      <div> ID: {params.id}</div>
    </PageWrapper>
  );
};

export default Character;

