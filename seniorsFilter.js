function showOnlySeniors(page) {
    const headRow = page.querySelector('.block-stats__stats-table thead tr');
    const bodyRows = page.querySelectorAll('.block-stats__stats-table tbody tr');
    const players = buildPlayers(headRow, bodyRows);
    console.log(players);
    hideNonSeniors(players);
}

function buildPlayers(headRow, bodyRows) {
    const headCellsArray = Array.from(headRow.querySelectorAll('th'));
    const bodyRowsArray = Array.from(bodyRows);
    return bodyRowsArray.map((bodyRow) => {
        const bodyCellsArray = Array.from(bodyRow.querySelectorAll('td'));
        const player = { tr: bodyRow };
        return headCellsArray.reduce((memo, headCell, i) => {
            memo[headCell.innerText] = bodyCellsArray[i].innerText;
            return memo;
        }, player);
    });
}

function hideNonSeniors(players) {
    players.forEach((player) => {
        if (player.CL !== 'Sr.') {
            console.log('bye', player.NAME);
            player.tr.style.display = 'none';
        }
    });
}

showOnlySeniors(document);