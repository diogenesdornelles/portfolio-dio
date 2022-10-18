function showSkills() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');

  hiddenElements.forEach((element) => observer.observe(element));
}

function modifyPhoto() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('modify');
      } else {
          entry.target.classList.remove('modify');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.image');
  hiddenElements.forEach((element) => observer.observe(element));
}

modifyPhoto()
showSkills()
