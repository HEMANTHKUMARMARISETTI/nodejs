const eventemitter=require('events');

const emitter=new eventemitter();


emitter.on("order pizza",(size,topping)=>{
    console.log("order received");
    console.log(`your ${size} ${topping} is baking now`);
})


//input 1:

emitter.emit("order pizza","large","mushroom");

//input 2:

// emitter.emit("order pizza","small","chicken");

//input 3:

// emitter.emit("order pizza","medium","mushroom");

