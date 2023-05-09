$(function(){
    var counter = 0;
    $("button").On("click", function(){
        $("#container").appendTo("<span class='ball-in'></span>");
        var arr=[ 'red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson']
        const colNum=Math.floor((Math.random() * arr.length) + 0);
        var spans=$("span");
        const sp=spans.eq(count);
        count=count+1;
        sp.css({
            "background-color":ballColor
        });
    })
})