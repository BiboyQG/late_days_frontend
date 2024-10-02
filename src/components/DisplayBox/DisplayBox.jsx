import PropTypes from 'prop-types';
import AniCon from '../AniCon/AniCon';

export default function DisplayBox({ netid, lateDays }) {
  return (
    <AniCon>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Type your NetID to check your late days</h1>
        <p className="text-lg text-gray-700 mb-2">Hello, <span className="font-semibold">{netid}</span></p>
        <p className="text-lg text-gray-700">
          Your late days left: <span className="font-semibold text-blue-600">{lateDays}</span>
        </p>
      </div>
    </AniCon>
  )
}

DisplayBox.propTypes = {
  netid: PropTypes.string,
  lateDays: PropTypes.number,
}
