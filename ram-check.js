const currentRam = 8;
const idealRam = 16;
if (currentRam >= idealRam) 
    {console.log("laptop is ready to run docker!");}
else {console.log("upgrade needed : missing", idealRam - currentRam, "gb of ram.")}