// Descriminated union
interface Circle
{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square",
    side:number
}

interface Rectrange
{
    kind:"rectrangle",
    length:number,
    width:number
}

type Shape=Circle|Square|Rectrange

function getTrueShape(shape:Shape)
{
    if(shape.kind=="circle")
    {
        return Math.PI*shape.radius**2;
    } 
    //return shape.side*shape.side;
}

function getArea(shape:Shape)
{
   switch(shape.kind)
   {
    case "circle":
        return Math.PI*shape.radius**2;
    case "square":
        return shape.side*shape.side;

    case "rectrangle":
        return shape.length*shape.width;
    default:
        const _defaultforshape:never=shape
        return _defaultforshape;
   } 
}