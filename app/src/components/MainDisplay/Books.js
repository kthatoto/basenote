import React, { Component } from 'react';
import { connect } from 'react-redux';

import book1 from '../../images/book1.jpg';
import book2 from '../../images/book2.jpg';
import book3 from '../../images/book3.jpg';
import book4 from '../../images/book4.jpg';
import book5 from '../../images/book5.jpg';

class Books extends Component {
  render() {
    return (
      <div className="books">
        <div className="books__shelfName">Tech Category</div>
        <img src={book1} />
        <img src={book2} />
        <img src={book3} />
        <img src={book4} />
        <img src={book5} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Books);
