import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ActionCreators from "../../redux/actions/tutor";

import quick from "../../assets/quick.png";
import custom from "../../assets/custom.png";
import placement from "../../assets/placement.png";

import StepsCard from "./StepsCard";

import { steps as styles } from "./styles";

const EvaluationMethods = props => {
  const {
    classes,
    switchQuickTest,
    switchCustomTest,
    switchPlacementTest,
    quickTest,
    customTest,
    placementTest
  } = props;

  const values = [
    {
      img: quick,
      title: "Teste Rápido",
      description:
        "Ative esse recurso se você quiser fornecer um teste rápido para seus alunos avaliarem seu aprendizado. Esse teste pode ser gerado automaticamente pelo tutor toda vez que um aluno quiser testar seu conhecimento atual.",
      type: quickTest,
      switcher: switchQuickTest,
      value: "checkedA"
    },
    {
      img: custom,
      title: "Teste Personalizado",
      description:
        "Ative este recurso se você quiser fornecer um teste personalizado para seus alunos. Nesse teste, seu aluno poderá selecionar quais assuntos deseja testar.",
      type: customTest,
      switcher: switchCustomTest,
      value: "checkedB"
    },
    {
      img: placement,
      title: "Teste de Posicionamento",
      description:
        "Ative este recurso se você quiser definir um teste para seus alunos avaliarem assuntos mais avançados que ainda não foram estudados. Se o aluno for aprovado no teste, ele terá seu nível de conhecimento atualizado para incluir o aprendizado sobre esses objetos.",
      type: placementTest,
      switcher: switchPlacementTest,
      value: "checkedC"
    }
  ];

  return (
    <div style={{ justifyContent: "center" }}>
      <Typography className={classes.title} variant="subtitle1">
        Você também pode selecionar quais estratégias de avaliação você pode
        fornecer para seus alunos.
      </Typography>

      {values.map((v, k) => {
        return (
          <StepsCard
            key={k}
            img={v.img}
            title={v.title}
            description={v.description}
            type={v.type}
            switcher={v.switcher}
            value={v.value}
          />
        );
      })}
    </div>
  );
};

EvaluationMethods.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tutor: state.tutor
});

const mapDispatchToProps = dispatch => ({
  switchQuickTest: () => dispatch(ActionCreators.quicktest()),
  switchCustomTest: () => dispatch(ActionCreators.customtest()),
  switchPlacementTest: () => dispatch(ActionCreators.placementtest())
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EvaluationMethods)
);
