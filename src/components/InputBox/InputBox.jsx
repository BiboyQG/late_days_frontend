import PropTypes from 'prop-types';
import { fetchLateDays } from '../../utils';

export default function InputBox({ netid, setNetid, setLateDays }) {
  const handleSubmit = () => {
    fetchLateDays(netid)
      .then(({ data }) => {
        setLateDays(data.days);
      })
      .catch(err => {
        console.error(err);
      });
  }
  return (
    <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-lg shadow-md">
      <input
        type="text"
        value={netid}
        onChange={(e) => setNetid(e.target.value)}
        className="w-full px-4 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter NetID"
      />
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
      >
        Submit
      </button>
    </div>
  )
}

InputBox.propTypes = {
  netid: PropTypes.string,
  setNetid: PropTypes.func,
  setLateDays: PropTypes.func,
}