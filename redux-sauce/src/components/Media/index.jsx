import React from "react";
import Card from "../Card";
import { connect } from "react-redux";
import "./styles.css";

const Media = (props) => {
  const {min, max} = props;
  return (
    <Card title="Media dos números" blue>
      <div className="Media">
        <span>
          <span>Resultado: </span>
          <strong> {(min + max)/2} </strong>
        </span>
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

export default connect(({numeros})=>numeros) (Media);
