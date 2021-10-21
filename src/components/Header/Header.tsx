import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEFAULT_AVATAR, IMAGES_URL } from "../../constants/constants";
import { useAppSelector } from "../../hooks";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

const logo = IMAGES_URL + "bookstore.png"



type Props = {

};

export const Header: React.FC<Props> = (props) => {
  const { user } = useAppSelector((state) => state.user);
  const avatar = IMAGES_URL + (user ? user.avatarRef : DEFAULT_AVATAR);

  return (
    <StyledDiv>
      <div className="header">
        <div className="header_content">
          <Link to="/home">
            <img
              title="home"
              className="header_content__img"
              src={logo} alt="LOGO"
            />
          </Link>
          {user
            ? <div className="header_content__div">
              <Link to="/profile">
                <img
                  title="profile"
                  className="header_content__avatar"
                  src={avatar} alt="avatar"
                />
              </Link>
              <LogoutButton />
            </div>
            :
            <LoginButton />
          }
        </div>
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  .header {
    border-bottom: 1px solid lightgrey;
  }
  .header_content {
    margin: 0 auto;
    width: 1100px;
    display: flex;
    justify-content: space-between;
    
    &__img {
      width : 220px;
    }
    &__avatar {
      margin : 0 10px;
      border-radius: 100%;
      height: 50px;
      width: 50px;
      object-fit: cover;
      
    }
    &__div {
      align-self: center;
      display: flex;
    }
  }
  .logout_button {
    width: 50px;
    height: 50px;
    align-self: center;
    text-align: center;
    color: #0059ff;;
    font-size: 14px;
    cursor: pointer;
    border: 0;
    background-color: white;
  }
`;