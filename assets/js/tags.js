export const tags = {
    br: () => { return '<br>' },
    h1: (text, elClass) => { return elClass ? '<h1 class="' + elClass + '">' + text + '</h1>' : '<h1>' + text + '</h1>' },
    legend: (text, elClass) => { return elClass ? '<h5 class="' + elClass + '">' + text + '</h5>' : '<h5>' + text + '</h5>' },
    p: (text, elClass) => { return elClass ? '<p class="' + elClass + '">' + text + '</p>' : '<p>' + text + '</p>' },
    span: (text, elClass) => { return elClass ? '<span class="' + elClass + '">' + text + '</span>' : '<span>' + text + '</span>' }
}