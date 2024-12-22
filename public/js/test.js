const oneElement = document.getElementById("project-card1");



if (oneElement) {
    const resizeObserver = new ResizeObserver(() => {
        const width = window.getComputedStyle(oneElement).width; 
        console.log(parseInt(width));
        if (parseInt(width) >= 100){
            oneElement.style.height = "200px"
        }
        else{
            oneElement.style.height = "100px"
        }
    });

    resizeObserver.observe(oneElement); 
}

const segElement = document.getElementById("project-card2");

if (segElement) {
    const resizeObserver = new ResizeObserver(() => {
        const width = window.getComputedStyle(segElement).width; 
        console.log(parseInt(width));
        if (parseInt(width) >= 100){
            segElement.style.height = "200px"
        }
        else{
            segElement.style.height = "100px"
        }
    });

    resizeObserver.observe(segElement); 
}

const thirdElement = document.getElementById("project-card3");

if (thirdElement) {
    const resizeObserver = new ResizeObserver(() => {
        const width = window.getComputedStyle(thirdElement).width; 
        console.log(parseInt(width));
        if (parseInt(width) >= 100){
            thirdElement.style.height = "200px"
        }
        else{
            thirdElement.style.height = "100px"
        }
    });

    resizeObserver.observe(thirdElement); 
}
