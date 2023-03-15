function ref(ref: string): HTMLElement {
  return <HTMLElement>document.querySelector(`[data-ref="${ref}"]`)!;
}

const initLanguageSelector = () => {
  const $el = {
    languageSelector: ref("languageSelector"),
  };

  document.addEventListener("click", (event) => {
    if (
      event.target === $el.languageSelector ||
      $el.languageSelector.contains(<Node>event.target)
    ) {
      $el.languageSelector.classList.toggle("dropdown-open");
    } else {
      $el.languageSelector.classList.toggle("dropdown-open", false);
    }
  });
};

document.addEventListener("DOMContentLoaded", initLanguageSelector);
