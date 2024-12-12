function scrollToSection(sectionId)
{
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

document.getElementById('homeBtn').addEventListener('click', function() {
    console.log('Home button clicked');
    scrollToSection('home');
});

document.getElementById('predictBtn').addEventListener('click', function() {
    scrollToSection('predict');
});

document.getElementById('contactBtn').addEventListener('click', function() {
    scrollToSection('contact');
});