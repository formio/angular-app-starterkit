var APP_URL = 'https://example.form.io';
var API_URL = 'https://api.form.io';

var query = {};
location.search.substr(1).split('&').forEach(function(item) {
  query[item.split("=")[0]] = item.split('=')[1] && decodeURIComponent(item.split("=")[1]);
});

APP_URL = query.appUrl || APP_URL;
API_URL = query.apiUrl || API_URL;

export const AppConfig = {
  appUrl: APP_URL,
  apiUrl: API_URL
};

export const AuthConfig = {
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};
