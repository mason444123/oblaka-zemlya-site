(() => {
  const compact = window.matchMedia('(max-width: 760px), (hover: none) and (pointer: coarse)');
  const sync = () => {
    document.documentElement.classList.toggle('home-static-mobile', compact.matches);
    document.querySelectorAll('.brand-card video, .split-card video').forEach((video) => {
      if (compact.matches) {
        video.pause();
        video.removeAttribute('autoplay');
      }
    });
  };
  sync();
  compact.addEventListener?.('change', sync);
})();
