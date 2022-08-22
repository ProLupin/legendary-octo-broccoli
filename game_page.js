player1_name = localStorage.getItem("p1e")
player2_name = localStorage.getItem("p2e")
player1_score = 0
player2_score = 0
document.getElementById("player1_name").innerHTML = player1_name + ":"
document.getElementById("player2_name").innerHTML = player2_name + ":"
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score
document.getElementById("player_question").innerHTML = "questionturn=" + player1_name
document.getElementById("player_answer").innerHTML = "answerturn=" + player2_name

function sendword() {
    word = document.getElementById("word").value
    if(word.length>=5){
        lword = word.toLowerCase()
    console.log("word in lower case", lword)
    char_1 = lword.charAt(1)
    console.log("char_1", char_1)
    position2 = Math.floor(lword.length / 2)
    char_2 = lword.charAt(position2)
    console.log("char_2", char_2)
    char_3 = lword.charAt(lword.length - 1)
    console.log("char_3", char_3)
    u1 = lword.replace(char_1, "_")
    u2 = u1.replace(char_2, "_")
    u3 = u2.replace(char_3, "_")
    console.log("word=", u3)
    q = "<h3 id='word_display'>q." + u3 + "</h3>"
    input_box = "<br>answer:<input type='text' id='input_check'>"
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>check</button>"
    document.getElementById("output").innerHTML = q + input_box + check_button
    document.getElementById("word").value = ""
    }
    else{
        alert("please enter a 5 letter word at the most.")
    }
    
}
qt = "p1"
at = "p2"

function check() {
    getAnswer = document.getElementById("input_check").value
    answer = getAnswer.toLowerCase()
    console.log(answer)
    if (answer == lword) {
        if (at == "p1") {
            player1_score += 1
            document.getElementById("player1_score").innerHTML = player1_score
        } else {
            player2_score += 1
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if (qt == "p1") {
        qt = "p2"
        document.getElementById("player_question").innerHTML = "questionturn=" + player2_name
    } else {
        qt = "p1"
        document.getElementById("player_question").innerHTML = "questionturn=" + player1_name
    }
    if (at == "p1") {
        at = "p2"
        document.getElementById("player_answer").innerHTML = "answerturn=" + player2_name
    } else {
        at = "p1"
        document.getElementById("player_answer").innerHTML = "answerturn=" + player1_name
    }
    document.getElementById("output").innerHTML = ""
}