import Star from "./Star";
import PropTypes from "prop-types";

function Stars (props) {
    const { count } = props;
    if (count < 1 || count > 5 || isNaN(count)) return null;
    let allStars = [];
    for (let i = 1; i <= count; i += 1) {
        allStars.push(i)
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {allStars.map(item => <Star key={item} />)}
        </ul>
    )
}

Stars.propTypes = {
    count: PropTypes.number
}

Stars.defaultProps = {
    count: 0
};

export default Stars;