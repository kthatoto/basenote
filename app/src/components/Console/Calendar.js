import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <div className="calendar__month">December 2017</div>
        <div className="">
          <div className="calendar__days">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div>
            <div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          <div className="calendar__week">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>1</div>
            <div>2</div>
          </div>
          <div className="calendar__week">
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div><span>6</span></div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
          <div className="calendar__week">
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
          </div>
          <div className="calendar__week">
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
          </div>
          <div className="calendar__week">
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
          </div>
          <div className="calendar__week">
            <div>31</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Calendar);
