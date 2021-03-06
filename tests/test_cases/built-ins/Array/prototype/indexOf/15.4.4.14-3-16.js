// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-3-16
description: >
    Array.prototype.indexOf - 'length' is a string containing a hex
    number
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 10: true, 11: "0x00B", length: "0x00B" };

        return Array.prototype.indexOf.call(obj, true) === 10 &&
            Array.prototype.indexOf.call(obj, "0x00B") === -1;
    }
runTestCase(testcase);
