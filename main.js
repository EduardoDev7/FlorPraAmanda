onload = () => {
    document.body.classList.remove("container");
    // Faz a cartinha aparecer com fade-in
    setTimeout(() => {
        document.querySelector('.love-letter').style.opacity = '1';
    }, 1000);
};