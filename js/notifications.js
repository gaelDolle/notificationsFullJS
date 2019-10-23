let boxNotifications = document.querySelector('#notifications');

//Fermeture sur l'evenement click
const listenerCloseNotification = () => {
    //Close on click on the Notif
    let notifsActive = document.querySelectorAll('.notification');

    notifsActive.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.remove('show');
            setTimeout(() => {
                item.remove();
            }, 300)
        })
    })

    //Or Close on click X of the item
    /*const alertClose = document.querySelectorAll('.notification .btnClose');
    alertClose.forEach(item => {
        item.addEventListener('click', function () {
            item.parentNode.classList.remove('show');
            setTimeout(() => {
                item.parentNode.remove();
            }, 300)
        })
    })*/
}

//Création de la Div contenant toutes les notifs
const checkDivNotifications = () => {
    if (boxNotifications == undefined) {
        boxNotifications = document.createElement('div');
        boxNotifications.setAttribute("id", "notifications");
        document.body.prepend(boxNotifications);
        boxNotifications = document.querySelector('#notifications');
    }
}

//Affichage de la Notif
const showNotification = (item) => {
    boxNotifications.prepend(item);
    setTimeout(() => {
        item.classList.add('show');
    }, 100)
    listenerCloseNotification();
}

//Création + Ajout de la Notif
const addNotification = (type, title, msg) => {

    checkDivNotifications();

    const newNotification = document.createElement('div');
    newNotification.classList = `notification notification-${type}`;
    
    let content = "<h1>" + title + "</h1>";
    content += "<p>" + msg + "</p>";
    content += "<button class='btnClose'>";
    content += "<i class='material-icons'>close</i>";
    content += "</button>";
    newNotification.innerHTML = content;

    let notifsActive = document.querySelectorAll('.notification');

    if (notifsActive.length >= 3) {
        notifsActive[2].classList.remove('show');
        setTimeout(() => {
            notifsActive[2].remove();
            setTimeout(() => {
                showNotification(newNotification);
            }, 500)
        }, 300)
    } else {
        showNotification(newNotification);
    }
}