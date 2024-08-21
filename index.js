let markAll = document.querySelector(".mark-all");
let unreadCount = document.querySelector(".number");
let notifUnread = document.querySelectorAll(".notif-item.unread");


for (let i=0;i<notifUnread.length;i++){
    let item = notifUnread[i];
    item.addEventListener("click", function(){item.classList.remove("unread")})

}



function markUnread (){
    for (let i=0;i<notifUnread.length;i++){
        let item = notifUnread[i];
        item.classList.remove("unread")
    
    }
}

markAll.addEventListener("click", markUnread);



