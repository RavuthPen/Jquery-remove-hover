let data = [
    {
        id: "001",
        name: "TK1",
        gender: "male",
        address: "phnom penh"
    },
    {
        id: "001",
        name: "TK1",
        gender: "male",
        address: "phnom penh"
    },
    {
        id: "001",
        name: "TK1",
        gender: "male",
        address: "phnom penh"
    },
    {
        id: "001",
        name: "TK1",
        gender: "male",
        address: "phnom penh"
    },
    {
        id: "001",
        name: "TK1",
        gender: "male",
        address: "phnom penh"
    },
]
$(document).ready(function () {
    getData()
    mouseHover()
})
function getData() {
    let content = ""
    for(a of data){
        content = `
         <tr onclick="clickOnRow(this), removeData(this)">
            <th scope="row">${a.id}</th>
            <td>${a.name}</td>
            <td>${a.gender}</td>
            <td>${a.address}</td>
         </tr>
        `
        $('tbody').append(content)
    }
}
function mouseHover() {
     $('tr').not(':first').hover(
         function () {
             $(this).toggleClass('hoverStyle')
         }
         );
}
function clickOnRow(tr) {
    $(tr).toggleClass('thColor')
}
function removeData(tr) {
    let con = confirm("are you sour?")
    if (con == true){
        $(tr).remove()
    }else {

    }
}