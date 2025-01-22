const myfun = () =>{
    return 'This Message is from myfunction working.js'
}

const nextfun = () =>{
    return 'This Message is from next function working.js'
}

export class subscriber {
    constructor(name){
        this.name = name;
    }
    email = ()=>{
        return `${this.name} dear user you should mail this dooo@gmail.com`
    }
}
export default myfun;
export {nextfun}