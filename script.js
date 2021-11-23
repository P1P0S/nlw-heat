let org = {
    youtube: "pipos",
    twitter: "@pipos",
};

function changeLinks() {
    for (let hrefs of document.getElementById("socialLinks").children) {
        let social = hrefs.getAttribute("class");
        if (social == null) {
            return;
        }
        let target = hrefs.getElementsByTagName("a")[0];
        target.setAttribute("target", "_blank");
        hrefs.children[0].href = `https://www.${social}.com/${org[social]}`;
    }
}

changeLinks();
