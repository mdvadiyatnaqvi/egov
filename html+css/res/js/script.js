// section 4 js starts here

const sec4Buttons = document.querySelectorAll(".sec-4-tab-btn");
const sec4Panes = document.querySelectorAll(".sec-4-tab-pane");

sec4Buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const target = this.getAttribute("data-sec4-target");

        sec4Buttons.forEach((btn) => btn.classList.remove("sec-4-active"));
        this.classList.add("sec-4-active");

        sec4Panes.forEach((pane) => pane.classList.remove("sec-4-show"));
        document
            .getElementById("sec-4-" + target)
            .classList.add("sec-4-show");
    });
});

// section 4 endshere