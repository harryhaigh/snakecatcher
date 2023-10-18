



    console.log(document.body)

window.addEventListener("scroll", (e) => {
    var body = document.body;
        html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    
    var section = height / 9;
    //console.log(height)
    //console.log("Seciton: " + section)
    let scroll = this.scrollY;

    console.log(height)
    console.log(scroll)

    if (scroll < (section)) {
        document.body.className = 'six-am';
        document.getElementById("time").innerHTML = "6 AM";
    } else if (scroll < (section * 2) && scroll > section) {
        document.body.className = 'nine-am';
        document.getElementById("time").innerHTML = "9 AM";
    } else if (scroll < (section * 3) && (scroll > section * 2)) {
        document.body.className = 'twelve-pm';
        document.getElementById("time").innerHTML = "12 PM";
    } else if (scroll < (section * 4) && (scroll > section * 3)) {
        document.body.className = 'three-pm';
        document.getElementById("time").innerHTML = "3 PM";
    } else if (scroll < (section * 5) && (scroll > section * 4)) {
        document.body.className = 'six-pm';
        document.getElementById("time").innerHTML = "6 PM";
    } else if (scroll < (section * 6) && (scroll > section * 5)) {
        document.body.className = 'nine-pm';
        document.getElementById("time").innerHTML = "9 PM";
    } else if (scroll < (section * 7) && (scroll > section * 6)) {
        document.body.className = 'twelve-am';
        document.getElementById("time").innerHTML = "12 AM";
    } else if (scroll < (section * 8) && (scroll > section * 7)) {
        console.log("Section 8")
        document.body.className = 'three-am';
        document.getElementById("time").innerHTML = "3 AM";
    } else if ( scroll > (section * 9) - (section + 1)) {
        document.body.className = 'six-am';
        document.getElementById("time").innerHTML = "6 AM";
    }

    //console.log(scroll)
});