function via_processElement(elem, attrs){
    if( !elem ) return false;
    for (var key in attrs) {
        var item = attrs[key];
        switch(key){
            case '$child':
                for (var s_key in item) {
                    elem.querySelectorAll(s_key).forEach(function(element) {
                        via_processElement(element,item[s_key]);
                    })
                }
            break;
            case 'class':
                elem.classList.add(item);
            break;
            default:
                elem.setAttribute(key, item);
            break;
        }

    }
};

exports.install = function(Vue) {
    Vue.directive('inject-attributes', {
        inserted: function (el,binding,vnode,oldVnode) {
            var params = binding.value;
            via_processElement(el, params);
        }
    })
}
