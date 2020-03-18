var _myModule = (function() {
    'use strict';
  
    var _myAccess = 'nice day';
    var publicAccess = 'have a nice day';
  
    function _myMethod() {
      console.log(_myAccess);
    }
  
    function publicMethod() {
      _myMethod();
    }
  
    return {
      publicMethod: publicMethod,
      publicAccess: publicAccess
    };
  })();
  
  _myModule.publicMethod(); // outputs 'nice day'
  console.log(_myModule.publicAccess); // outputs 'have a nice day'
  console.log(_myModule._myAccess); // is undefined protected by the module closure
  _myModule._myMethod(); // is TypeError protected by the module closure