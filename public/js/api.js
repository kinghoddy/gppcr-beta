// const loadBg = document.querySelector('.load-box');
// loadBg.classList.add('blind')
function notification(tit, bod, logo, photo, photo2) {

    if ('Notification' in window) {
        if (Notification.permission == 'granted') {
            notify(tit, bod, logo, photo, photo2)

        } else {
            Notification.requestPermission().then(function (result) {
                console.log(result);
                notify(tit, bod, logo, photo, photo2)
            })
                .catch(err => {
                    console.log(err)
                })
        }

    } else (console.log('notification not working'));
}

function notify(tit, bod, logo, photo, photo2) {
    let title = tit;
    let options = {
        body: bod,
        data: {
            prop1: 123,
            prop2: 'odun'
        },
        icon: logo,
        badge: photo,
        timestamp: Date.now() + 5000,
        image: photo2,
        vibrate: [100, 200, 100]
    }
    let notif = new Notification(title, options);
    console.log(notif);
    notif.addEventListener('show', function (ev) {
        console.log(ev.currentTarget.data)
    })

}
function navbar() {
    var navbar = document.querySelector('nav'),
        img = document.querySelector('.navbar-brand > img');
    db = document.documentElement;
    function colorize() {
        if (db.scrollTop > 150) {

            img.style = "height: 50px";
            navbar.classList.add('navbar-light')
            navbar.classList.remove('navbar-dark')
            navbar.classList.add('bg-white');
            navbar.style = `padding :  0 20px;
                            box-shadow: 0 .5rem .5rem rgba(0,0,0, .1)`
        }
        else {
            img.style = "height: 60px";
            navbar.classList.remove('navbar-light')
            navbar.classList.add('navbar-dark');
            navbar.classList.remove('bg-white');
            navbar.style = ''
            navbar.addEventListener('click', () => {
                navbar.classList.toggle('bg-dark');
            })
        }
    }
    window.addEventListener('scroll', colorize);
    colorize()
}
function parallax(el) {
    var el = document.querySelector(el);

    window.addEventListener('scroll', () => {
        var n = Math.round(document.documentElement.scrollTop / window.innerHeight * 50) + '%';
        el.style.top = `${n}`

    })
}

(function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support system notifications");
        // This is not how you would really do things if they aren't supported. :)
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Hi there!");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("Hi there!");
            }
        });
    }

    // Finally, if the user has denied notifications and you 
    // want to be respectful there is no need to bother them any more.
})