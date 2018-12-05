function calculateArea(n) {
  return n**2 + (n-1)**2;
}

console.log(calculateArea(4));

function hotelPrice(matrix) {
  let price = 0;
  let roomsBeneath = [];
  let currentRooms = [];
  matrix.forEach(floor => {
    floor.forEach((room, i) => {
      if (room == 0) {
        roomsBeneath.push(i);
      } else if (!currentRooms.includes(i)) {
        price += room;
      }
    })
    currentRooms = roomsBeneath;
    roomsBeneath = [];
  })
  return price;
}

console.log(hotelPrice([[0, 1, 1, 2],
                        [0, 5, 0, 0],
                        [2, 0, 3, 3]]));

function parenReverse(str) {
  let openParen = null;
  let closeParen = null;
  while (str.includes("(")) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] == "(") { openParen = i }
      else if (str[i] == ")" && openParen) {
        closeParen = i;
        let a = str.slice(0, openParen);
        let b = str.slice(openParen + 1, closeParen);
        let c = str.slice(closeParen + 1);
        str = a + reverseString(b) + c;
        openParen = null;
        closeParen = null;
      }
    }
  }
  return str;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(parenReverse("a(bc)de"));
console.log(parenReverse("co(de(fight)s)"));
console.log(parenReverse("The ((quick (brown) (fox) jumps over the lazy) dog)"));
