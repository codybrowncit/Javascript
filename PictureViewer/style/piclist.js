var baseurl = 'http://russ.php.cs.dixie.edu/gardens/';

var piclist = [
    // 0 category
    [
        [ 'medium/viva01.jpg', 'thumbs/viva01.jpg' ],
        [ 'medium/viva02.jpg', 'thumbs/viva02.jpg' ],
        [ 'medium/viva03.jpg', 'thumbs/viva03.jpg' ],
        [ 'medium/viva04.jpg', 'thumbs/viva04.jpg' ],
        [ 'medium/viva05.jpg', 'thumbs/viva05.jpg' ],
        [ 'medium/viva06.jpg', 'thumbs/viva06.jpg' ],
        [ 'medium/viva07.jpg', 'thumbs/viva07.jpg' ],
        [ 'medium/viva08.jpg', 'thumbs/viva08.jpg' ],
        [ 'medium/viva09.jpg', 'thumbs/viva09.jpg' ],
        [ 'medium/viva10.jpg', 'thumbs/viva10.jpg' ],
        [ 'medium/viva11.jpg', 'thumbs/viva11.jpg' ],
        [ 'medium/viva12.jpg', 'thumbs/viva12.jpg' ],
        [ 'medium/viva13.jpg', 'thumbs/viva13.jpg' ],
        [ 'medium/viva14.jpg', 'thumbs/viva14.jpg' ],
        [ 'medium/viva15.jpg', 'thumbs/viva15.jpg' ],
        [ 'medium/viva16.jpg', 'thumbs/viva16.jpg' ],
        [ 'medium/viva17.jpg', 'thumbs/viva17.jpg' ],
        [ 'medium/viva18.jpg', 'thumbs/viva18.jpg' ],
        [ 'medium/viva19.jpg', 'thumbs/viva19.jpg' ],
        [ 'medium/viva20.jpg', 'thumbs/viva20.jpg' ],
        [ 'medium/viva21.jpg', 'thumbs/viva21.jpg' ],
        [ 'medium/viva22.jpg', 'thumbs/viva22.jpg' ],
        [ 'medium/viva23.jpg', 'thumbs/viva23.jpg' ],
        [ 'medium/viva24.jpg', 'thumbs/viva24.jpg' ],
        [ 'medium/viva25.jpg', 'thumbs/viva25.jpg' ],
        [ 'medium/viva26.jpg', 'thumbs/viva26.jpg' ],
        [ 'medium/viva27.jpg', 'thumbs/viva27.jpg' ],
        [ 'medium/viva28.jpg', 'thumbs/viva28.jpg' ],
    ],

    // 1 category
    [
        [ 'medium/viva29.jpg', 'thumbs/viva29.jpg' ],
        [ 'medium/viva30.jpg', 'thumbs/viva30.jpg' ],
        [ 'medium/viva31.jpg', 'thumbs/viva31.jpg' ],
        [ 'medium/viva32.jpg', 'thumbs/viva32.jpg' ],
        [ 'medium/viva33.jpg', 'thumbs/viva33.jpg' ],
        [ 'medium/viva34.jpg', 'thumbs/viva34.jpg' ],
        [ 'medium/viva35.jpg', 'thumbs/viva35.jpg' ],
        [ 'medium/viva36.jpg', 'thumbs/viva36.jpg' ],
        [ 'medium/viva37.jpg', 'thumbs/viva37.jpg' ],
        [ 'medium/viva38.jpg', 'thumbs/viva38.jpg' ],
        [ 'medium/viva39.jpg', 'thumbs/viva39.jpg' ],
        [ 'medium/viva40.jpg', 'thumbs/viva40.jpg' ],
        [ 'medium/viva41.jpg', 'thumbs/viva41.jpg' ],
        [ 'medium/viva42.jpg', 'thumbs/viva42.jpg' ],
    ],

    // 2 category
    [
        [ 'medium/viva43.jpg', 'thumbs/viva43.jpg' ],
        [ 'medium/viva44.jpg', 'thumbs/viva44.jpg' ],
        [ 'medium/viva45.jpg', 'thumbs/viva45.jpg' ],
        [ 'medium/viva46.jpg', 'thumbs/viva46.jpg' ],
        [ 'medium/viva47.jpg', 'thumbs/viva47.jpg' ],
        [ 'medium/viva48.jpg', 'thumbs/viva48.jpg' ],
        [ 'medium/viva49.jpg', 'thumbs/viva49.jpg' ],
        [ 'medium/viva50.jpg', 'thumbs/viva50.jpg' ],
    ],

    // 3 category
    [
        [ 'medium/viva51.jpg', 'thumbs/viva51.jpg' ],
        [ 'medium/viva52.jpg', 'thumbs/viva52.jpg' ],
        [ 'medium/viva53.jpg', 'thumbs/viva53.jpg' ],
        [ 'medium/viva54.jpg', 'thumbs/viva54.jpg' ],
        [ 'medium/viva55.jpg', 'thumbs/viva55.jpg' ],
        [ 'medium/viva56.jpg', 'thumbs/viva56.jpg' ],
        [ 'medium/viva57.jpg', 'thumbs/viva57.jpg' ],
        [ 'medium/viva58.jpg', 'thumbs/viva58.jpg' ],
        [ 'medium/viva59.jpg', 'thumbs/viva59.jpg' ],
        [ 'medium/viva60.jpg', 'thumbs/viva60.jpg' ],
    ],
];
var buttons = [document.getElementById("cat1"), document.getElementById("cat2"), document.getElementById("cat3"), document.getElementById("cat4")];
var carousel = document.getElementById("carousel-inner");
var nav = document.getElementById("nav");
var cat_index = 0;
var contents = [];
handler = function()
{
    if (this.innerHTML == "Category 4")
    {

        cat_index =3;
    }
    else if (this.innerHTML == "Category 2")
    {

        cat_index =1;
    }
    else if (this.innerHTML == "Category 3")
    {
        cat_index =2;
    }
    else
    {
        cat_index =0;
    }
    carousel.innerHTML ="";
    nav.innerHTML ="";
    var category = piclist[cat_index];
    count = 0;
    for (var image_index in category) 
    {
        var imagepair = category[image_index];
        var fullsize = baseurl + imagepair[0];
        var thumbnail = baseurl + imagepair[1];
        if (count ==0)
        {
            nav.innerHTML +='<li data-target="#main" data-slide-to="'+count+'" class="active" id="'+count+'"></li>';
            carousel.innerHTML += '<div class="item active"><img src="' + fullsize + '" height=20 ></div>';

        }
        else
        {
            nav.innerHTML +='<li data-target="#main" data-slide-to="'+count+'" id="'+count+'"></li>';
            carousel.innerHTML += '<div class="item"><img src="' + fullsize + '"></div>';
        }
        thumber= document.getElementById(count);
        thumber.style.minWidth = "75px";
        thumber.style.height = "60px";
        thumber.style.backgroundImage = "url("+thumbnail+")";
        thumber.style.backgroundSize = "75px";
        thumber.style.backgroundRepeat = "no-repeat";
        count++;
    };
    nav.style.width = '900px';
    nav.style.height = "60px";
    nav.style.overflowY = 'scroll';

};

for (var i = 0; i < buttons.length; i++) 
{
    buttons[i].onclick = handler;
}


