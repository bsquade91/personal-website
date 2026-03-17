 <script>
        document.querySelectorAll('.box').forEach(box => {
            box.addEventListener('click', (e) => {
                // Prevent links inside the box from triggering the expansion if clicked directly
                if (e.target.tagName.toLowerCase() === 'a') return; 

                // Check if browser supports the API
                if (!document.startViewTransition) {
                    box.classList.toggle('expanded');
                    return;
                }
                
                // Trigger the seamless transition
                document.startViewTransition(() => {
                    // We remove 'expanded' from all other boxes first to ensure only one is open
                    document.querySelectorAll('.box').forEach(b => {
                        if (b !== box) b.classList.remove('expanded');
                    });
                    box.classList.toggle('expanded');
                });
            });
        });
    </script>
