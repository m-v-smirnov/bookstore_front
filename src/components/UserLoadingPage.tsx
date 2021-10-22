//import loadingPicture from '../images/loading.gif';

import { IMAGES_URL } from "../constants/constants";

const loadingPicture = IMAGES_URL + 'loading.gif';
type Props = {};

export const UserLoadingPage: React.FC<Props> = (props) => {

  return (
    <div>
      <img src={loadingPicture} alt="" />
    </div>
  );
};

