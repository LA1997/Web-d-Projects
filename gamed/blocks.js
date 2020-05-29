function setup(){
    createCanvas(500, 200);
    background('golden');   
}
function draw(){
    var colors=["blue","green","yellow","orange","red"];
    var i,j,k=0;
    for(i=0;i<=475;i=i+25)
    {
        for(j=0;j<=150;j=j+50,k++)
        {
            fill(colors[k]);
            rect(i,j,25,50);
        }
    }
}