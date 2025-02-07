// 블록 스코프(es6)
'use strict';

var users = [{
    no: 1,
    name: '마이콜',
    email: 'michol@gmail.com'
}, {
    no: 2,
    name: '둘리',
    email: 'dooly@gmail.com'
}];

// 객체분해(es6)
function print(_ref) {
    var no = _ref.no;
    var name = _ref.name;
    var email = _ref.email;

    // 템플릿 문자열(es6)
    console.log(no + ':' + name + ':' + email);
}

// for ~ of(es6)
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var user = _step.value;

        print(user);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}