(function () {

    'use strict';

    var style = document.createElement('style');

    style.textContent = '*{-webkit-user-select: none;}';

    document.querySelector('head').appendChild(style);

}());
