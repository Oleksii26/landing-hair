const shadow = document.querySelector(".shadow");
const arrow = document.querySelector(".arrow");
// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        shadow.classList.remove('shadow');
        arrow.style.display = 'contents'
        
        // Remove active class from all buttons and content
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Show corresponding content
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

const inputs = document.querySelectorAll('.form-control')

inputs.forEach(input => {
    input.addEventListener('input', () => {        
        if(input.value.trim() !== "") {
            input.classList.remove('error')          
        }  else {
            input.classList.add('error')          

        }      
    })
})

// products
document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");
    const productImages = document.querySelectorAll(".product-image");
    const descriptions = document.querySelectorAll(".product-description");

    // Додаємо клас d-none до всіх, крім першого
    productImages.forEach((img, index) => {
        if (index !== 0) img.classList.add("d-none");
    });
    descriptions.forEach((desc, index) => {
        if (index !== 0) desc.classList.add("d-none");
    });

    features.forEach((feature, index) => {
        feature.addEventListener("click", function () {
            // Видаляємо клас active у всіх елементів
            features.forEach(f => f.classList.remove("active"));
            productImages.forEach(img => img.classList.add("d-none"));
            descriptions.forEach(desc => desc.classList.add("d-none"));

            // Додаємо клас active до вибраного елемента
            this.classList.add("active");

            // Знімаємо d-none з відповідного product-image та product-description
            if (productImages[index]) productImages[index].classList.remove("d-none");
            if (descriptions[index]) descriptions[index].classList.remove("d-none");
        });
    });
});
