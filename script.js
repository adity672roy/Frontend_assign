document.querySelectorAll('.service-box').forEach((box) => {
    box.addEventListener('mouseenter', () => {
      gsap.to(box, { rotation: 360, duration: 1 });
    });
    box.addEventListener('mouseleave', () => {
      gsap.to(box, { rotation: 0, duration: 0.01 });
    });
  });