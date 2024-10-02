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
    <div>
      <input type="text" value={netid} onChange={(e) => setNetid(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

InputBox.propTypes = {
  netid: PropTypes.string,
  setNetid: PropTypes.func,
  setLateDays: PropTypes.func,
}