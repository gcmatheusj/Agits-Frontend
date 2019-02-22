import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ActionCreators from '../../redux/actions/tutor';

import student from '../../assets/student.png';
import teacher from '../../assets/teacher.png';

import StepsCard from './StepsCard';

import { steps as styles } from './styles';

const DefineReports = (props) => {
  const {
    classes,
    switchStudentsReports,
    switchTeacherReports,
    studentsReports,
    teacherReports,
  } = props;

  const values = [
    {
      img: student,
      title: 'Relatórios dos Alunos',
      description:
        'Ative esse recurso se você quiser fornecer aos seus alunos diferentes tipos de relatórios sobre seu desempenho de aprendizado. Inclui relatórios sobre o desempenho de aprendizagem no domínio geral ou em assuntos específicos, bem como no histórico de testes.',
      type: studentsReports,
      switcher: switchStudentsReports,
      value: 'checkedA',
    },
    {
      img: teacher,
      title: 'Relatórios do Professor',
      description:
        'Ative esse recurso se quiser visualizar relatórios sobre a interação, desempenho de aprendizado e outros relatórios interessantes sobre seus alunos.',
      type: teacherReports,
      switcher: switchTeacherReports,
      value: 'checkedB',
    },
  ];
  return (
    <div style={{ justifyContent: 'center' }}>
      {/* <Typography className={classes.title} variant="subtitle1">
          This is the least step to customize your tutor!
    </Typography> */}
      <Typography className={classes.title} variant="subtitle1">
        Estamos quase terminando! Você também pode selecionar que tipo de relatórios o tutor
        fornecerá.
      </Typography>

      {values.map((v, k) => (
        <StepsCard
          key={k}
          img={v.img}
          title={v.title}
          description={v.description}
          type={v.type}
          switcher={v.switcher}
          value={v.value}
        />
      ))}
    </div>
  );
};

DefineReports.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  tutor: state.tutor,
});

const mapDispatchToProps = dispatch => ({
  switchStudentsReports: () => dispatch(ActionCreators.studentsreports()),
  switchTeacherReports: () => dispatch(ActionCreators.teacherreports()),
});
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DefineReports),
);
