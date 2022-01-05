import React from "react";
import { connect } from "react-redux";
import Card from "../Card";

import "./styles.css";

const Sorteio = (props) => {
  const {min, max} = props;
  const numAleatorio = parseInt(Math.random() * (max-min)) + min;
  return (
    <Card title="Sorteio de número" purple>
      <div className="Sorteio">
        <>
          <span>Resultado: </span>
          <strong> {numAleatorio} </strong>
        </>
      </div>
    </Card>
  );
};

// function mapStateToProps(state) {
//   return {
//     min: state.numeros.min,
//     max: state.numeros.max
//   }
// }

// export default connect(mapStateToProps) (Sorteio);

export default connect(({numeros})=> numeros) (Sorteio);