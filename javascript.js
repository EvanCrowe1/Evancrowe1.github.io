// JavaScript to enable sliding functionality
        let currentIndex = 0;
        const images = document.querySelectorAll('.image-container img');
        const imageContainer = document.querySelector('.image-container');
        const totalImages = images.length;

        document.querySelector('.arrow-left').addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                imageContainer.style.transform = `translateX(-${currentIndex * 315}px)`; // Adjust based on image width and margin
            }
        });

        document.querySelector('.arrow-right').addEventListener('click', () => {
            if (currentIndex < totalImages - 1) {
                currentIndex++;
                imageContainer.style.transform = `translateX(-${currentIndex * 315}px)`; // Adjust based on image width and margin
            }
        });


 