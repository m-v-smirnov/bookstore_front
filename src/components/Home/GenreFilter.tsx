import { useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { getGenres } from "../../api/bookApi";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setGenreFilter } from "../../store/booksSorting/bookSortingActions";
import { GenreType } from "../../types/bookTypes";

type Props = {}

export const GenreFilter: React.FC<Props> = (props) => {
  const [genreState, setGenreState] = useState<GenreType[]>([]);
  const dispatch = useAppDispatch();
  const { genreId } = useAppSelector((state => state.sorting));

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
      <div>
        <p>Genres:</p>
        <ul
          className="sorting-genre__list"
        >
          <li className="sorting-genre__li">
            <button
              onClick={() => {
                dispatch(setGenreFilter(""));
              }}
              className={classNames("sorting-genre__button", { "sorting-genre__button--selected": ("" === genreId) })}
            >
              All genres
            </button>
          </li>
          {genreState.map((item) => {
            return (
              <li
                onClick={() => {
                  dispatch(setGenreFilter(item._id));
                }}
                className="sorting-genre__li"
                key={item._id}>
                <button
                  className={classNames("sorting-genre__button", { "sorting-genre__button--selected": (item._id === genreId) })}
                >
                  {item.name}
                </button></li>
            )
          })}
        </ul>
      </div>
      <div>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  margin : 20px 0;
    .sorting-genre {
      font-size: 16px;
      &__list {
        list-style-type: none;
      }
      &__li {
        margin: 5px auto;
      }
      &__button {
        border: 0;
        background-color: white;
        cursor: pointer;
        &--selected {
          cursor: none;
          background-color: #0059ff;
          color: white;
        }
        &:hover {
          background-color: #0059ff;
          color: white;
        }
      }
    }

`;