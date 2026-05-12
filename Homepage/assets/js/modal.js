        // Get modal and link elements
        const modal = document.getElementById('modal');
        const link = document.getElementById('content-link');
        const closeBtn = document.querySelector('.close');

        // Open modal when clicking Grid Garden link
        link.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        });

        // Close modal when clicking close button
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside the modal content
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });