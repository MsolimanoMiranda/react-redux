
import React, { useCallback, useState } from 'react';
import { useMappedState } from 'redux-react-hook';
// import { localStorageClean } from './../../utils/storage';
import './styles.scss';

export const HeaderEmit = (props: any) => {
  // const [isActive, setActive] = useState(false);
  // const mapState = useCallback(
  //   state => ({
  //     username: state.user.username
  //   }),
  //   []
  // );

  // const { username } = useMappedState(mapState);

  // const signOut = async () => {
  //     // await Auth.signOut();
  //     // localStorageClean();
  // };

  return (
    <header>
      <div className="header">
        <div className="nowrap">
          {/* <h1 className="logo">Intercorp</h1> */}
          <a onClick={()=>{}} className="header__exit icon-exit">
          </a>
        
        </div>
      </div>
    </header>
  )
}
