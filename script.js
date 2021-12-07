let org = {
    github: "P1P0S",
    youtube: "rocketseat",
};

function changeLinks() {
    for (let hrefs of socialLinks.children) {
        let social = hrefs.getAttribute("class");
        if (social | (org[social] == null)) {
            return;
        }
        let target = hrefs.getElementsByTagName("a")[0];
        target.setAttribute("target", "_blank");
        hrefs.children[0].href = `https://www.${social}.com/${org[social]}`;
    }
}

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${org.github}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            userAvatar.src = data.avatar_url;
            userName.textContent = data.login;
            userLogin.textContent = data.login;
            if (data.name == null) {
            } else {
                userName.textContent = data.name;
            }
            if (data.bio == null) {
            } else {
                userBio.textContent = data.bio;
            }
        });
}

changeLinks();
getGitHubProfileInfos();
