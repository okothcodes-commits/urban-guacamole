const pi = 3.142;

function areaCircle(r) {
    //global scope
    const pi = 3.1423;
    //
    return pi * r * r; 
}

function perimeterCircle(r) {
    return 2 * pi * r;
}

function circle(r) {
    const area = areaCircle(r);
    const perimeter = perimeterCircle(r);
    console.log(`For a circle of r ${r} are ${area} perimeter ${perimeter}`);
}

function testM() {
    let m = "hello world";
    console.log(m); // hello world
    if (true) {
        let m = 123;
    }
}