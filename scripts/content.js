

function colorizeDate(date, element) {
    const formatDate = new Date(date.split('/').reverse().join('-'));
    const now = new Date();

    const diff = formatDate.getTime() - now.getTime(); 
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); 

    console.log(days);
    if (days <= 1) {
        element.style.color = "red";
    }
    else if (days <= 3) {
        element.style.color = "orange";
    }
    else {
        element.style.color = "green";
    }
}

function findDeadlines() {
  let prazos = document.querySelectorAll('strong');
    prazos.forEach((prazo) => {
        const textContent = prazo.textContent;
        if (textContent.match(/([0-9])+\/([0-9])+\/([0-9])\w+/g)) {
        const date = (textContent.match(/([0-9])+\/([0-9])+\/([0-9])\w+/g))[0];
        colorizeDate(date, prazo);
      }
    });
}

function main() {
    findDeadlines();
}

main();


