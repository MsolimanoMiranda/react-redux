import React, { useEffect } from "react";
import { useDispatch } from "redux-react-hook";
import AlertActions from '../../redux/reducers/alert/actions';
import { HeaderEmit } from "../../components/Header/HeaderEmit";


import "./styles.scss";
import { Button } from "../../components/Button";

const Inventory = (props: any) => {


  const dispatch = useDispatch();


  const probarReducer = async (payload: any ) =>{

 
    if(payload === 1){
      dispatch(AlertActions.success({
        message: 'Ok',
        description: 'Se Registró con exito.'
      }))
  
    }else if(payload === 2){

    dispatch(AlertActions.danger({
      message: 'Error',
      description: 'No se puedo registrar.'
    }))
    }else if(payload === 3){

      dispatch(AlertActions.warning({
        message: 'Alert',
        description: 'No se registro, faltan llenar campos.'
      }))
    }

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
              Prueba de  <strong>Redux</strong>
            </h2>
            <br/>
          <Button
          text={"Evento Sucess"}
          onClick={()=>probarReducer(1)}
          />
          <br></br>
          <Button
          text={"Evento Danger"}
          onClick={()=>probarReducer(2)}
          />
          </div>
        </div>
      </main>
  
  
    </div>
  );
};
export default Inventory;
