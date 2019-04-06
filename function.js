function hi(name = "Anonymous") {
    if (name){
        console.log("Hello "+ name);
    }else {
        console.log("How are you ?");
    }
}

hi("world");
hi();