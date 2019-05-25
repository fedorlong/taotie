import React, {Compenent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class BookContainer extends Compenent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="p-book">
        dongya
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(BookContainer);