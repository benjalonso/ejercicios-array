let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

for (let i of par.toLowerCase()) {
    if (i === " ") {continue
    }
    else {
        if (i in counts) {
            counts[i] = counts[i] + 1
        } else {
            counts[i] =  1
        }

    }
}

console.log(counts);