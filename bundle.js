(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.article = article;
exports.h1 = h1;
exports.h3 = h3;
exports.nav = nav;
exports.ul = ul;
exports.li = li;
exports.i = i;
exports.span = span;
exports.section = section;
exports.footer = footer;
exports.p = p;
exports.img = img;
exports.button = button;
exports.addId = addId;
exports.addClass = addClass;
function text(words) {
  return document.createTextNode(words);
}

function createElement(type) {
  var newElement = document.createElement(type);

  for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }

  children.forEach(function (child) {
    return newElement.appendChild(child);
  });
  return newElement;
}

function div() {
  for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return createElement.apply(undefined, ['div'].concat(children));
}

function article() {
  for (var _len3 = arguments.length, children = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    children[_key3] = arguments[_key3];
  }

  return createElement.apply(undefined, ['article'].concat(children));
}

function h1() {
  for (var _len4 = arguments.length, children = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    children[_key4] = arguments[_key4];
  }

  return createElement.apply(undefined, ['h1'].concat(children));
}

function h3() {
  for (var _len5 = arguments.length, children = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    children[_key5] = arguments[_key5];
  }

  return createElement.apply(undefined, ['h3'].concat(children));
}

function nav() {
  for (var _len6 = arguments.length, children = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    children[_key6] = arguments[_key6];
  }

  return createElement.apply(undefined, ['nav'].concat(children));
}

function ul() {
  for (var _len7 = arguments.length, children = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    children[_key7] = arguments[_key7];
  }

  return createElement.apply(undefined, ['ul'].concat(children));
}

function li() {
  for (var _len8 = arguments.length, children = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    children[_key8] = arguments[_key8];
  }

  return createElement.apply(undefined, ['li'].concat(children));
}

function i() {
  for (var _len9 = arguments.length, children = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    children[_key9] = arguments[_key9];
  }

  return createElement.apply(undefined, ['i'].concat(children));
}

function span() {
  for (var _len10 = arguments.length, children = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    children[_key10] = arguments[_key10];
  }

  return createElement.apply(undefined, ['span'].concat(children));
}

function section() {
  for (var _len11 = arguments.length, children = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    children[_key11] = arguments[_key11];
  }

  return createElement.apply(undefined, ['section'].concat(children));
}

function footer() {
  for (var _len12 = arguments.length, children = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    children[_key12] = arguments[_key12];
  }

  return createElement.apply(undefined, ['footer'].concat(children));
}

function p() {
  for (var _len13 = arguments.length, children = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    children[_key13] = arguments[_key13];
  }

  return createElement.apply(undefined, ['p'].concat(children));
}

function img(source) {
  var image = createElement('img');
  image.src = source;
  return image;
}

function button() {
  for (var _len14 = arguments.length, children = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    children[_key14] = arguments[_key14];
  }

  return createElement.apply(undefined, ['button'].concat(children));
}

function addId(element, id) {
  var newElement = element.cloneNode(true);
  return Object.assign(newElement, { id: id });
}

function addClass(element) {
  var newElement = element.cloneNode(true);

  for (var _len15 = arguments.length, klasses = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
    klasses[_key15 - 1] = arguments[_key15];
  }

  klasses.forEach(function (klass) {
    return newElement.classList.add(klass);
  });
  return newElement;
}

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = app;

var _builders = require('../builders');

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _navbar = require('./navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _hero = require('./hero');

var _hero2 = _interopRequireDefault(_hero);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _bottom = require('./bottom');

var _bottom2 = _interopRequireDefault(_bottom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(store) {
  var modalEle = (0, _modal2.default)(store);
  var navbarEle = (0, _navbar2.default)();
  var heroEle = (0, _hero2.default)();
  var menuEle = (0, _menu2.default)(store);
  var bottomEle = (0, _bottom2.default)();
  var appEle = (0, _builders.addId)((0, _builders.div)(modalEle, navbarEle, heroEle, menuEle, bottomEle), 'app-container');

  return appEle;
}

},{"../builders":1,"./bottom":3,"./hero":4,"./menu":6,"./modal":9,"./navbar":11}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bottom;

var _builders = require('../builders');

function bottom() {
  var name = (0, _builders.p)((0, _builders.text)('Alex Sears'));
  var content = (0, _builders.addClass)((0, _builders.div)(name), 'content', 'is-centered');

  var container = (0, _builders.addClass)((0, _builders.div)(content), 'container');

  return (0, _builders.addClass)((0, _builders.footer)(container), 'footer');
}

},{"../builders":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hero;

var _builders = require('../builders');

function hero() {
  var logo = (0, _builders.addClass)((0, _builders.img)('static/fancybear_white.png'), 'logo');
  var the = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('The')), 'hero-text-light');
  var fancyBear = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Fancy Bear')), 'hero-text-bold');
  var eateries = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Eateries')), 'hero-text-light');

  var container = (0, _builders.addClass)((0, _builders.div)(logo, the, fancyBear, eateries), 'container');

  var heroContent = (0, _builders.addClass)((0, _builders.div)(container), 'hero-content');

  return (0, _builders.addClass)((0, _builders.section)(heroContent), 'hero', 'splash');
}

},{"../builders":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = leftMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function leftMenu() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var appetizers = (0, _menuList2.default)('Appetizers', (0, _helpers.filterByType)(items, 'appetizer'));
  var burgers = (0, _menuList2.default)('Burgers', (0, _helpers.filterByType)(items, 'burger'));

  return (0, _builders.addClass)((0, _builders.div)(appetizers, burgers), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _leftMenu = require('./leftMenu');

var _leftMenu2 = _interopRequireDefault(_leftMenu);

var _rightMenu = require('./rightMenu');

var _rightMenu2 = _interopRequireDefault(_rightMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menu(store) {
  var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');

  store.on('SET_ITEMS', function (_ref) {
    var items = _ref.items;

    var leftSide = (0, _leftMenu2.default)(items);
    var rightSide = (0, _rightMenu2.default)(items);
    var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
    (0, _helpers.$)('#menu').children(columns);
  });

  store.on('ITEM_ADDED', function (_ref2) {
    var cart = _ref2.cart;

    var cartArray = [].concat(_toConsumableArray(cart));
    var articles = cartArray.map(function (id) {
      return 'article[data-key=\'' + id + '\']';
    });
    var buttons = cartArray.map(function (id) {
      return 'article[data-key=\'' + id + '\'] button.add-to-cart';
    });

    (0, _helpers.$)(articles.join(', ')).addClass('in-cart');
    (0, _helpers.$)(buttons.join(', ')).attr('disabled', 'disabled');
  });

  store.on('ITEM_REMOVED', function (_ref3) {
    var cart = _ref3.cart;

    var onPageKeys = (0, _helpers.$)('article.in-cart').map(function (ele) {
      return parseInt(ele.dataset.key, 10);
    });
    var inCartKeys = [].concat(_toConsumableArray(cart));
    var keysToRemove = onPageKeys.filter(function (key) {
      return !inCartKeys.includes(key);
    });

    keysToRemove.forEach(function (key) {
      (0, _helpers.$)('article[data-key=\'' + key + '\']').removeClass('in-cart');
      (0, _helpers.$)('article[data-key=\'' + key + '\'] button.add-to-cart').attr('disabled', false);
    });
  });

  return menuEle;
}

},{"../builders":1,"../helpers":13,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menuItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function menuItem() {
  var itemData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var name = (0, _builders.addClass)((0, _builders.h3)((0, _builders.text)(itemData.name)), 'name');
  var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)('$' + (0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
  var description = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)(itemData.description)), 'desc');
  var addToCart = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Add to Cart')), 'button', 'is-pulled-right', 'add-to-cart');

  var mediaContent = (0, _builders.addClass)((0, _builders.div)(name, price, description, addToCart), 'media-content');

  var item = (0, _builders.addClass)((0, _builders.article)(mediaContent), 'media', 'menu_item');
  item.dataset.key = itemData.id;

  return item;
}

},{"../builders":1,"../helpers":13}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = menuList;

var _builders = require('../builders');

var _menuItem = require('./menuItem');

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function menuList(headline) {
  var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var menuItems = items.map(_menuItem2.default);

  var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)(headline)), 'title');

  return (0, _builders.addClass)(_builders.div.apply(undefined, [title].concat(_toConsumableArray(menuItems))), 'collection');
}

},{"../builders":1,"./menuItem":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modal;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _modalItem = require('./modalItem');

var _modalItem2 = _interopRequireDefault(_modalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function modal(store) {
  var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
  var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');

  var cartContainer = (0, _builders.addId)((0, _builders.div)((0, _builders.p)((0, _builders.text)('Your cart is empty.'))), 'cart-items');

  var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');

  var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');

  var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');

  store.on('TOGGLE_SHOW_CART', function (_ref) {
    var cartVisible = _ref.cartVisible;

    var ele = (0, _helpers.$)('#modal');
    if (cartVisible) {
      ele.addClass('show');
    } else {
      ele.removeClass('show');
    }
  });

  store.on('ITEM_ADDED', function (_ref2) {
    var items = _ref2.items,
        cart = _ref2.cart;

    var cartArray = [].concat(_toConsumableArray(cart));
    var cartItems = cartArray.map(function (itemId) {
      return (0, _modalItem2.default)(items[itemId]);
    });
    var cartList = (0, _builders.addClass)(_builders.ul.apply(undefined, _toConsumableArray(cartItems)), 'menu');
    (0, _helpers.$)('#cart-items').children(cartList);
  });

  return modalEle;
}

},{"../builders":1,"../helpers":13,"./modalItem":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modalItem;

var _builders = require('../builders');

var _helpers = require('../helpers');

function modalItem(itemData) {
  var name = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)(itemData.name)), 'name');
  var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)((0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
  var removeButton = (0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'remove');

  var item = (0, _builders.addClass)((0, _builders.li)(name, price, removeButton), 'menu-item');
  item.dataset.key = itemData.id;

  return item;
}

},{"../builders":1,"../helpers":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navbar;

var _builders = require('../builders');

function navbar() {
  var navLeft = (0, _builders.addClass)((0, _builders.div)(), 'navbar-left');

  var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
  var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
  var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-item');
  var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');

  return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

},{"../builders":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rightMenu;

var _builders = require('../builders');

var _helpers = require('../helpers');

var _menuList = require('./menuList');

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rightMenu() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var appetizers = (0, _menuList2.default)('Soups and Salads', (0, _helpers.filterByType)(items, 'soup_salad'));
  var desserts = (0, _menuList2.default)('Desserts', (0, _helpers.filterByType)(items, 'dessert'));

  return (0, _builders.addClass)((0, _builders.div)(appetizers, desserts), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPrice = formatPrice;
exports.filterByType = filterByType;
exports.$ = $;
function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

function filterByType(map, type) {
  return Object.keys(map).filter(function (key) {
    return map[key].type === type;
  }).map(function (key) {
    return map[key];
  });
}

function $(query) {
  var elements = Array.prototype.slice.call(document.querySelectorAll(query));

  function on(event, cb) {
    elements.forEach(function (ele) {
      ele.addEventListener(event, cb);
    });
  }

  function children(toAdd) {
    elements.forEach(function (ele) {
      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }

      ele.appendChild(toAdd);
    });
  }

  function addClass(klass) {
    elements.forEach(function (ele) {
      ele.classList.add(klass);
    });
  }

  function removeClass(klass) {
    elements.forEach(function (ele) {
      ele.classList.remove(klass);
    });
  }

  function attr(attribute, value) {
    elements.forEach(function (ele) {
      if (value === false) {
        ele.removeAttribute(attribute);
      } else {
        ele.setAttribute(attribute, value);
      }
    });
  }

  function map(cb) {
    return elements.map(cb);
  }

  return {
    on: on,
    children: children,
    addClass: addClass,
    removeClass: removeClass,
    attr: attr,
    map: map
  };
}

},{}],14:[function(require,module,exports){
'use strict';

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _state = require('./state');

var _setup_listeners = require('./setup_listeners');

var _setup_listeners2 = _interopRequireDefault(_setup_listeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, event, data) {
  switch (event) {
    case 'SET_ITEMS':
      return Object.assign({}, state, {
        items: data.items.reduce(function (total, item) {
          return Object.assign({}, total, _defineProperty({}, item.id, item));
        }, {})
      });
    case 'ITEM_ADDED':
      return Object.assign({}, state, {
        cart: new Set(state.cart).add(data.item)
      });
    case 'ITEM_REMOVED':
      var newCart = new Set(state.cart);
      newCart.delete(data.item);
      return Object.assign({}, state, {
        cart: newCart
      });
    case 'TOGGLE_SHOW_CART':
      return Object.assign({}, state, {
        cartVisible: !state.cartVisible
      });
    default:
      return state;
  }
}

var store = (0, _state.createStore)(reducer);

fetch('food.json').then(function (res) {
  return res.json();
}).then(function (resBody) {
  var body = document.querySelector('body');
  body.insertBefore((0, _app2.default)(store), body.childNodes[0]);
  store.trigger('SET_ITEMS', { items: resBody });
  (0, _setup_listeners2.default)(store);
});

},{"./components/app":2,"./setup_listeners":15,"./state":16}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store) {
  (0, _helpers.$)('#cart-icon, #close').on('click', function () {
    store.trigger('TOGGLE_SHOW_CART');
  });

  function getParentWithKey(element) {
    var parent = element.parentElement;

    while (parent && !parent.dataset.key) {
      parent = parent.parentElement;
    }

    return parent;
  }

  (0, _helpers.$)('.add-to-cart').on('click', function (e) {
    var parent = getParentWithKey(e.currentTarget);

    var key = parseInt(parent.dataset.key, 10);
    store.trigger('ITEM_ADDED', { item: key });
  });

  (0, _helpers.$)('body').on('click', function (e) {
    if (e.target.classList.contains('remove')) {
      var element = e.target;
      var parent = getParentWithKey(element);
      var key = parseInt(parent.dataset.key, 10);

      parent.parentElement.removeChild(parent);
      store.trigger('ITEM_REMOVED', { item: key });
    }
  });
};

var _helpers = require('./helpers');

},{"./helpers":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
var defaultState = {
  items: {},
  cart: new Set(),
  cartVisible: false
};

function createStore(reducer) {
  var listeners = {};
  var state = Object.assign({}, defaultState);

  function on(event, cb) {
    if (!listeners[event]) {
      listeners[event] = [];
    }

    listeners[event].push(cb);
  }

  function trigger(event) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    state = reducer(state, event, data);

    if (listeners[event]) {
      listeners[event].forEach(function (cb) {
        cb(state);
      });
    }
  }

  return {
    on: on,
    trigger: trigger
  };
}

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxidWlsZGVycy5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGFwcC5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGJvdHRvbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXGhlcm8uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxsZWZ0TWVudS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnUuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtZW51SXRlbS5qcyIsInNyY1xcanNcXGNvbXBvbmVudHNcXG1lbnVMaXN0LmpzIiwic3JjXFxqc1xcY29tcG9uZW50c1xcbW9kYWwuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxtb2RhbEl0ZW0uanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxuYXZiYXIuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFxyaWdodE1lbnUuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIiwic3JjXFxqc1xcaW5kZXguanMiLCJzcmNcXGpzXFxzZXR1cF9saXN0ZW5lcnMuanMiLCJzcmNcXGpzXFxzdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDQWdCLEksR0FBQSxJO1FBSUEsYSxHQUFBLGE7UUFNQSxHLEdBQUEsRztRQUlBLE8sR0FBQSxPO1FBSUEsRSxHQUFBLEU7UUFJQSxFLEdBQUEsRTtRQUlBLEcsR0FBQSxHO1FBSUEsRSxHQUFBLEU7UUFJQSxFLEdBQUEsRTtRQUlBLEMsR0FBQSxDO1FBSUEsSSxHQUFBLEk7UUFJQSxPLEdBQUEsTztRQUlBLE0sR0FBQSxNO1FBSUEsQyxHQUFBLEM7UUFJQSxHLEdBQUEsRztRQU1BLE0sR0FBQSxNO1FBSUEsSyxHQUFBLEs7UUFLQSxRLEdBQUEsUTtBQXpFVCxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQzFCLFNBQU8sU0FBUyxjQUFULENBQXdCLEtBQXhCLENB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b290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gdGV4dCh3b3Jkcykge1xyXG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XHJcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcclxuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsZSguLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdhcnRpY2xlJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaDEoLi4uY2hpbGRyZW4pIHtcclxuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDEnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoMyguLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMycsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdiguLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCduYXYnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bCguLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpKC4uLmNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2xpJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaSguLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdpJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbiguLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9vdGVyKC4uLmNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHAoLi4uY2hpbGRyZW4pIHtcclxuICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGltZyhzb3VyY2UpIHtcclxuICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGltYWdlLnNyYyA9IHNvdXJjZTtcclxuICByZXR1cm4gaW1hZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidXR0b24oLi4uY2hpbGRyZW4pIHtcclxuICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcclxuICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwgeyBpZCB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcclxuICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xyXG4gIHJldHVybiBuZXdFbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCB7IGRpdiwgYWRkSWQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsJztcclxuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcic7XHJcbmltcG9ydCBoZXJvIGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBib3R0b20gZnJvbSAnLi9ib3R0b20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKHN0b3JlKSB7XHJcbiAgY29uc3QgbW9kYWxFbGUgPSBtb2RhbChzdG9yZSk7XHJcbiAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XHJcbiAgY29uc3QgaGVyb0VsZSA9IGhlcm8oKTtcclxuICBjb25zdCBtZW51RWxlID0gbWVudShzdG9yZSk7XHJcbiAgY29uc3QgYm90dG9tRWxlID0gYm90dG9tKCk7XHJcbiAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG1vZGFsRWxlLCBuYXZiYXJFbGUsIGhlcm9FbGUsIG1lbnVFbGUsIGJvdHRvbUVsZSksICdhcHAtY29udGFpbmVyJyk7XHJcblxyXG4gIHJldHVybiBhcHBFbGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgZm9vdGVyLCB0ZXh0LCBwIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm90dG9tKCkge1xyXG4gIGNvbnN0IG5hbWUgPSBwKHRleHQoJ0FsZXggU2VhcnMnKSk7XHJcbiAgY29uc3QgY29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lKSwgJ2NvbnRlbnQnLCAnaXMtY2VudGVyZWQnKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNvbnRlbnQpLCAnY29udGFpbmVyJyk7XHJcblxyXG4gIHJldHVybiBhZGRDbGFzcyhmb290ZXIoY29udGFpbmVyKSwgJ2Zvb3RlcicpO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oKSB7XHJcbiAgY29uc3QgbG9nbyA9IGFkZENsYXNzKGltZygnc3RhdGljL2ZhbmN5YmVhcl93aGl0ZS5wbmcnKSwgJ2xvZ28nKTtcclxuICBjb25zdCB0aGUgPSBhZGRDbGFzcyhwKHRleHQoJ1RoZScpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xyXG4gIGNvbnN0IGZhbmN5QmVhciA9IGFkZENsYXNzKHAodGV4dCgnRmFuY3kgQmVhcicpKSwgJ2hlcm8tdGV4dC1ib2xkJyk7XHJcbiAgY29uc3QgZWF0ZXJpZXMgPSBhZGRDbGFzcyhwKHRleHQoJ0VhdGVyaWVzJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihsb2dvLCB0aGUsIGZhbmN5QmVhciwgZWF0ZXJpZXMpLCAnY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGhlcm9Db250ZW50ID0gYWRkQ2xhc3MoZGl2KGNvbnRhaW5lciksICdoZXJvLWNvbnRlbnQnKTtcclxuXHJcbiAgcmV0dXJuIGFkZENsYXNzKHNlY3Rpb24oaGVyb0NvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdE1lbnUoaXRlbXMgPSBbXSkge1xyXG4gIGNvbnN0IGFwcGV0aXplcnMgPSBtZW51TGlzdCgnQXBwZXRpemVycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2FwcGV0aXplcicpKTtcclxuICBjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XHJcblxyXG4gIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgYnVyZ2VycyksICdjb2x1bW4nLCAnaXMtNicpO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBzZWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2xlZnRNZW51JztcclxuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KHN0b3JlKSB7XHJcbiAgY29uc3QgbWVudUVsZSA9IGFkZElkKGFkZENsYXNzKGRpdigpLCAnY29udGFpbmVyJyksICdtZW51Jyk7XHJcblxyXG4gIHN0b3JlLm9uKCdTRVRfSVRFTVMnLCAoeyBpdGVtcyB9KSA9PiB7XHJcbiAgICBjb25zdCBsZWZ0U2lkZSA9IGxlZnRNZW51KGl0ZW1zKTtcclxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IHJpZ2h0TWVudShpdGVtcyk7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gYWRkQ2xhc3Moc2VjdGlvbihsZWZ0U2lkZSwgcmlnaHRTaWRlKSwgJ2NvbHVtbnMnKTtcclxuICAgICQoJyNtZW51JykuY2hpbGRyZW4oY29sdW1ucyk7XHJcbiAgfSk7XHJcblxyXG4gIHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHsgY2FydCB9KSA9PiB7XHJcbiAgICBjb25zdCBjYXJ0QXJyYXkgPSBbLi4uY2FydF07XHJcbiAgICBjb25zdCBhcnRpY2xlcyA9IGNhcnRBcnJheS5tYXAoaWQgPT4gYGFydGljbGVbZGF0YS1rZXk9JyR7aWR9J11gKTtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddIGJ1dHRvbi5hZGQtdG8tY2FydGApO1xyXG5cclxuICAgICQoYXJ0aWNsZXMuam9pbignLCAnKSkuYWRkQ2xhc3MoJ2luLWNhcnQnKTtcclxuICAgICQoYnV0dG9ucy5qb2luKCcsICcpKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gIH0pO1xyXG5cclxuICBzdG9yZS5vbignSVRFTV9SRU1PVkVEJywgKHsgY2FydCB9KSA9PiB7XHJcbiAgICBjb25zdCBvblBhZ2VLZXlzID0gJCgnYXJ0aWNsZS5pbi1jYXJ0JykubWFwKGVsZSA9PiBwYXJzZUludChlbGUuZGF0YXNldC5rZXksIDEwKSk7XHJcbiAgICBjb25zdCBpbkNhcnRLZXlzID0gWy4uLmNhcnRdO1xyXG4gICAgY29uc3Qga2V5c1RvUmVtb3ZlID0gb25QYWdlS2V5cy5maWx0ZXIoa2V5ID0+ICFpbkNhcnRLZXlzLmluY2x1ZGVzKGtleSkpO1xyXG5cclxuICAgIGtleXNUb1JlbW92ZS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICQoYGFydGljbGVbZGF0YS1rZXk9JyR7a2V5fSddYCkucmVtb3ZlQ2xhc3MoJ2luLWNhcnQnKTtcclxuICAgICAgJChgYXJ0aWNsZVtkYXRhLWtleT0nJHtrZXl9J10gYnV0dG9uLmFkZC10by1jYXJ0YCkuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG1lbnVFbGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFydGljbGUsIGJ1dHRvbiwgZGl2LCBoMywgcCwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJdGVtKGl0ZW1EYXRhID0ge30pIHtcclxuICBjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XHJcbiAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZENsYXNzKHAodGV4dChpdGVtRGF0YS5kZXNjcmlwdGlvbikpLCAnZGVzYycpO1xyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcclxuXHJcbiAgY29uc3QgbWVkaWFDb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgYWRkVG9DYXJ0KSwgJ21lZGlhLWNvbnRlbnQnKTtcclxuXHJcbiAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGFydGljbGUobWVkaWFDb250ZW50KSwgJ21lZGlhJywgJ21lbnVfaXRlbScpO1xyXG4gIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaDEsIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVMaXN0KGhlYWRsaW5lLCBpdGVtcyA9IFtdKSB7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG1lbnVJdGVtKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xyXG5cclxuICByZXR1cm4gYWRkQ2xhc3MoZGl2KHRpdGxlLCAuLi5tZW51SXRlbXMpLCAnY29sbGVjdGlvbicpO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgYnV0dG9uLCBkaXYsIGgxLCBpLCBwLCBzZWN0aW9uLCB0ZXh0LCB1bCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgJCB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbW9kYWxJdGVtIGZyb20gJy4vbW9kYWxJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKHN0b3JlKSB7XHJcbiAgY29uc3QgY2xvc2UgPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdjbG9zZScpLCAnY2xvc2UnKTtcclxuICBjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoJ0NhcnQnKSksICd0aXRsZScpO1xyXG5cclxuICBjb25zdCBjYXJ0Q29udGFpbmVyID0gYWRkSWQoZGl2KHAodGV4dCgnWW91ciBjYXJ0IGlzIGVtcHR5LicpKSksICdjYXJ0LWl0ZW1zJyk7XHJcblxyXG4gIGNvbnN0IGNoZWNrb3V0QnV0dG9uID0gYWRkQ2xhc3MoYnV0dG9uKHRleHQoJ0NoZWNrb3V0JykpLCAnYnV0dG9uJywgJ2lzLWZ1bGx3aWR0aCcpO1xyXG5cclxuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjbG9zZSwgdGl0bGUsIGNhcnRDb250YWluZXIsIGNoZWNrb3V0QnV0dG9uKSwgJ21vZGFsLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBtb2RhbEVsZSA9IGFkZElkKGFkZENsYXNzKHNlY3Rpb24obW9kYWxDb250YWluZXIpLCAnbW9kYWwnKSwgJ21vZGFsJyk7XHJcblxyXG4gIHN0b3JlLm9uKCdUT0dHTEVfU0hPV19DQVJUJywgKHsgY2FydFZpc2libGUgfSkgPT4ge1xyXG4gICAgY29uc3QgZWxlID0gJCgnI21vZGFsJyk7XHJcbiAgICBpZiAoY2FydFZpc2libGUpIHtcclxuICAgICAgZWxlLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbGUucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc3RvcmUub24oJ0lURU1fQURERUQnLCAoeyBpdGVtcywgY2FydCB9KSA9PiB7XHJcbiAgICBjb25zdCBjYXJ0QXJyYXkgPSBbLi4uY2FydF07XHJcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBjYXJ0QXJyYXkubWFwKGl0ZW1JZCA9PiBtb2RhbEl0ZW0oaXRlbXNbaXRlbUlkXSkpO1xyXG4gICAgY29uc3QgY2FydExpc3QgPSBhZGRDbGFzcyh1bCguLi5jYXJ0SXRlbXMpLCAnbWVudScpO1xyXG4gICAgJCgnI2NhcnQtaXRlbXMnKS5jaGlsZHJlbihjYXJ0TGlzdCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBtb2RhbEVsZTtcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgaSwgbGksIHNwYW4sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEl0ZW0oaXRlbURhdGEpIHtcclxuICBjb25zdCBuYW1lID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGl0ZW1EYXRhLm5hbWUpKSwgJ25hbWUnKTtcclxuICBjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSkpKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xyXG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXRpbWVzJywgJ3JlbW92ZScpO1xyXG5cclxuICBjb25zdCBpdGVtID0gYWRkQ2xhc3MobGkobmFtZSwgcHJpY2UsIHJlbW92ZUJ1dHRvbiksICdtZW51LWl0ZW0nKTtcclxuICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XHJcblxyXG4gIHJldHVybiBpdGVtO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBpLCBuYXYsIHNwYW4gfSBmcm9tICcuLi9idWlsZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XHJcbiAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcclxuXHJcbiAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcclxuICBjb25zdCBjYXJ0SXRlbXMgPSBhZGRDbGFzcyhzcGFuKCksICdjYXJ0LWl0ZW1zJyk7XHJcbiAgY29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XHJcbiAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnLCAnY2FydCcpO1xyXG5cclxuICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByaWdodE1lbnUoaXRlbXMgPSBbXSkge1xyXG4gIGNvbnN0IGFwcGV0aXplcnMgPSBtZW51TGlzdCgnU291cHMgYW5kIFNhbGFkcycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ3NvdXBfc2FsYWQnKSk7XHJcbiAgY29uc3QgZGVzc2VydHMgPSBtZW51TGlzdCgnRGVzc2VydHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdkZXNzZXJ0JykpO1xyXG5cclxuICByZXR1cm4gYWRkQ2xhc3MoZGl2KGFwcGV0aXplcnMsIGRlc3NlcnRzKSwgJ2NvbHVtbicsICdpcy02Jyk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaWNlKHByaWNlKSB7XHJcbiAgcmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeVR5cGUobWFwLCB0eXBlKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcClcclxuICAgIC5maWx0ZXIoa2V5ID0+IG1hcFtrZXldLnR5cGUgPT09IHR5cGUpXHJcbiAgICAubWFwKGtleSA9PiBtYXBba2V5XSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAkKHF1ZXJ5KSB7XHJcbiAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uKGV2ZW50LCBjYikge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGlsZHJlbih0b0FkZCkge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbGUuYXBwZW5kQ2hpbGQodG9BZGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRDbGFzcyhrbGFzcykge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChrbGFzcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGtsYXNzKSB7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGtsYXNzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXR0cihhdHRyaWJ1dGUsIHZhbHVlKSB7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBlbGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYXAoY2IpIHtcclxuICAgIHJldHVybiBlbGVtZW50cy5tYXAoY2IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG9uLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBhZGRDbGFzcyxcclxuICAgIHJlbW92ZUNsYXNzLFxyXG4gICAgYXR0cixcclxuICAgIG1hcCxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBhcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCBzZXR1cExpc3RlbmVycyBmcm9tICcuL3NldHVwX2xpc3RlbmVycyc7XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSkge1xyXG4gIHN3aXRjaCAoZXZlbnQpIHtcclxuICAgIGNhc2UgJ1NFVF9JVEVNUyc6XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGl0ZW1zOiBkYXRhLml0ZW1zLnJlZHVjZSgodG90YWwsIGl0ZW0pID0+XHJcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0b3RhbCwgeyBbaXRlbS5pZF06IGl0ZW0gfSlcclxuICAgICAgICAgICwge30pLFxyXG4gICAgICB9KTtcclxuICAgIGNhc2UgJ0lURU1fQURERUQnOlxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJ0OiAobmV3IFNldChzdGF0ZS5jYXJ0KSkuYWRkKGRhdGEuaXRlbSksXHJcbiAgICAgIH0pO1xyXG4gICAgY2FzZSAnSVRFTV9SRU1PVkVEJzpcclxuICAgICAgY29uc3QgbmV3Q2FydCA9IChuZXcgU2V0KHN0YXRlLmNhcnQpKTtcclxuICAgICAgbmV3Q2FydC5kZWxldGUoZGF0YS5pdGVtKTtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FydDogbmV3Q2FydCxcclxuICAgICAgfSk7XHJcbiAgICBjYXNlICdUT0dHTEVfU0hPV19DQVJUJzpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FydFZpc2libGU6ICFzdGF0ZS5jYXJ0VmlzaWJsZSxcclxuICAgICAgfSk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xyXG5cclxuZmV0Y2goJ2Zvb2QuanNvbicpXHJcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgLnRoZW4ocmVzQm9keSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgYm9keS5pbnNlcnRCZWZvcmUoYXBwKHN0b3JlKSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcclxuICAgIHN0b3JlLnRyaWdnZXIoJ1NFVF9JVEVNUycsIHsgaXRlbXM6IHJlc0JvZHkgfSk7XHJcbiAgICBzZXR1cExpc3RlbmVycyhzdG9yZSk7XHJcbiAgfSk7XHJcbiIsImltcG9ydCB7ICQgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0b3JlKSB7XHJcbiAgJCgnI2NhcnQtaWNvbiwgI2Nsb3NlJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc3RvcmUudHJpZ2dlcignVE9HR0xFX1NIT1dfQ0FSVCcpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBnZXRQYXJlbnRXaXRoS2V5KGVsZW1lbnQpIHtcclxuICAgIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgd2hpbGUgKHBhcmVudCAmJiAhcGFyZW50LmRhdGFzZXQua2V5KSB7XHJcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAkKCcuYWRkLXRvLWNhcnQnKS5vbignY2xpY2snLCBlID0+IHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGdldFBhcmVudFdpdGhLZXkoZS5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICBjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcclxuICAgIHN0b3JlLnRyaWdnZXIoJ0lURU1fQURERUQnLCB7IGl0ZW06IGtleSB9KTtcclxuICB9KTtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsIGUgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlJykpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnRXaXRoS2V5KGVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcclxuXHJcbiAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHBhcmVudCk7XHJcbiAgICAgIHN0b3JlLnRyaWdnZXIoJ0lURU1fUkVNT1ZFRCcsIHsgaXRlbToga2V5IH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuICBpdGVtczoge30sXHJcbiAgY2FydDogKG5ldyBTZXQoKSksXHJcbiAgY2FydFZpc2libGU6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHtcclxuICBjb25zdCBsaXN0ZW5lcnMgPSB7fTtcclxuICBsZXQgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3RhdGUpO1xyXG5cclxuICBmdW5jdGlvbiBvbihldmVudCwgY2IpIHtcclxuICAgIGlmICghbGlzdGVuZXJzW2V2ZW50XSkge1xyXG4gICAgICBsaXN0ZW5lcnNbZXZlbnRdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQsIGRhdGEgPSB7fSkge1xyXG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSk7XHJcblxyXG4gICAgaWYgKGxpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgbGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGNiID0+IHtcclxuICAgICAgICBjYihzdGF0ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG9uLFxyXG4gICAgdHJpZ2dlcixcclxuICB9O1xyXG59XHJcbiJdfQ==
