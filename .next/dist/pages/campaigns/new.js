'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gtax/Desktop/Patrethereon/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
	(0, _inherits3.default)(CampaignNew, _Component);

	function CampaignNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CampaignNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			minimumContribution: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								_this.setState({ loading: true, errorMessage: '' });

								_context.prev = 2;
								_context.next = 5;
								return _web2.default.eth.getAccounts();

							case 5:
								accounts = _context.sent;
								_context.next = 8;
								return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
									from: accounts[0]
								});

							case 8:
								_routes.Router.pushRoute('/');
								_context.next = 14;
								break;

							case 11:
								_context.prev = 11;
								_context.t0 = _context['catch'](2);

								_this.setState({ errorMessage: _context.t0.message });

							case 14:

								_this.setState({ loading: false });

							case 15:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[2, 11]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CampaignNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, 'Create a Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
				label: 'wei',
				labelPosition: 'right',
				value: this.state.minimumContribution,
				onChange: function onChange(event) {
					return _this3.setState({ minimumContribution: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, 'Create!')));
		}
	}]);

	return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJSb3V0ZXIiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQUssQUFBTyxBQUFNOztBQUMxQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7Ozs7O29OQUNMLEE7d0JBQVEsQUFDYyxBQUNyQjtpQkFGTyxBQUVNLEFBQ2I7WUFITyxBLEFBR0M7QUFIRCxBQUNQLFcsQUFLRDt3RkFBVyxpQkFBQSxBQUFPLE9BQVA7UUFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBRU47O2NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssY0FIbEIsQUFHVixBQUFjLEFBQTJCOzt3QkFIL0I7d0JBQUE7ZUFNZSxjQUFBLEFBQUssSUFOcEIsQUFNZSxBQUFTOztZQUEzQjtBQU5HLDRCQUFBO3dCQUFBO2lDQU9ILEFBQVEsUUFBUixBQUNMLGVBQWUsTUFBQSxBQUFLLE1BRGYsQUFDcUIscUJBRHJCLEFBRUw7ZUFDSyxTQVZHLEFBT0gsQUFFQSxBQUNBLEFBQVM7QUFEVCxBQUNMLFNBSEs7O1lBS047dUJBQUEsQUFBTyxVQVpFLEFBWVQsQUFBaUI7d0JBWlI7QUFBQTs7WUFBQTt3QkFBQTt3Q0FnQlQ7O2NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYSxZQWhCbkIsQUFnQlQsQUFBYyxBQUFrQjs7WUFHakM7O2NBQUEsQUFBSyxTQUFTLEVBQUMsU0FuQkwsQUFtQlYsQUFBYyxBQUFTOztZQW5CYjtZQUFBO3dCQUFBOztBQUFBOzZCQUFBO0E7Ozs7Ozs7Ozs7MkJBc0JIO2dCQUNQOzswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0Esc0NBQUEsQUFBQyx1Q0FBSyxVQUFZLEtBQWxCLEFBQXVCLFVBQVUsT0FBUyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQWpELEFBQXVEO2VBQXZEO2lCQUFBLEFBQ0M7QUFERDtzQkFDRSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EseUNBQUEsQUFBQztXQUFELEFBQ08sQUFDTjttQkFGRCxBQUVlLEFBQ2Q7V0FBUyxLQUFBLEFBQUssTUFIZixBQUdxQixBQUNwQjtjQUFZLHlCQUFBO1lBQ1gsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBb0IsTUFBQSxBQUFNLE9BRDlCLEFBQ1gsQUFBYyxBQUFrQztBQUxsRDs7ZUFBQTtpQkFIRixBQUNDLEFBRUMsQUFTRDtBQVRDO0FBQ0Msd0JBUUYsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUF3QixTQUFRLFNBQVcsS0FBQSxBQUFLLE1BQWhELEFBQXNEO2VBQXREO2lCQVpELEFBWUMsQUFDQTtBQURBO3VCQUNBLEFBQUMseUNBQU8sU0FBVyxLQUFBLEFBQUssTUFBeEIsQUFBOEIsU0FBUyxTQUF2QztlQUFBO2lCQUFBO0FBQUE7TUFoQkgsQUFDQyxBQUVDLEFBYUMsQUFJSDs7Ozs7QUFsRHdCLEEsQUFxRDFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3RheC9EZXNrdG9wL1BhdHJldGhlcmVvbiJ9