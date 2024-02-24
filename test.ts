import { debounce } from "/home/charan/dev/js/robotics/src/util/helpers/debounce.helper";

const test = debounce((a: string = "") => {
    console.log("done" + a);
}, 200);

test("s");
test();
test();
test();
test();
test();
test("sss");
test("ssss");

await new Promise(resolve => setTimeout(resolve, 1000));

test("s");

debounce((a: string = "") => {
    console.log("done" + a);
}, 200)("s");
debounce((a: string = "") => {
    console.log("done" + a);
}, 200)("s");
debounce((a: string = "") => {
    console.log("done" + a);
}, 200)("s");
