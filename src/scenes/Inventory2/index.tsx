import React, { useEffect } from "react";
import { useDispatch } from "redux-react-hook";
import AlertActions from '../../redux/reducers/alert/actions';
import { HeaderEmit } from "../../components/Header/HeaderEmit";


import "./styles.scss";
import { Button } from "../../components/Button";

const Inventory = (props: any) => {


  const dispatch = useDispatch();


  const probarReducer = async (payload: any ) =>{

 

      dispatch(AlertActions.warning({
        message: 'Alert',
        description: 'No se registro, faltan llenar campos.'
      }))
    

    return false;
    }


  
  useEffect(() => {

  
  }, []);

  return (
    <div>
      <HeaderEmit />
      <main className="formalization">
        <div className="wrap">
          <div className="content">
            <h2 className="title">
              Prueba de  <strong>Redux Page 2</strong>
            </h2>
            <br/>
       
          <Button
          text={"Evento Warning"}
          onClick={()=>probarReducer(2)}
          />
          </div>
        </div>
      </main>
  
  
    </div>
  );
};
export default Inventory;
