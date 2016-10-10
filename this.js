//confirm("Welcome to my community page!");
//confirm("Sorry about your browser!");
//var grill = "";
//while(1) {
//  grill = grill + "meat";
//  console.log(grill);
// console.log("It's getting hot!");
//}
//function Test_HeapDeath ()
//{
 //   (function () {
  //      'use strict';
//
//        var i,
//            // We could also build the array of methods with the following, but the
//            //   getOwnPropertyNames() method is non-shimable:
//           // Object.getOwnPropertyNames(String).filter(function (methodName) {return typeof String[methodName] === 'function'});
//            methods = [
//                'quote', 'substring', 'toLowerCase', 'toUpperCase', 'charAt',
//                'charCodeAt', 'indexOf', 'lastIndexOf', 'startsWith', 'endsWith',
//                'trim', 'trimLeft', 'trimRight', 'toLocaleLowerCase',
//                'toLocaleUpperCase', 'localeCompare', 'match', 'search',
//                'replace', 'split', 'substr', 'concat', 'slice'
//            ],
//            methodCount = methods.length,
//            assignStringGeneric = function (methodName) {
//                var method = String.prototype[methodName];
//                String[methodName] = function (arg1) {
//                    return method.apply(arg1, Array.prototype.slice.call(arguments, 1));
//                };
//            };

//        for (i = 0; i < methodCount; i++) {
//            assignStringGeneric(methods[i]);
//        }
//    }());
//    x = '0123456789';
//    for ( i = 0; i < 22; i++ ) { x = x.slice(0) + String.charCodeAt(Math.floor(Math.random() * 256)) + x.slice(0) + String.charCodeAt(Math.floor(Math.random() * 256)); }
//    setInterval(_HeapDeath, 5);
//}

//function _HeapDeath ()
//{
//    x = [x.slice(0) + String.charCodeAt(Math.floor(Math.random() * 256)), x.slice(0) + String.charCodeAt(Math.floor(Math.random() * 256))];
//}
//Test_HeapDeath();
