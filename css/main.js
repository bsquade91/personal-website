document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'a') return; 

            // Clear the tracking name from all boxes first so the browser doesn't get confused
            boxes.forEach(b => b.style.viewTransitionName = 'none');
            
            // Apply the tracking name ONLY to the box you just clicked
            box.style.viewTransitionName = 'active-bento-card';

            if (!document.startViewTransition) {
                boxes.forEach(b => { if (b !== box) b.classList.remove('expanded'); });
                box.classList.toggle('expanded');
                return;
            }
            
            document.startViewTransition(() => {
                boxes.forEach(b => {
                    if (b !== box) b.classList.remove('expanded'); 
                });
                box.classList.toggle('expanded');
            });
        });
    });
});
