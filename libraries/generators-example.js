// simple sleep

function run(generator) {
    var iterator = generator(resume);
    var data = null, yielded = false;
    
    iterator.next();
    yielded = true;
    check();
    
    function check() {
      while (data && yielded) {
        var err = data[0], item = data[1];
        data = null;
        yielded = false;
        if (err) return iterator.throw(err);
        iterator.next(item);
        yielded = true;
      }
    }
    
    function resume() {
      data = arguments;
      check();
    }
}

run(function*(resume) {
    console.log("Hello");
    yield setTimeout(resume, 1000);
    console.log("World");
});

// 