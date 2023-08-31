window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const sliderRect = slider.getBoundingClientRect();
    const isVisible = (
      cardRect.left >= sliderRect.left - 50 &&
      cardRect.right <= sliderRect.right + 50
    );

    if (isVisible) {
      card.classList.add('center');
    } else {
      card.classList.remove('center');
    }
  });
});