import { DateTime } from './luxon.js';

const date1 = DateTime.now();

document.getElementById('dateTime').innerHTML = date1.toLocaleString(DateTime.DATETIME_MED);

export default DateTime;