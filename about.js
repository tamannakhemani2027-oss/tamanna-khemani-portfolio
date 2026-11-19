const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');revealObserver.unobserve(entry.target)}}),{threshold:.14});
document.querySelectorAll('.detail-grid article,.about-end').forEach((item,index)=>{item.classList.add('reveal');item.style.transitionDelay=`${index*100}ms`;revealObserver.observe(item)});
