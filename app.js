document.addEventListener('DOMContentLoaded', () => {
    const tourForm = document.getElementById('tour-form');
    const contactForm = document.getElementById('contact-form');
    const beerList = document.getElementById('beer-list');
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Beers and Seltzers Data
    const beersAndSeltzers = [
        { name: "Pale Ale", type: "Beer", description: "A light, hoppy ale with a crisp finish." },
        { name: "Stout", type: "Beer", description: "A dark, rich beer with notes of coffee and chocolate." },
        { name: "IPA", type: "Beer", description: "A bold, hoppy beer with a strong aroma." },
        { name: "Lager", type: "Beer", description: "A smooth, refreshing beer with a clean taste." },
        { name: "Lime Seltzer", type: "Seltzer", description: "A crisp and refreshing lime-flavored seltzer." },
    ];

    function renderBeersAndSeltzers() {
        beerList.innerHTML = beersAndSeltzers.map(item => `
            <div class="bg-white p-4 rounded shadow">
                <h3 class="text-xl font-semibold mb-2">${item.name} (${item.type})</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    renderBeersAndSeltzers();

    // Handle tab switching
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.getAttribute('data-tab');
            
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });

            document.getElementById(tab).classList.remove('hidden');
        });
    });

    // Handle tour form submission
    tourForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        alert(`Tour Scheduled!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}`);
        tourForm.reset();
    });

    // Handle contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('message').value;
        alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        contactForm.reset();
    });
});
