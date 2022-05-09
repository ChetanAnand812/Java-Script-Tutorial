function avg(a, b) {
    c  = (a + b)/2;
    return c;
}
// DRY = do not repeat yourself
c1 = avg(4,6);
c2 = avg(10,20);
console.log(c1,c2);