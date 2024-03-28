interface TakePoto
{
    cameraMode:string
    filter:string
    burst:number
}
interface Story
{
    createStory():void
}
class Instragram1 implements TakePoto
{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
}