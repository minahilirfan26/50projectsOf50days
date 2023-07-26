const tubeLight = () =>{
    for(x =1; x<6; x++){
    let bid = document.getElementById("lightid".concat(x))
    if(bid.src.match('lighton')) {
        bid.src="lightOff.png";
     }else{
        bid.src = "lighton.png";
     }
    }
}
