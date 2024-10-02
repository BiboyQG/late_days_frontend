import PropTypes from 'prop-types';

export default function DisplayBox({ netid, lateDays }) {
  return (
    <div>
      <h1>DisplayBox</h1>
      <p>Hello, {netid}</p>
      <p>Your late days left: {lateDays}</p>
    </div>
  )
}

DisplayBox.propTypes = {
  netid: PropTypes.string,
  lateDays: PropTypes.number,
}
