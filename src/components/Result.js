import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {


  var form = document.getElementById('answers');

  form.onchange = updateTotal;

  function updateTotal(event) {
    var form = this,
      sectionTotal = [],
      i,
      field,
      section;
    for (i = 0; i < form.elements.length; i += 1) {
      field = form.elements[i];
      if (field.type === 'radio' && field.checked) {
        section = field.name.substring(3, 4);
        sectionTotal[section] = (sectionTotal[section] || 0) + Number(field.value);
      }
    }
    for (i = 1; i < sectionTotal.length; i += 1) {
      form.elements['SecTotal' + i].value = sectionTotal[i];
    }
  }
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You prefer <strong>{props.quizResult}</strong>!
      </div>
      <div>
        You prefer <strong>{props.scoreResult}</strong>!
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,

};

export default Result;
