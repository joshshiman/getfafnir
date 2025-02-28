// Updated index.js (fixes included)
document.addEventListener('DOMContentLoaded', function() {
    // Header functionality (existing code)
    const RESPONSIVE_WIDTH = 1024;
    let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH;
    const collapseBtn = document.getElementById("collapse-btn");
    const collapseHeaderItems = document.getElementById("collapsed-header-items");

    // Trusted logos scroll functionality (new code)
    function initializeLogoScroll() {
        const track = document.getElementById('logosTrack');
        if (!track) {
            console.error('Logos track element not found!');
            return;
        }

        try {
            const logos = track.children;
            const cloneCount = logos.length;
            
            // Clone logos only once
            for(let i = 0; i < cloneCount; i++) {
                const clone = logos[i].cloneNode(true);
                track.appendChild(clone);
            }

            // Set animation duration
            const totalLogos = cloneCount * 2;
            track.style.animationDuration = `${totalLogos * 2}s`;
        } catch (error) {
            console.error('Logo scroll initialization failed:', error);
        }
    }

    // Only initialize if on page with logos
    if (document.getElementById('logosTrack')) {
        initializeLogoScroll();
    }

    // Existing header functions
    function onHeaderClickOutside(e) {
        if (!collapseHeaderItems.contains(e.target)) {
            toggleHeader();
        }
    }

    function toggleHeader() { /* existing toggle code */ }
    function responsive() { /* existing responsive code */ }

    window.addEventListener('resize', responsive);
});