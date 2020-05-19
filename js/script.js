$("#checkout").click(function () {
    let flavour = $(".flavour option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(totalPrice);

    let order = (f, s, c, t, n, total) => {
        return {f, s, c, t, n, total};
    };

     //check price
     let price, totalPrice;
     switch (flavour) {
         case flavour = "vegtikka":
             switch (size) {
                 case size = "regular":
                     price = 500;
                     if (crust === "thin") {
                         totalPrice = (price * number) + 200;
                     } else if (crust === "thick") {
                         totalPrice = (price * number) + 450;
                     } else if (crust === "flatbread") {
                         totalPrice = (price * number) + 100;
                     } else {
                         totalPrice = (price * number) + 150;
                     }
                     break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                        case size = "mega":
                        price = 1700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                }
                break;
        }

        caseflavour = "beef pepperoni";
                switch (size) {
                    case size = "regular":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = "mega":
                        price = 1700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                }
                break;

                caseflavour = "chicken periperi";
                switch (size) {
                    case size = "regular":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = "mega":
                        price = 1700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                }
                break;

                caseflavour = "chicken hawaiian";
                switch (size) {
                    case size = "regular":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = "mega":
                        price = 1700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                }
                break;

                caseflavour = "chicken macon BBQ";
                switch (size) {
                    case size = "regular":
                        price = 500;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = "mega":
                        price = 1700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                }
                break;

                caseflavour = "meat deluxe";
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                    case size = "mega":
                        price = 1700;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 100;
                        } else {
                            totalPrice = (price * number) + 150;
                        }
                        break;
                }
                break;


        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 80;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 80;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 80;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 80;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 120;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 120;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 120;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 120;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 120;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 170;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 170;
                break;

        }
        
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder);


        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui');
    });

    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);
        $('.cdata-overlay').slideDown();
    });


    
    $(".delivernot").click(function () {

    });
    $(function () {
        $('.summary').hide();
        $('.cdata-overlay').hide();
    });

    $(function () {
        $.scrollify.move('#sum-order');
    });

    let size, email;
size = document.getElementById('#size').value;
email = document.getElementById('#email').value;

function subscribe() {
    alert("Hello.. "  + "We value your feedback message!!!");
    console.log(email);
}

let validateInput = () => {
    if (size === "") {
        console.log("Please specify the size");
    }
}