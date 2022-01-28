let url = '';
if (document.location.host !== 'localhost:3000') {
  url = 'https://api.jameswood.dev';
}
const API_URL = url;
export default API_URL;
