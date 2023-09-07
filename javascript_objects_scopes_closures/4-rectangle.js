#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0){
            this.width = w;
            this.height = h;
        }
    }

    // Methods print
    print() {
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }
    // Methods double
    double(){
        this.height = this.height * 2;
        this.width = this.width * 2;
    }
    // Methods repeat
    rotate(){
        [this.width, this.height] = [this.height, this.width];
    }
    
}
module.exports = Rectangle;