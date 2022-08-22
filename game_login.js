function AAAAAAddUUUUUser() {
    p1_name = document.getElementById("player1_name").value
    p2_name = document.getElementById("player2_name").value
    if(p1_name==p2_name){
        alert("the names of both players are the same. please choose a different name for player1/2")
    }
    else{
        localStorage.setItem("p1e", p1_name)
    localStorage.setItem("p2e", p2_name)
    window.location = "game_page.html"
    }
}