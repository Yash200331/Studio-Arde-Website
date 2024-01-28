// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#wrapper"),
    smooth: true,
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#wrapper", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#wrapper").style.transform
      ? "transform"
      : "fixed",
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  Shery.mouseFollower({
    
  });
  gsap.to("#page1 h1",{
    x:"-150%",
    scrollTrigger:{
      trigger:"#page1",
      scroller:"#wrapper",
      start:"top top",
      
      
      scrub:1
    }
  })
  gsap.to("#page1 footer .left-h4",{
    x:"-150%",
    scrollTrigger:{
      trigger:"#page1",
      scroller:"#wrapper",
      start:"top top",
     
      scrub:1
    }
  })
  gsap.to("#page1 footer .right-h4",{
    x:"150%",
    scrollTrigger:{
      trigger:"#page1",
      scroller:"#wrapper",
      start:"top top",
      
      scrub:0.3 
    }
  })
  gsap.to("#page2 h1",{
    opacity: "1",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#wrapper",
      start: "top 50%",
      end:"top 50%",
      // markers: true, 
      scrub: 1
    }
  });

  gsap.to("#page3 h1",{
    opacity: "1",
    // color:"blue",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#wrapper",
      start: "top 50%",
      end:"top 50%",
      // markers: true, 
      scrub: 1
    }
  })
  gsap.to("#page4 h1",{
    scrollTrigger: {
      pin:true,
      trigger: "#page4 h1",
      scroller: "#wrapper",
      start: "top 13%",
      end:"380% top",
      // markers: true, 
      scrub: 1
    }
  })

  gsap.to(".page5",{
    opacity: "1",
    // color:"blue",
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#wrapper",
      start: "top 50%",
      end:"top 50%",
      // markers: true, 
      scrub:2
    }
  })
  gsap.to("#page7 .top h1",{
    opacity: "1",
    // color:"blue",
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#wrapper",
      start: "top 30%",
      end:"top 30%",
      // markers: true, 
      scrub:2
    }
  })
  document.querySelectorAll("#page6 h1").forEach(function (open) {
    var click = 1;
    open.addEventListener("click", function (event) {
        var target = event.target.parentElement.querySelector(".open");
        if (click === 1) {
            
            gsap.to(target, {
                height: "100%",
                opacity: 1,
                duration: 0.1, 
            });
            click = 2;
        } else if (click === 2) {
            
            gsap.to(target, {
                height: 0,
                opacity: 0,
                duration: 0.1, 
            });
            click = 1;
        }
    });
});


const imgArray = [
  "Images6.png",
  "https://images.unsplash.com/photo-1699870798609-b5c3e7e5900d?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Images8.png",
  "https://images.unsplash.com/photo-1705947172050-f930e2856301?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1705927288742-393ba2746e32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const textContent = {
  click1: {
    h4: '"Das Ergebnis meiner Consulting Brand ist toller als ich es mir je hätte erträumen können!"',
    p: "Desiree Jonek, Diversity Consulting"
  },
  click2: {
    h4: '"Von HERZEN danke! Danke, dass ihr uns gehört habt und es so unfassbar gut umgesetzt habt. Danke, dass ihr unserer Vision diese Tiefe gegeben habt und mit vollem Herzen dabei wart."',
    p: "Sinja Berndt, Colors of Love"
  },
  click3: {
    h4: '"Ich möchte euch einfach mal kurz Danke sagen. Danke für die tolle Beratung, die Geduld und das wunderschöne Resultat."',
    p: "Darja Möhlmann, Lemona Workspace GmbH"
  },
  click4: {
    h4: '"Ich kann Studio Ardē wärmstens empfehlen. Wir haben die besten Erfahrungen mit Johanna gemacht, unser neues Marken-Design haben wir ihr zu verdanken."',
    p: "Andrea Lems, Maisonette Concept Store Wien"
  },
  click5: {
    h4: '"Ich habe für mein Unternehmen ein Rebranding geplant und habe mir Hilfe von Johanna geholt. Sie ist ein unglaublich talentierter Mensch, und ich bin unendlich froh, dass ich mich mit meinem Anliegen an sie gewandt habe."',
    p: "Kristina Sachartschenko, Kaara Stories"
  }
};



let currentIndex = 0;

function updateContent() {
  const imgElement = document.querySelector('.image-con img');
  const h4Element = document.querySelector('.text-con h4');
  const pElement = document.querySelector('.text-con p');

  imgElement.src = imgArray[currentIndex];
  h4Element.textContent = textContent[`click${currentIndex + 1}`].h4;
  pElement.textContent = textContent[`click${currentIndex + 1}`].p;
}

document.querySelector('.left-move').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
  updateContent();
});

document.querySelector('.right-move').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imgArray.length;
  updateContent();
});

// Initial content update
updateContent();