import React from "react";
import Card from "../Card";
import {connect} from 'react-redux';

import "./styles.css";

const Soma = (props) => {
  const {min, max} = props;
  const results = min + max;
  return (
    <Card title="Soma dos números" green>
      <div className="Soma">
        <span>
          <span>Resultado: </span>
          <strong> {results} </strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Soma);