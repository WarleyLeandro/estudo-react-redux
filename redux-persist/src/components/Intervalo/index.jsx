import React from "react";
import Card from "../Card";
import { connect } from "react-redux";

import "./styles.css";

import { Creators } from "../../store/ducks/numeros";
const Intervalo = (props) => {

  const { min, max } = props;
  return (
    <Card title="Intervalo de números" red>
      <div className="Intervalo">
        <span>
          <strong>MÍN</strong>
          <input type="number" value={min} 
          onChange={e => {props.alterNumMin(+e.target.value)}}
          />
        </span>
        <span>
          <strong>MÁX</strong>
          <input type="number" value={max}
          onChange={e => {props.alterNumMax(+e.target.value)}}
          />
        </span>
      </div>
    </Card>
  );
};


//without reduxsauce
// function mapStateToProps(state) {
//   return {
//     min: state.numeros.min,
//     max: state.numeros.max,
//   };
// }


// function mapDispatchToProps(xpto) {
//   console.log(Creators);
//   debugger;
  // return {
  //   alteraMin(novoNumero) {
      
  //     const action = alteraNumMin(novoNumero);
  //     dispatch(action);
  //   },
  //   alteraMax(novoNumero) {
  //       const action = alteraNumMax(novoNumero);
  //       dispatch(action);
  //   }
  // };
//}

export default connect(({numeros})=> numeros, Creators)(Intervalo);
