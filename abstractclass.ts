abstract class TakePhoto
{
    constructor(public cameraMode:string,
        public filer:string){}
    
        abstract getSpia():void

        getReelTime():number
        {
            return 8;
        }
}

class Instragram extends TakePhoto{
    constructor(public cameraMode:string,
        public filer:string,
        public burst:number
        ){
            super(cameraMode,filer)
        }
        getSpia(): void {
            console.log("Sepia");
        }

}

const obj=new Instragram("test","Test",1)

