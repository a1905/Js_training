const busContainer = document.getElementById("busContainer");

let seatNumber = 1;

const reservedSeats = JSON.parse(localStorage.getItem("reservedSeats")) || {};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 6; j++) {
    const seat = document.createElement("button");
    seat.classList.add("seat");

    seat.textContent = seatNumber;
    seatNumber++;
    busContainer.appendChild(seat);

    if (reservedSeats[seat.textContent]) {
      seat.classList.add("reserved");
    }

    seat.addEventListener("click", function () {
      reserveSeat(seat);
    });
  }
}

function reserveSeat(seat) {
  const seatNumber = seat.textContent;

  if (seat.classList.contains("reserved")) {
    alert("Bu koltuk zaten rezerve edilmiştir.");
  } else {
    seat.classList.add("reserved");
    alert(`Koltuk ${seatNumber} rezerve edildi.`);

    // Rezerve edilen koltuğu local storage'a kaydet
    reservedSeats[seatNumber] = true;
    localStorage.setItem("reservedSeats", JSON.stringify(reservedSeats));
  }
}
