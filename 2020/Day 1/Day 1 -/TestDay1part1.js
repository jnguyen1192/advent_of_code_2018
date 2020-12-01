var input = "1713\n" +
    "1281\n" +
    "1185\n" +
    "1501\n" +
    "1462\n" +
    "1752\n" +
    "1363\n" +
    "1799\n" +
    "1071\n" +
    "1446\n" +
    "1685\n" +
    "1706\n" +
    "1726\n" +
    "1567\n" +
    "1867\n" +
    "1376\n" +
    "1445\n" +
    "1971\n" +
    "1429\n" +
    "1749\n" +
    "438\n" +
    "1291\n" +
    "1261\n" +
    "1585\n" +
    "1859\n" +
    "1835\n" +
    "1630\n" +
    "1975\n" +
    "1467\n" +
    "1829\n" +
    "1669\n" +
    "1638\n" +
    "1961\n" +
    "1719\n" +
    "1238\n" +
    "1751\n" +
    "1514\n" +
    "1744\n" +
    "1547\n" +
    "1677\n" +
    "1811\n" +
    "1820\n" +
    "1371\n" +
    "740\n" +
    "1925\n" +
    "1803\n" +
    "1753\n" +
    "1208\n" +
    "1772\n" +
    "1642\n" +
    "1140\n" +
    "1838\n" +
    "1444\n" +
    "1321\n" +
    "1556\n" +
    "1635\n" +
    "1687\n" +
    "688\n" +
    "1650\n" +
    "1580\n" +
    "1290\n" +
    "1812\n" +
    "1814\n" +
    "1384\n" +
    "1426\n" +
    "1374\n" +
    "1973\n" +
    "1791\n" +
    "1643\n" +
    "1846\n" +
    "1676\n" +
    "1724\n" +
    "1810\n" +
    "1911\n" +
    "1765\n" +
    "945\n" +
    "1357\n" +
    "1919\n" +
    "1994\n" +
    "1697\n" +
    "1632\n" +
    "1449\n" +
    "1539\n" +
    "1725\n" +
    "1963\n" +
    "1879\n" +
    "1731\n" +
    "1904\n" +
    "1392\n" +
    "1823\n" +
    "1420\n" +
    "1504\n" +
    "204\n" +
    "1661\n" +
    "1575\n" +
    "1401\n" +
    "1806\n" +
    "1417\n" +
    "1965\n" +
    "1960\n" +
    "1990\n" +
    "1409\n" +
    "1649\n" +
    "1566\n" +
    "1957\n" +
    "514\n" +
    "1464\n" +
    "1352\n" +
    "1841\n" +
    "1601\n" +
    "1473\n" +
    "1309\n" +
    "1421\n" +
    "1190\n" +
    "1582\n" +
    "1825\n" +
    "655\n" +
    "1666\n" +
    "1878\n" +
    "1891\n" +
    "1579\n" +
    "1176\n" +
    "1557\n" +
    "1910\n" +
    "1747\n" +
    "1388\n" +
    "1493\n" +
    "1372\n" +
    "1522\n" +
    "1515\n" +
    "1745\n" +
    "1494\n" +
    "1763\n" +
    "1147\n" +
    "1364\n" +
    "1469\n" +
    "1165\n" +
    "1901\n" +
    "1368\n" +
    "1234\n" +
    "1308\n" +
    "1416\n" +
    "1678\n" +
    "1541\n" +
    "1509\n" +
    "1427\n" +
    "1223\n" +
    "1496\n" +
    "1600\n" +
    "1383\n" +
    "1295\n" +
    "1415\n" +
    "1890\n" +
    "1694\n" +
    "1793\n" +
    "1529\n" +
    "1984\n" +
    "1576\n" +
    "1244\n" +
    "1348\n" +
    "1085\n" +
    "1770\n" +
    "1358\n" +
    "1611\n" +
    "1159\n" +
    "1964\n" +
    "1647\n" +
    "818\n" +
    "1246\n" +
    "1458\n" +
    "1936\n" +
    "1370\n" +
    "1659\n" +
    "1923\n" +
    "1619\n" +
    "1604\n" +
    "1354\n" +
    "1118\n" +
    "1657\n" +
    "1945\n" +
    "1898\n" +
    "1948\n" +
    "798\n" +
    "769\n" +
    "1689\n" +
    "1821\n" +
    "1979\n" +
    "1460\n" +
    "1832\n" +
    "1596\n" +
    "1679\n" +
    "1818\n" +
    "1815\n" +
    "1977\n" +
    "1634\n" +
    "1828\n" +
    "1386\n" +
    "1284\n" +
    "1569\n" +
    "1970";
var output = "692916";

function find_sum_2020(lines) {
    var first = -1; // the first number
    var tmp = -1; // the temporary number
    var numbers = []; // the numbers on the lines
    var res = -1;
    lines.forEach(function(line){ // browse each lines
        tmp = parseInt(line); // convert string to int
        numbers.push(tmp); // add on list
        if (numbers.length === 1) { // case it is the first number
            first = tmp;// intitialise first for the first time
            return;// loop again
        }
        if (first + tmp === 2020) {// check the sum of two numbers
            res = first * tmp;// special case at the first iteration
        }
    });
    if (res !== -1) { // case it finds 2020
        return res; // return the result
    }
    var i = 0;
    numbers.forEach(function(v) { // browse using index
        if (i === 0) { //  case it is the first iteration
            i += 1;
            return; //  loop again
        }
        var j = 0;
        numbers.forEach(function (w) { //  browse using index
            if (j > i) {//  case the second number is less than the first number
                if (v + w === 2020) {//  check the sum
                    res = v * w; //  return the product
                }
            }
            j += 1;
        });
        i += 1;
    });
    return res; // return the result
}

var assert = require('assert'); // Unit test library
describe('Day 1', function() {
    it('SumTwoNumbers2020', function() {
        var lines = input.split("\n"); // get lines
        var res = find_sum_2020(lines); // process
        //console.log(res);
        assert.equal(res.toString(), output); // check if it works
    });
});