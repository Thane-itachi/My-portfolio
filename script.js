"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // =====================================
    // 1. MOBILE NAVIGATION
    // =====================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-link");

    function closeMenu() {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the mobile menu when a link is selected.
    navItems.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close the menu when the visitor clicks outside it.
    document.addEventListener("click", (event) => {
        if (
            navLinks.classList.contains("open") &&
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Close the menu when the window becomes wider.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            closeMenu();
        }
    });


    // =====================================
    // 2. AUTOMATIC COPYRIGHT YEAR
    // =====================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // =====================================
    // 3. ACTIVE NAVIGATION LINK
    // =====================================

    const sections = document.querySelectorAll("main section[id]");

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const currentId = entry.target.id;

                    navItems.forEach((link) => {
                        const isActive =
                            link.getAttribute("href") === `#${currentId}`;

                        link.classList.toggle("active", isActive);
                    });
                });
            },
            {
                rootMargin: "-25% 0px -60% 0px",
                threshold: 0
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }


    // =====================================
    // 4. PREVENT EMPTY EMAIL LINKS
    // =====================================

    // Replace YOUR_EMAIL@example.com in index.html
    // with your actual email address before publishing.


    // =====================================
    // 5. CONSOLE MESSAGE
    // =====================================

    console.log(
        "%c TERDOO.DEV ",
        "background: #0e7490; color: white; padding: 8px; font-weight: bold;"
    );

    console.log(
        "Welcome to my portfolio. Built with HTML, CSS, and JavaScript."
    );
});