function initialize(){stickyOpenBtn(),scrollFunction()}function openNav(){var e=document.getElementById("mySidebar");void 0!==e&&null!=e||addToSidebar(),document.getElementById("mySidebar").style.width="250px",document.getElementById("openbtn").style.visibility="hidden"}function closeNav(){document.getElementById("mySidebar").style.width="0",document.getElementById("openbtn").style.visibility="visible"}function stickyOpenBtn(){var e=document.getElementById("navbar"),l=e.offsetTop;window.pageYOffset>=l?e.classList.add("sticky"):e.classList.remove("sticky")}function addToSidebar(){document.getElementById("body").innerHTML+='<div id="mySidebar" class="sidebar"><a href="javascript:void(0)" id="closebtn" class="closebtn" onclick="closeNav()">&times;</button><a href="/about">About</a><a href="/blogs">Blog</a><a href="/gallery">Gallery</a><a href="/photo_journal">Photo Journal</a><br><br><ul id="sidebar-icon" class="icons"><li><a href="https://twitter.com/pragusa55" target=_blank class="fa fa-twitter"><span class="label"></span></a><li><a href="https://500px.com/pragusa55" target=_blank class="fa fa-500px"><span class="label"></span></a><li><a href="https://instagram.com/pragusa55" target=_blank class="fa fa-instagram"><span class="label"></span></a><li><a href="https://facebook.com/Apertureoflife" target=_blank class="fa fa-facebook"><span class="label"></span></a><li><a href="mailto: hello@pragusa.com" target=_blank class="fa fa-envelope"><span class="label"></span></a></ul></div>'}function scrollFunction(){var e=document.getElementById("myBtn");document.body.scrollTop>40||document.documentElement.scrollTop>40?e.style.display="block":e.style.display="none"}function clearPage(){var e=document.getElementById("mySidebar");void 0!==e&&null!=e&&closeNav()}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0,clearPage()}function addGalleryContent(){var e,l="";for(e=0;e<galleries.length;e++){var t=galleries[e].src||"",a=(galleries[e].desc,galleries[e].heading||"");l+='<div class="g-img-box"><a href = "'+(galleries[e].url||"")+'"><img src="'+t+'" alt="" /><div class="caption"><p>'+a+"</p></div></div>"}document.getElementById("gallery-image").innerHTML+=l}function addSubGalleryContent(dir){var j,temp1="",temp2="",galleries=eval(dir);for(j=0;j<galleries.length;j++){var source=galleries[j].src||"",desc=galleries[j].desc||" ",heading=galleries[j].heading||"",count=j+1;temp1+='<div class="sg-img-box"onclick="clearPage();openLightbox();toSlide('+count+')"/><img src="'+source+'"<div class="sg-transparent-box"></div></div>',temp2+='<div class="slide"><img  class="image-slide"    alt=" '+desc+' " src="'+source+'" /></div>'}document.getElementById("sub-gallery-image").innerHTML+=temp1,document.getElementById("modal-content").innerHTML+=temp2}let slideIndex=1;function openLightbox(){document.getElementById("Lightbox").style.display="block",document.body.style.position="fixed"}function closeLightbox(){document.getElementById("Lightbox").style.display="none",document.body.style.position="",document.body.style.top=""}function changeSlide(e){showSlide(slideIndex+=e)}function toSlide(e){showSlide(slideIndex=e)}function showSlide(e){const l=document.getElementsByClassName("slide");if(void 0!==l&&null!=l){e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length);for(let e=0;e<l.length;e++)l[e].style.display="none";l[slideIndex-1].style.display="block"}}function share(){var e=document.getElementById("share-list");"none"==e.style.display?e.style.display="block":e.style.display="none"}showSlide(slideIndex);