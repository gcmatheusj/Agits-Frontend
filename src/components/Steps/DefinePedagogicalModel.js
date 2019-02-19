import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ActionCreators from '../../redux/actions/tutor';

import curriculum from '../../assets/curriculum.png';
import syllabusimg from '../../assets/syllabus.png';

import StepsCard from './StepsCard';

import styles from './styles';

const DefinePedagogicalModel = (props) => {
  const {
    classes, switchKnowledgetcs, knowledgetcs,
    syllabus, switchSyllabus
  } = props;

  const values = [
    {
      img: curriculum,
      title: 'Pontos Fortes e Fracos',
      description: 'Por padrão, o seu tutor personalizado faz uso de técnicas inteligentes atuais que modelam os conhecimentos dos alunos para decidir com precisão quais problemas devem ser dados aos alunos a qualquer momento.',
      type: knowledgetcs,
      switcher: switchKnowledgetcs,
      value: 'checkedA'
    },
    {
      img: syllabusimg,
      title: 'Programa de Estudos',
      description: 'Ative este recurso se você quiser gerenciar o cronograma e os assuntos em que seus alunos aprenderão usando o tutor',
      type: syllabus,
      switcher: switchSyllabus,
      value: 'checkedB'
    }
  ]

  return (
    <div style={{ justifyContent: 'center' }}>
      <Typography className={classes.title} variant="subtitle1">
        Utilizamos as técnicas mais avançadas para fornecer um tutor adaptativo e inteligente para seus alunos!
      </Typography>
      {
        values.map((v, k) => {
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
          )
        })
      }
    </div>
  );
}

DefinePedagogicalModel.propTypes = {
  classes: PropTypes.object,
  switchKnowledgetcs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tutor: state.tutor,
});

const mapDispatchToProps = dispatch => ({
  switchKnowledgetcs: () => dispatch(ActionCreators.knowledgetcs()),
  switchSyllabus: () => dispatch(ActionCreators.syllabus()),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(DefinePedagogicalModel),
);
