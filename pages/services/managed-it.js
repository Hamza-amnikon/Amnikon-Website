const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.dataset.target;
  let count = 0;

  const update = () => {
    count += target / 100;

    if(count < target){
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
});// services.js


const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
});

document.querySelectorAll('.reveal')
.forEach(el=>observer.observe(el));
