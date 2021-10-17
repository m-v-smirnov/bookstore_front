import { useEffect, useState } from "react";
import styled from "styled-components";
import { GenreType, getGenres } from "../../api/bookApi";
import { useAppDispatch } from "../../hooks";
import { setGenre } from "../../store/booksSorting/bookSortingActios";

type Props = {

};

export const SortingColumns: React.FC<Props> = (props) => {
  const [genreState, setGenreState] = useState<GenreType[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getGenresData = async () => {
      try {
        const result = await getGenres();
        setGenreState(result.genres);
      } catch (error) {
        console.log(error);
      }
    }
    getGenresData();
  }, []);

  return (
    <StyledDiv>
      <div className="sorting-container" >
        <h2>Books</h2>
        <div>
          <p>Genres:</p>
          <ul
            className="sorting-container__list"
          >
            <li className="sorting-container__li">
              <button
              onClick={() => {
                dispatch(setGenre(""));
              }}
              className="sorting-container__button">
              All genres
              </button>
              </li>
            {genreState.map((item) => {
              return (
                <li
                  onClick={() => {
                    dispatch(setGenre(item._id));
                  }}
                  className="sorting-container__li"
                  key={item._id}>
                  <button
                  className="sorting-container__button"
                  >
                    {item.name}
                  </button></li>
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
      &__list {
        list-style-type: none;
      }
      &__li {
        margin: 5px auto;
      }
      &__button {
        cursor: pointer;
      }
    }

`;