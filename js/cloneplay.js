// second video play toggle

const mediaVideo2 = document.getElementById('extended');
const mute1button = document.getElementById('volume-button');
const muteButton = document.getElementById('volumeSecond');

// play all

$('#play-pause-button').click(function () {
    var mediaVideo = $("#subduedvideo, #subduedvideo, #subduedvideo, #subduedvideo, #subduedvideo, #subduedvideo, #subduedvideo, #subduedvideo");
    // by having the same id for different videos, only max 4 can play at once. potentially a cool glitch???
    mediaVideo.each(function (k, v) {
        if (v.paused) {
            v.play();
        } else {
            v.pause();
        }
    })
});

$('#play-pause-button-2').click(function () {
    var mediaVideo2 = $('#extended');
    mediaVideo2.each(function (k, v) {
        if (v.paused) {
            v.play();
        } else {
            v.pause();
        }
    })
});

// mute/audio button

muteButton.addEventListener('click', function () {
    if (mediaVideo2.muted === false) {
        // Mute the video
        mediaVideo2.muted = true;

    } else {
        // Unmute the video
        mediaVideo2.muted = false;
    }
});

// mute1button.addEventListener('click', function () {
//     var mediaVideo1 = document.getSelection('videocontainer');
//     if (mediaVideo1.muted === false) {
//         // Mute the video
//         mediaVideo1.muted = true;

//     } else {
//         // Unmute the video
//         mediaVideo1.muted = false;
//     }
// });

// $('#volume-button').click(function (e) {
//     var mediaVideo = $("#subduedvideo")
//     mediaVideo.muted = !mediaVideo.muted;
// });


var cloneCount = 1;;
$("#click").click(function () {
    $('#id')
        .clone()
        .attr('id', 'id' + cloneCount++)
        .insertAfter($('[id^=id]:last'))
        .text('id ' + (cloneCount - 1));
});


$("#add").click(function () {

    var $clone = $('#upload').clone();

    //$clone.attr('id',$clone.attr('id').replace(/\d+$/, function(str) { return parseInt(str) + 1; }) ); 
    $clone.attr('id', 'upload' + cloneCount++)
    // Find all elements in $clone that have an ID, and iterate using each()
    $clone.find('[id]').each(function () {
        //Perform the same replace as above
        var $th = $(this);
        var newID = $th.attr('id').replace(/\d+$/, function (str) {
            return parseInt(str) + cloneCount;
        });
        //var newName = $th.attr('name').replace(/\d+$/, function(str) { return parseInt(str) + 1; });
        console.log(newID);
        //console.log(newName);

        $th.attr('id', newID);
    });

    $clone.insertAfter($('[id^=upload]:last'))
});

// remove clone object, does not protect original at this point

$("#delete").on("click", function () {
    if ($('.container video').length > 1) {
        $(".container video:last").remove();
    }

});



// infinite scroll

document.addEventListener("DOMContentLoaded", function () {
    var div = document.getElementById("endlessscroll");
    div.addEventListener("scroll", function () {
        var max_scroll = this.scrollHeight - this.clientHeight;
        var current_scroll = this.scrollTop;
        var bottom = 100;
        if (current_scroll + bottom >= max_scroll) {
            var ul = document.getElementsByTagName("ul")[0];
            var current = parseInt(ul.dataset.current, 10);
            var li = document.getElementsByTagName("li")[current];
            var new_li = li.cloneNode(true);
            ul.appendChild(new_li);
            ul.dataset.current = current + 1;
        }
    });
});


// index toggle
var indButton = document.getElementById('indexToggle');
var mobButton = document.getElementById('indexToggle2');
var indClose = document.getElementById('indexClose');

indButton.onclick = function () {
    var inDiv = document.getElementById('indDisplay');
    if (inDiv.style.display === 'none') {
        inDiv.style.display = 'block';
    } else {
        inDiv.style.display = 'block';
    }
};

mobButton.onclick = function () {
    var inDiv = document.getElementById('indDisplay');
    if (inDiv.style.display === 'none') {
        inDiv.style.display = 'block';
    } else {
        inDiv.style.display = 'block';
    }
};

indClose.onclick = function () {
    var inDiv = document.getElementById('indDisplay');
    if (inDiv.style.display === 'block') {
        inDiv.style.display = 'none';
    } else {
        inDiv.style.display = 'none';
    }
}