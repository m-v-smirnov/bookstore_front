import { useEffect, useState } from "react";
import styled from "styled-components";
import { GenreType, getGenres } from "../../api/bookApi";

type Props = {

};

export const SortingColumns: React.FC<Props> = (props) => {
  const [genreArray, setGenre] = useState<GenreType[]>([]);
  
  useEffect(()=>{
    const getGenresData = async () => {
      try {
        const result = await getGenres();
        setGenre(result.genres);
      } catch (error) {
        console.log(error);
      }
    }
    getGenresData();
  },[]);
  
  return (
    <StyledDiv>
      <div className="sorting-container" >
        <h2>Books</h2>
        <div>
          <p>Genres:</p>
          <ul>
            {genreArray.map((item) => {
              return (
                <li key={item._id}>{item.name}</li>
              )
            })}
          </ul>
        </div>
        <div>
          
        </div>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
    .sorting-container {
      margin: 0 10px;
      width: 200px;
      display: flex;
      flex-direction: column;
    }

`;