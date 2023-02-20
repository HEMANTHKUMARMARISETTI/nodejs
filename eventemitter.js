const eventemitter=require('events');

const emitter=new eventemitter();

// emitter.on("order pizza",()=>{
//     console.log('order recieved')
// })

// emitter.emit("order pizza")



emitter.on("order pizza",(size,topping)=>{
    console.log(`order received ,pizza with ${size} and with ${topping}`)
})

emitter.emit("order pizza","large","chicken");