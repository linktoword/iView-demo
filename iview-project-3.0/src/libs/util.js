/**
 * 公用的js方法，我们自己定义的方法也可以放在这
 */
let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

export default util;