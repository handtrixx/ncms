function activeNav() {
    var activeNav = "";
    var activePage = window.location.pathname;
    switch (activePage) {
        case "/":
            activeNav = "home";
            break;
        case "/index.html":
            activeNav = "home";
            break;
        case "/privacy-policy.html":
            activeNav = "privacy";
            break;
        default:
            activeNav = "blog";
    }
    if (document.getElementById("nav-home").classList.contains("active")) {
        document.getElementById("nav-home").classList.remove("active");
    }
    if (document.getElementById("nav-blog").classList.contains("active")) {
        document.getElementById("nav-blog").classList.remove("active");
    };
    if (document.getElementById("nav-footer-home").classList.contains("active")) {
        document.getElementById("nav-footer-home").classList.remove("active");
    };
    if (document.getElementById("nav-footer-blog").classList.contains("active")) {
        document.getElementById("nav-footer-blog").classList.remove("active");
    };
    if (document.getElementById("nav-footer-privacy").classList.contains("active")) {
        document.getElementById("nav-footer-privacy").classList.remove("active");
    };
    if (document.getElementById("lang-de").classList.contains("active")) {
        document.getElementById("lang-de").classList.remove("active");
    }
    if (document.getElementById("lang-en").classList.contains("active")) {
        document.getElementById("lang-en").classList.remove("active");
    }
    if (activeNav == "home") {
        document.getElementById("nav-home").classList.add("active");
        document.getElementById("nav-footer-home").classList.add("active");
    } else if (activeNav == "blog") {
        document.getElementById("nav-blog").classList.add("active");
        document.getElementById("nav-footer-blog").classList.add("active");
    } else if (activeNav == "privacy") {
        document.getElementById("nav-footer-privacy").classList.add("active")
    }
    if (lang == "de") {
        document.getElementById("lang-de").classList.add("active");
    } else {
        document.getElementById("lang-en").classList.add("active");
    }
}

function welcome() {
    let textStyle = [
        "color: #fff",
        //"background-color: red",
    ].join(';');
    let picStyle = [
        "font-family:monospace",
        "color: red",
        "font-size: 8px",
        //"line-height: 10px"
    ].join(';');
    console.log(
        `%c
##    ##   ######   ##     ##   ######  
###   ##  ##    ##  ###   ###  ##    ## 
####  ##  ##        #### ####  ##       
## ## ##  ##        ## ### ##   ######  
##  ####  ##        ##     ##        ## 
##   ###  ##    ##  ##     ##  ##    ## 
##    ##   ######   ##     ##   ######  
`, picStyle);

    console.log("%c https://github.com/handtrixx/ncms", textStyle);

    fetch('/deploy.log')
        .then(response => response.text())
        .then(data => {
            console.log(data);
        });
}

function setlang() {
    let userlang = "";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('lang')) {
        lang = urlParams.get('lang');
    } else {
        userlang = getCookie("userlang");
        if (userlang != "") {
            lang = userlang;
        } else {
            lang = navigator.language || navigator.userLanguage;
            lang = lang.substring(0, 2);
        }
    }
    var loc = window.location.pathname;

    if (lang != "de") {
        document.cookie = "userlang=en; path=/";
        lang = "en";
        if (loc.substring(0, 7) == "/posts/" && loc.substring(loc.length - 8) != "_en.html") {
            targetUrl = loc.replace(".html", "_en.html").replace("/posts/", "");
            goto(targetUrl, 'post');
        }
    } else {
        document.cookie = "userlang=de; path=/";
        if (loc.substring(0, 7) == "/posts/" && loc.substring(loc.length - 8) == "_en.html") {
            targetUrl = loc.replace("_en.html", ".html").replace("/posts/", "");
            goto(targetUrl, 'post');
        }
    }
}

function translate() {
    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');

    var myInit = {
        method: 'GET',
        headers: myHeaders,
    };

    let langids = document.getElementsByClassName("langkey");

    if (langids.length > 0) {
        const json = fetch("/assets/json/langkeys.json", myInit).then(response => response.json())
            .then(function (json) {
                const langdata = document.querySelectorAll("[data-langval]");

                langdata.forEach(el => {
                    for (var h = 0; h < json.length; h++) {
                        if (el.dataset.langval == json[h].id) {
                            if (lang == "de") {
                                el.innerHTML = json[h].deval;
                            } else {
                                el.innerHTML = json[h].enval;
                            }

                        }
                    }
                })

                for (var i = 0; i < langids.length; i++) {
                    for (var j = 0; j < json.length; j++) {
                        if (json[j].id == langids[i].id) {
                            if (lang == "de") {
                                document.getElementById(langids[i].id).innerHTML = json[j].deval;
                            } else {
                                document.getElementById(langids[i].id).innerHTML = json[j].enval;
                            }
                        }
                    }
                }
            }
            );
    }
}

function search() {
    var resulthtml = "";
    var results = [];
    var searchArray = [];
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    if (searchInput == "*" || searchInput == "") {
        searchInput = " ";
        searchArray.push(searchInput);

    } else {
        searchFull = searchInput;
        searchInput = searchInput.replace(/-/g, " ").replace(/.html/g, " ");
        searchArray = searchInput.match(/\S+/g);
        searchArray.push(searchFull);
    }

    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    var myInit = { method: 'GET', headers: myHeaders, };
    const json = fetch("/searchindex.json", myInit).then(response => response.json())
        .then(function (json) {

            for (h = 0; h < searchArray.length; h++) {
                for (var i = 0; i < json.length; i++) {
                    var postlang = json[i].lang;
                    var head = json[i].headline.toLowerCase();
                    var content = json[i].content.toLowerCase();
                    var link = json[i].link.toLowerCase();

                    if (head.search(searchArray[h]) > -1) {
                        results.push(i);
                    }
                    if (content.search(searchArray[h]) > -1) {
                        results.push(i);
                    }
                }
            }

            let uniqueResults = [...new Set(results)];

            if (uniqueResults.length > 0) {
                for (var j = 0; j < uniqueResults.length; j++) {
                    var position = json[uniqueResults[j]].content.toLowerCase().search(searchInput);
                    resulthtml = resulthtml + `
                <li class="list-group-item d-flex align-items-start">
                <a href="`+ json[uniqueResults[j]].link + `?lang=` + json[uniqueResults[j]].lang + `">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">`+ json[uniqueResults[j]].headline + ` <span class="badge bg-secondary">
                    `+ json[uniqueResults[j]].lang + `
                    </span> </div>
                    `+ json[uniqueResults[j]].content.substring(position, position + 160) + `...
                    </div>
                </a>
                </li>
                `
                }
            } else {
                if (lang == "de") {
                    resulthtml = `
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold" id="search_notfound">Kein Treffer</div>
                    <span id="search_notfoundinfo">Kein passender Begriff gefunden</span>
                    </div>
                </li>`
                } else {
                    resulthtml = `
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold" id="search_notfound">Not found</div>
                    <span id="search_notfoundinfo">There is no match for your search term.</span>
                    </div>
                </li>`
                }
            }
            document.getElementById("searchrresults").innerHTML = resulthtml;
        }
        );
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function goto(target, type) {
    if (type) {

        window.open("/posts/" + target, "_self");
    } else {
        switch (target) {
            case "blog":
                window.open("/blog.html", "_self");
                break;
            case "search":
                window.open("/search.html", "_self");
                break;
            default:
                window.open("/index.html", "_self");
                break;
        }
    }
}

function postspy() {
    // Generate ids for contents headlines
    //const elems = document.querySelectorAll('h2,h3');
    const elems = document.querySelectorAll('h2');
    var counter = 1;
    var spylinks = "";
    var fontstyle = "";

    for (var i = 0; i < elems.length; i++) {
        var element = elems[i];
        if (!element.id) {
            if (element.nodeName != "H2") {
                fontstyle = "fw-light";
            } else {
                fontstyle = "";
            }
            element.id = "head-" + counter;
            spylinks = spylinks + '<a class="nav-link ' + fontstyle + '" href="#head-' + counter + '">' + element.innerHTML + '</a>';
            counter = counter + 1;
        }
    }
    //set navlinks for scrollspy
    document.getElementById("spylinks").innerHTML = spylinks;
}

function socialShare(value) {
    currentUrl = window.location.href;
    targetUrl = "";
    if (value == "facebook") {
        sharerUrl = "https://www.facebook.com/sharer/sharer.php?u=";
    }
    if (value == "twitter") {
        sharerUrl = "https://twitter.com/intent/tweet?url=";
    }
    if (value == "mail") {
        subject = "Ein interessanter Link auf niklas.stephan.de";
        sharerUrl = "mailto:irgendwer@irgendwo.de?subject=" + subject + "&body=";
    }
    if (value == "whatsapp") {
        sharerUrl = "https://api.whatsapp.com/send?text=";
    }
    if (value == "linkedin") {
        sharerUrl = "https://www.linkedin.com/sharing/share-offsite/?url="
    }
    targetUrl = sharerUrl + currentUrl;
    window.open(targetUrl, '_blank');
}

function gdpr_dialogue() {
    var toast = new bootstrap.Toast(gdprToast);
    var cookie = getCookie("gdpr");

    if (cookie == "") {
        toast.show();
    }
}

function gdpr_cookie() {
    document.cookie = "gdpr=yes; path=/";
}

function blogdateConvert() {
    var postdates = document.getElementsByClassName("pdate");
    for (var i = 0; i < postdates.length; i++) {
        inputdate = postdates.item(i).innerHTML.replace(/\s/g, '');
        outputdate = new Date(inputdate);
        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        if (lang == "de") {
            outputdate = outputdate.toLocaleDateString('de-DE', options);
        } else {
            outputdate = outputdate.toLocaleDateString('en-US', options);
        }
        postdates.item(i).innerHTML = outputdate;
    }
}

function postdateConvert() {
    var inputdate = document.getElementById("postdate").innerHTML;
    var outputdate = new Date(inputdate);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    if (lang == "de") {
        outputdate = outputdate.toLocaleDateString('de-DE', options);
    } else {
        outputdate = outputdate.toLocaleDateString('en-US', options);
    }
    document.getElementById("postdate").innerHTML = outputdate;
}

function errorpage() {
    const currentUrl = window.location.pathname;
    if (currentUrl.substring(0, 7) == "/posts/") {
        let postUrl = currentUrl.substring(7);
        let searchUrl = postUrl.replace("_en.html", "");
        document.getElementById("searchInput").value = searchUrl;
        document.getElementById("button-search").click();
    }
}

function searchKeyLogger() {
    var input = document.getElementById("searchInput");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13 || input.value.length > 2) {
            event.preventDefault();
            document.getElementById("button-search").click();
        }
    });
}