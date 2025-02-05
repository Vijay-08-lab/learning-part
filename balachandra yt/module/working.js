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
const newObj = [
    {
"userId": 1,
"id":1,
"title": 'eyes',
"body": "eyes are the important organ in the human part that helps the human to identified the think and realise the color ana feel of light",
    },
    {
"userId":1,
'id':2,
"title": 'nose',
"body": "nose is also a one of the important part of human part it used to smell the thinks that human can see and feel", 
    },
{      
"userId":2,
'id': 1,
"title": 'heart',
"body": "heart is the one of the important oran in the human part. the heart pumps the blood and that cirulates the entire body oragan s to work. when the heart got failuer the human will leads to die.",
},
{
"userId" : 2,
'id' : 2,
'title': "Brain",
"body" : " brain is the one of the main organ in the human body. the function of the brain is more important beacause the in human the brain the organ which helps the human to think feel smell the think. the brain is like a main think that will helps the other organs to do their jobs",
},
]
export default myfun;
export {nextfun,newObj}