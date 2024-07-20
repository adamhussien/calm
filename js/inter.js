/* const navv = document.querySelector(".navv");
const header = document.querySelector(".headerr")
console.log('headerr');
const navheight = navv.getBoundingClientRect().height;

const stickynav = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        navv.classList.add('fixednav');
    } else {
        navv.classList.remove('fixednav');
    }
};

const headerobser = new IntersectionObserver(stickynav, {
    root: null,
    threshold: 0,
    rootMargin: `${navheight}px 0px 0px 0px`
});

headerobser.observe(header); */

const sections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("sectionh");
    observer.unobserve(entry.target);
};

const sectionsObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.18,
});

sections.forEach(sec => {
    sectionsObserver.observe(sec);
    sec.classList.add('sectionh');
});

