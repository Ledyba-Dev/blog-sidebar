const scrollActive = () => {
    const sections = document.querySelectorAll("section[data-scroll]");
    
    const callback = (entries) => {
        // console.log(entries);

        entries.forEach(entrie => {
            const idSection = entrie.target.id;
            const linkAside = document.querySelector(`a[data-scroll][href="#${idSection}"]`);

            console.log(linkAside);
            entrie.isIntersecting
            ? linkAside.classList.add("active-content-link")
            : linkAside.classList.remove("active-content-link")
        })
    }

    const observerScroll = new IntersectionObserver(callback, {
        threshold: [0.59, 0.75],
    });

    sections.forEach(section => observerScroll.observe(section));
}

scrollActive();