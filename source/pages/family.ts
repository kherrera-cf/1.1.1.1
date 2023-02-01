import '../styles/index.css'
import '../styles/nav.styl'
import './init.js'

function ref(ref: string): HTMLElement {
    return <HTMLElement>document.querySelector(`[data-ref="${ref}"]`)!;
}

function init() {

    const $el = {
        languageSelector: ref("languageSelector")
    };

    document.addEventListener("click", event => {

        if (
            event.target === $el.languageSelector ||
            $el.languageSelector.contains(<Node>event.target)
        ) {
            $el.languageSelector.classList.toggle("dropdown-open");
        } else {
            $el.languageSelector.classList.toggle("dropdown-open", false);
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

