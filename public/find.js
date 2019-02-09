function find() {


    $.get("/books?title=" + $("#submit").val(), function (result) {


        for (i in result.books) {
            $("#container2").append('<div class="rectandle1">' +
                '<div class="Title"><b>' + result.books[i].title + '</b></div>' +
                '<div class="description">' + result.books[i].text + '</div>' +
                '<div class="description"><h4>Booked:' + result.books[i].booked + '</h4></div>' +

                '<div id="book" class="Button1" style="display:block;">\n' +
                '<button onclick="booked()" class="Button" type="button">Book</button>\n' +
                '</div>' +

                '<div id="cancel" class="Button1" style="display:none;">\n' +
                '<button onclick="cancel()" class="Button" type="button">Cancel a booking</button>\n' +
                '</div>' +

                '</div>'
            );
        }
    });
}