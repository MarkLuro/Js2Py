// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.19-8-c-ii-4
description: Array.prototype.map - k values are passed in acending numeric order
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [0, 1, 2, 3, 4, 5];
        var lastIdx = 0;
        var called = 0;
        var result = true;
        function callbackfn(val, idx, o) {
            called++;
            if (lastIdx !== idx) {
                result = false;
            } else {
                lastIdx++;
            }
        }

        arr.map(callbackfn);
        return result && arr.length === called;
    }
runTestCase(testcase);
