const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    reset: true
});

sr.reveal('.home-text', {delay: 200, origin: 'top'});
sr.reveal('.home-img', {delay: 400, origin: 'top'});
sr.reveal('.about, .contact', {delay: 200, origin:'top'})