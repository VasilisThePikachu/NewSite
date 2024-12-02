let imageURLs = [
    "/images/pikachu.png",
    "/images/pikachu-fem.png"
];

function getRandomImage() {
    let img = '<img class="image pixelated" src=\"';
    let randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
img += '\" alt=\"A gif of a pikachu from gen 5\" \width=\"160px\" height= \"auto\">';
return img;
}

function discord(){
    alert ("My discord is vasilisiscool");
}

function ringSelector() {
    const selected = document.getElementById("selectedRing").value;

    // rings
    const fediring = document.getElementById("fediring");
    const furryring = document.getElementById("furryring");
    fediring.hidden = true
    furryring.hidden = true

    switch (selected) {
        case("fediring"):
            fediring.hidden = false
            break

        case("furryring"):
            furryring.hidden = false
            break
    }
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.scrollY;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-75px";
    }
    prevScrollpos = currentScrollPos;
}