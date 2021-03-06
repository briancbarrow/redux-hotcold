import React from 'react';
import {connect} from 'react-redux';

class GuessList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="guess-list">
                {this.props.guesses.map((guess, index) => (
                    <span className="guess" key={index}>{guess}</span>
                ))}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         guesses: state.guesses
//     }
// }

export default connect()(GuessList);
