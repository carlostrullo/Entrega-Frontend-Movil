Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = auth;

var _querystring = require("querystring");

var _querystring2 = babelHelpers.interopRequireDefault(_querystring);

var _constants = require("../constants");

function auth() {
  var _this = this;

  return {
    getAuthenticationUrl: function getAuthenticationUrl() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["public"];

      var querystrings = _querystring2.default.stringify({
        client_id: _this._applicationId,
        redirect_uri: _this._callbackUrl,
        response_type: "code",
        scope: scope.length > 1 ? scope.join("+") : scope.toString()
      });

      return decodeURIComponent(_constants.OAUTH_AUTHORIZE_URL + "?" + querystrings);
    },

    userAuthentication: function userAuthentication(code) {
      var url = _constants.OAUTH_TOKEN_URL;

      return _this.request({
        url: url,
        method: "POST",
        body: {
          client_id: _this._applicationId,
          client_secret: _this._secret,
          redirect_uri: _this._callbackUrl,
          grant_type: "authorization_code",
          code: code
        },
        oauth: true
      });
    },

    setBearerToken: function setBearerToken(accessToken) {
      if (accessToken) {
        _this._bearerToken = accessToken;
      }
    }
  };
}